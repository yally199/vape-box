from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List, Optional
import pandas as pd
import os
import sqlite3
import json
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "vape_shop.db"
EXCEL_FILE = "prices.xlsx"

TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
TELEGRAM_ADMIN_ID = os.getenv("TELEGRAM_ADMIN_ID", "")


class UTF8JSONResponse(JSONResponse):
    media_type = "application/json; charset=utf-8"


app.router.default_response_class = UTF8JSONResponse


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
        return int((base_price * 1.25) / 10) * 10
    elif base_price < 2000:
        return int((base_price * 1.20) / 10) * 10
    elif base_price < 3000:
        return int((base_price * 1.15) / 10) * 10
    else:
        return int((base_price * 1.12) / 10) * 10


def parse_price(value):
    if value is None:
        return 0
    try:
        if pd.isna(value):
            return 0
    except (TypeError, ValueError):
        pass
    if isinstance(value, (int, float)):
        try:
            return float(value)
        except (TypeError, ValueError):
            return 0
    s = str(value).strip()
    s = s.replace(' ', '').replace('₽', '').replace('руб.', '').replace('руб', '').replace('р.', '').replace('р', '')
    s = s.replace(',', '.')
    cleaned = ''
    for ch in s:
        if ch.isdigit() or ch == '.':
            cleaned += ch
    if not cleaned:
        return 0
    try:
        return float(cleaned)
    except ValueError:
        return 0


def import_from_excel():
    if not os.path.exists(EXCEL_FILE):
        print(f"[IMPORT] Файл {EXCEL_FILE} не найден!")
        return 0

    try:
        df = pd.read_excel(EXCEL_FILE, header=0, engine='openpyxl')
        df = df.dropna(how='all')
        print(f"[IMPORT] Строк в файле: {len(df)}")
        print(f"[IMPORT] Колонки: {list(df.columns)}")

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM products")

        count = 0
        skipped_no_price = 0
        skipped_no_name = 0
        skipped_raznoe = 0

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

            if category == 'Разное':
                skipped_raznoe += 1
                continue

            price_cols = [
                'Цена: от 1000р', 'Цена: от 3 000р', 'Цена: от 10 000р',
                'Цена: от 30 000р', 'Цена: от 50 000р', 'Цена: от 100 000р',
            ]
            base_price = 0
            for col in price_cols:
                if col in df.columns:
                    parsed = parse_price(row.get(col))
                    if parsed > 0:
                        base_price = parsed
                        break

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
        print(f"[IMPORT] Пропущено (Разное): {skipped_raznoe}")
        return count

    except Exception as e:
        print(f"[IMPORT] ОШИБКА: {e}")
        import traceback
        traceback.print_exc()
        return 0


IMPORTED_COUNT = import_from_excel()


# ===== ОТПРАВКА В TELEGRAM =====

def send_telegram_message(text):
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_ADMIN_ID:
        print("[TG] Не настроены переменные окружения — уведомление не отправлено")
        return False
    try:
        import urllib.request
        import urllib.parse
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        payload = urllib.parse.urlencode({
            "chat_id": TELEGRAM_ADMIN_ID,
            "text": text,
            "parse_mode": "HTML"
        }).encode("utf-8")
        req = urllib.request.Request(url, data=payload)
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f"[TG] Уведомление отправлено, статус: {resp.status}")
            return True
    except Exception as e:
        print(f"[TG] Ошибка отправки: {e}")
        return False


# ===== МОДЕЛИ ДЛЯ ЗАКАЗОВ =====

class OrderItem(BaseModel):
    name: str
    brand: Optional[str] = ""
    quantity: int
    price: float
    total: float


class OrderCustomer(BaseModel):
    name: str
    telegram: Optional[str] = ""
    phone: Optional[str] = ""
    address: Optional[str] = ""
    comment: Optional[str] = ""


class OrderIn(BaseModel):
    id: str
    customer: OrderCustomer
    items: List[OrderItem]
    total: float
    date: Optional[str] = ""


# ===== ЭНДПОИНТЫ =====

@app.get("/")
def read_root():
    return {"message": "VAPE BOX API работает!", "imported": IMPORTED_COUNT}


@app.get("/api/products")
def get_products():
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
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


@app.post("/api/orders")
def create_order(order: OrderIn):
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()
    try:
        cursor.execute('''
            INSERT INTO orders (
                order_number, customer_name, customer_telegram,
                customer_phone, customer_address, comment,
                items, total, status, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            order.id,
            order.customer.name,
            order.customer.telegram,
            order.customer.phone,
            order.customer.address,
            order.customer.comment,
            json.dumps([item.dict() for item in order.items], ensure_ascii=False),
            order.total,
            'Новый',
            order.date or datetime.now().isoformat()
        ))
        conn.commit()

        # Формируем сообщение для Telegram
        items_text = "\n".join([
            f"  • {item.name} × {item.quantity} = {item.total:.0f}₽"
            for item in order.items
        ])
        text = (
            f"🛍️ <b>НОВЫЙ ЗАКАЗ №{order.id}</b>\n\n"
            f"<b>Клиент:</b> {order.customer.name}\n"
        )
        if order.customer.telegram:
            text += f"<b>Telegram:</b> {order.customer.telegram}\n"
        if order.customer.phone:
            text += f"<b>Телефон:</b> {order.customer.phone}\n"
        if order.customer.address:
            text += f"<b>Адрес:</b> {order.customer.address}\n"
        if order.customer.comment:
            text += f"<b>Комментарий:</b> {order.customer.comment}\n"
        text += f"\n<b>Товары:</b>\n{items_text}\n"
        text += f"\n<b>Итого: {order.total:.0f}₽</b>"

        send_telegram_message(text)

        return {"success": True, "order_number": order.id}

    except sqlite3.IntegrityError:
        return {"success": False, "error": "Заказ с таким номером уже существует"}
    except Exception as e:
        print(f"[ORDER] Ошибка: {e}")
        import traceback
        traceback.print_exc()
        return {"success": False, "error": str(e)}
    finally:
        conn.close()


@app.get("/api/orders")
def get_orders():
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()
    cursor.execute('''
        SELECT order_number, customer_name, customer_telegram,
               customer_phone, customer_address, comment,
               items, total, status, created_at
        FROM orders
        ORDER BY created_at DESC
    ''')
    rows = cursor.fetchall()
    conn.close()

    orders = []
    for row in rows:
        try:
            items_parsed = json.loads(row[6]) if row[6] else []
        except Exception:
            items_parsed = []
        orders.append({
            "order_number": row[0],
            "customer_name": row[1],
            "customer_telegram": row[2],
            "customer_phone": row[3],
            "customer_address": row[4],
            "comment": row[5],
            "items": items_parsed,
            "total": row[7],
            "status": row[8],
            "created_at": row[9],
        })
    return {"orders": orders}
