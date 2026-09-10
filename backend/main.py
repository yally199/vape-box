from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os
import json
import sqlite3
from datetime import datetime

app = FastAPI()

# Разрешаем запросы с любых адресов
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===== БАЗА ДАННЫХ =====
DB_PATH = "vape_shop.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Таблица товаров
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            stock INTEGER DEFAULT 0,
            category TEXT,
            description TEXT,
            image TEXT,
            brand TEXT,
            series TEXT
        )
    ''')
    
    # Таблица заказов
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_number TEXT NOT NULL UNIQUE,
            customer_name TEXT,
            customer_telegram TEXT,
            customer_phone TEXT,
            customer_address TEXT,
            comment TEXT,
            items TEXT,
            total REAL,
            status TEXT DEFAULT 'Новый',
            created_at TEXT
        )
    ''')
    
    conn.commit()
    conn.close()

init_db()

# ===== РАСЧЁТ ЦЕНЫ С НАЦЕНКОЙ =====
def calculate_price(base_price):
    if base_price == 0 or not base_price:
        return 0
    if base_price < 1000:
        return int((base_price * 1.30) / 10) * 10
    else:
        return int((base_price * 1.25) / 10) * 10

# ===== ИМПОРТ ИЗ EXCEL =====
EXCEL_FILE = "prices.xlsx"

def import_from_excel():
    if not os.path.exists(EXCEL_FILE):
        print(f"Файл {EXCEL_FILE} не найден!")
        return 0
    
    try:
        df = pd.read_excel(EXCEL_FILE, header=0)
        df = df.dropna(how='all')
        
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        # Очищаем таблицу товаров
        cursor.execute("DELETE FROM products")
        
        count = 0
        for index, row in df.iterrows():
            name = str(row.get('Наименование', ''))
            if pd.isna(name) or name == '' or name == 'nan':
                continue
            
            # Определяем категорию из колонки "Группы"
            category = str(row.get('Группы', ''))
            if pd.isna(category) or category == 'nan':
                category = ''
            
            # Определяем бренд (первая часть из категории)
            brand = ''
            if category and '/' in category:
                parts = category.split('/')
                if len(parts) >= 2:
                    brand = parts[1]  # например, "Angry Vape"
            
            # Базовая цена (берём первую колонку с ценой)
            base_price = 0
            price_cols = ['Цена: от 1000р', 'Цена: от 3000р', 'Цена: от 10000р', 'Цена: от 30000р', 'Цена: от 50000р', 'Цена: от 100000р']
            for col in price_cols:
                if col in df.columns:
                    val = row.get(col)
                    if pd.notna(val) and val > 0:
                        base_price = val
                        break
            
            # Если цена 0 — пропускаем товар
            if base_price == 0:
                continue
            
            # Применяем наценку
            final_price = calculate_price(base_price)
            
            # Остаток (по умолчанию 99)
            stock = 99
            
            # Вставляем товар в базу
            cursor.execute('''
                INSERT INTO products (name, price, stock, category, description, brand)
                VALUES (?, ?, ?, ?, ?, ?)
            ''', (name, final_price, stock, category, f"Импортировано из Excel", brand))
            
            count += 1
        
        conn.commit()
        conn.close()
        print(f"Импортировано {count} товаров из Excel")
        return count
        
    except Exception as e:
        print(f"Ошибка при импорте: {e}")
        return 0

# Импортируем при старте
IMPORTED_COUNT = import_from_excel()

# ===== API =====

@app.get("/")
def read_root():
    return {"message": "VAPE BOX API работает!", "imported": IMPORTED_COUNT}

@app.get("/api/products")
def get_products():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, price, stock, category, description, brand FROM products")
    rows = cursor.fetchall()
    conn.close()
    
    products = []
    for row in rows:
        products.append({
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "stock": row[3],
            "category": row[4] or "",
            "description": row[5] or "",
            "brand": row[6] or "",
        })
    
    return {"products": products}

@app.post("/api/reload")
def reload_products():
    """Обновить товары из Excel"""
    count = import_from_excel()
    return {"message": f"Товары обновлены. Всего: {count}", "count": count}

@app.post("/api/upload-excel")
async def upload_excel(file: UploadFile = File(...)):
    """Загрузить новый Excel-файл на сервер"""
    contents = await file.read()
    with open(EXCEL_FILE, "wb") as f:
        f.write(contents)
    count = import_from_excel()
    return {"message": f"Файл загружен. Импортировано {count} товаров", "count": count}

@app.get("/api/count")
def get_count():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM products")
    count = cursor.fetchone()[0]
    conn.close()
    return {"count": count}
