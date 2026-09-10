from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os
import sqlite3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "vape_shop.db"
EXCEL_FILE = "prices.xlsx"


def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
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


def calculate_price(base_price):
    if base_price == 0 or not base_price:
        return 0
    if base_price < 1000:
        return int((base_price * 1.30) / 10) * 10
    else:
        return int((base_price * 1.25) / 10) * 10


def import_from_excel():
    if not os.path.exists(EXCEL_FILE):
        print(f"[IMPORT] Файл {EXCEL_FILE} не найден!")
        return 0

    try:
        df = pd.read_excel(EXCEL_FILE, header=0)
        df = df.dropna(how='all')
        print(f"[IMPORT] Строк в файле: {len(df)}")
        print(f"[IMPORT] Колонки: {list(df.columns)}")

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM products")

        count = 0
        skipped_no_price = 0
        skipped_no_name = 0

        for _, row in df.iterrows():
            name = str(row.get('Наименование', '')).strip()
            if not name or name.lower() == 'nan':
                skipped_no_name += 1
                continue

            category_raw = str(row.get('Группы', '')).strip()
            if not category_raw or category_raw.lower() == 'nan':
                category_raw = 'Разное'

            parts = [p.strip() for p in category_raw.split('/') if p.strip()]
            if len(parts) >= 3:
                category, brand, series = parts[0], parts[1], parts[2]
            elif len(parts) == 2:
                category, brand, series = parts[0], parts[1], ''
            elif len(parts) == 1:
                category, brand, series = parts[0], 'Разное', ''
            else:
                category, brand, series = 'Разное', 'Разное', ''

            price_cols = [
                'Цена: от 1000р', 'Цена: от 3 000р', 'Цена: от 10 000р',
                'Цена: от 30 000р', 'Цена: от 50 000р', 'Цена: от 100 000р',
            ]
            base_price = 0
            for col in price_cols:
                if col in df.columns:
                    val = row.get(col)
                    if pd.notna(val):
                        try:
                            val = float(val)
                            if val > 0:
                                base_price = val
                                break
                        except (ValueError, TypeError):
                            continue

            if base_price == 0:
                skipped_no_price += 1
                continue

            final_price = calculate_price(base_price)

            cursor.execute('''
                INSERT INTO products (name, price, stock, category, description, brand, series)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ''', (name, final_price, 99, category, 'Импортировано из Excel', brand, series))

            count += 1

        conn.commit()
        conn.close()
        print(f"[IMPORT] Добавлено: {count}")
        print(f"[IMPORT] Пропущено (нет цены): {skipped_no_price}")
        print(f"[IMPORT] Пропущено (нет названия): {skipped_no_name}")
        return count

    except Exception as e:
        print(f"[IMPORT] ОШИБКА: {e}")
        import traceback
        traceback.print_exc()
        return 0


IMPORTED_COUNT = import_from_excel()


@app.get("/")
def read_root():
    return {"message": "VAPE BOX API работает!", "imported": IMPORTED_COUNT}


@app.get("/api/products")
def get_products():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, price, stock, category, description, brand, series FROM products")
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
            "series": row[7] or "",
        })
    return {"products": products}


@app.post("/api/reload")
def reload_products():
    count = import_from_excel()
    return {"message": f"Товары обновлены. Всего: {count}", "count": count}


@app.post("/api/upload-excel")
async def upload_excel(file: UploadFile = File(...)):
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
