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
            price_retail REAL DEFAULT 0,
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
            mode TEXT DEFAULT 'opt',
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
        return int((base_price * 1.20) / 10) * 10
    elif base_price < 2000:
        return int((base_price * 1.16) / 10) * 10
    elif base_price < 3000:
        return int((base_price * 1.15) / 10) * 10
    else:
        return int((base_price * 1.13) / 10) * 10

def calculate_price_retail(base_price):
    if base_price == 0 or not base_price:
        return 0
    if base_price < 1000:
        return int((base_price * 1.33) / 10) * 10
    elif base_price < 2000:
        return int((base_price * 1.29) / 10) * 10
    elif base_price < 3000:
        return int((base_price * 1.25) / 10) * 10
    else:
        return int((base_price * 1.23) / 10) * 10


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

            # Берём цену из столбца "от 3 000р" (и далее по возрастанию)
            price_cols = [
                'Цена: от 3 000р', 'Цена: от 10 000р',
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
            final_price_retail = calculate_price_retail(base_price)

            cursor.execute('''
                INSERT INTO products (name, price, price_retail, stock, category, description, brand, series)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ''', (name, final_price, final_price_retail, 99, category, '', brand, series))
            
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


def send_telegram_message(text, reply_markup=None):
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_ADMIN_ID:
        print("[TG] Не настроены переменные окружения — уведомление не отправлено")
        return False
    try:
        import urllib.request
        import urllib.parse
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        data = {
            "chat_id": TELEGRAM_ADMIN_ID,
            "text": text,
            "parse_mode": "HTML"
        }
        if reply_markup:
            data["reply_markup"] = json.dumps(reply_markup, ensure_ascii=False)
        payload = urllib.parse.urlencode(data).encode("utf-8")
        req = urllib.request.Request(url, data=payload)
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f"[TG] Уведомление отправлено, статус: {resp.status}")
            return True
    except Exception as e:
        print(f"[TG] Ошибка отправки: {e}")
        return False


def answer_callback(callback_query_id, text=""):
    """Отвечает на нажатие inline-кнопки."""
    if not TELEGRAM_BOT_TOKEN:
        return
    try:
        import urllib.request
        import urllib.parse
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/answerCallbackQuery"
        payload = urllib.parse.urlencode({
            "callback_query_id": callback_query_id,
            "text": text
        }).encode("utf-8")
        req = urllib.request.Request(url, data=payload)
        urllib.request.urlopen(req, timeout=10)
    except Exception as e:
        print(f"[TG] Ошибка callback: {e}")


# ===== МОДЕЛИ =====

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


class OrderStatusUpdate(BaseModel):
    status: str


# ===== ЭНДПОИНТЫ =====

@app.get("/")
def read_root():
    return {"message": "VAPE BOX API работает!", "imported": IMPORTED_COUNT}


@app.get("/api/products")
def get_products(limit: int = 100, offset: int = 0):
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM products")
    total = cursor.fetchone()[0]

    cursor.execute(
        "SELECT id, name, price, price_retail, stock, category, description, brand, series FROM products LIMIT ? OFFSET ?",
        (limit, offset)
    )
    rows = cursor.fetchall()
    conn.close()

    products = []
    for row in rows:
        products.append({
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "price_retail": row[3] or 0,
            "stock": row[4],
            "category": row[5] or "",
            "description": row[6] or "",
            "brand": row[7] or "",
            "series": row[8] or "",
        })

    return {
        "products": products,
        "total": total,
        "limit": limit,
        "offset": offset,
        "has_more": offset + len(products) < total
    }
@app.get("/api/products/by-category")
def get_products_by_category(
    category: str = "",
    brand: str = "",
    series: str = "",
    limit: int = 100,
    offset: int = 0
):
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()

    # Строим фильтр
    conditions = []
    params = []
    if category:
        conditions.append("category = ?")
        params.append(category)
    if brand:
        conditions.append("brand = ?")
        params.append(brand)
    if series:
        conditions.append("series = ?")
        params.append(series)

    where_sql = ("WHERE " + " AND ".join(conditions)) if conditions else ""

    # Общее количество
    cursor.execute(f"SELECT COUNT(*) FROM products {where_sql}", params)
    total = cursor.fetchone()[0]

    # Порция
    cursor.execute(
        f"SELECT id, name, price, price_retail, stock, category, description, brand, series FROM products {where_sql} LIMIT ? OFFSET ?",
        params + [limit, offset]
    )
    rows = cursor.fetchall()
    conn.close()

    products = []
    for row in rows:
        products.append({
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "price_retail": row[3] or 0,
            "stock": row[4],
            "category": row[5] or "",
            "description": row[6] or "",
            "brand": row[7] or "",
            "series": row[8] or "",
        })

    return {
        "products": products,
        "total": total,
        "limit": limit,
        "offset": offset,
        "has_more": offset + len(products) < total
    }
    
@app.get("/api/categories")
def get_categories_tree():
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()
    cursor.execute('''
        SELECT category, brand, series, COUNT(*) as count
        FROM products
        WHERE category != '' AND category IS NOT NULL
        GROUP BY category, brand, series
        ORDER BY category, brand, series
    ''')
    rows = cursor.fetchall()
    conn.close()

    tree = {}  # category -> {brands: {brand -> {series: [{name, count}]}}}
    for cat, brand, series, count in rows:
        cat = cat or 'Разное'
        brand = brand or 'Разное'
        series = series or 'Основное'

        if cat not in tree:
            tree[cat] = {'name': cat, 'brands': {}}
        if brand not in tree[cat]['brands']:
            tree[cat]['brands'][brand] = {'name': brand, 'series': {}}
        if series not in tree[cat]['brands'][brand]['series']:
            tree[cat]['brands'][brand]['series'][series] = {'name': series, 'count': 0}
        tree[cat]['brands'][brand]['series'][series]['count'] += count

    # Преобразуем в массивы
    result = []
    for cat_name, cat_data in tree.items():
        brands_arr = []
        for brand_name, brand_data in cat_data['brands'].items():
            series_arr = []
            for series_name, series_data in brand_data['series'].items():
                series_arr.append(series_data)
            brands_arr.append({'name': brand_name, 'series': series_arr})
        result.append({'name': cat_name, 'brands': brands_arr})

    return {'categories': result}


@app.get("/api/search")
def search_products(q: str = "", limit: int = 100):
    if not q or len(q.strip()) < 2:
        return {"products": [], "query": q, "total": 0}

    query = q.strip().lower()
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()

    search_pattern = f"%{query}%"
    cursor.execute('''
        SELECT id, name, price, price_retail, stock, category, description, brand, series
        FROM products
        WHERE LOWER(name) LIKE ?
           OR LOWER(brand) LIKE ?
           OR LOWER(series) LIKE ?
           OR LOWER(category) LIKE ?
        LIMIT ?
    ''', (search_pattern, search_pattern, search_pattern, search_pattern, limit))
    rows = cursor.fetchall()

    cursor.execute('''
        SELECT COUNT(*) FROM products
        WHERE LOWER(name) LIKE ?
           OR LOWER(brand) LIKE ?
           OR LOWER(series) LIKE ?
           OR LOWER(category) LIKE ?
    ''', (search_pattern, search_pattern, search_pattern, search_pattern))
    total = cursor.fetchone()[0]

    conn.close()

    products = []
    for row in rows:
        products.append({
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "price_retail": row[3] or 0,
            "stock": row[4],
            "category": row[5] or "",
            "description": row[6] or "",
            "brand": row[7] or "",
            "series": row[8] or "",
        })

    return {"products": products, "query": q, "total": total}


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
                items, total, mode, status, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            order.id,
            order.customer.name,
            order.customer.telegram,
            order.customer.phone,
            order.customer.address,
            order.customer.comment,
            json.dumps([item.dict() for item in order.items], ensure_ascii=False),
            order.total,
            order.mode or 'opt',
            'Новый',
            order.date or datetime.now().isoformat()
        ))
        conn.commit()

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

        keyboard = {
            "inline_keyboard": [
                [
                    {"text": "✅ Принять", "callback_data": f"status:{order.id}:Принят"},
                    {"text": "🚚 Отправил", "callback_data": f"status:{order.id}:Отправлен"}
                ],
                [
                    {"text": "🏁 Завершён", "callback_data": f"status:{order.id}:Завершён"},
                    {"text": "❌ Отменить", "callback_data": f"status:{order.id}:Отменён"}
                ]
            ]
        }
        send_telegram_message(text, reply_markup=keyboard)

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


@app.post("/api/orders/{order_number}/status")
def update_order_status(order_number: str, payload: OrderStatusUpdate):
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()
    try:
        cursor.execute(
            "UPDATE orders SET status = ? WHERE order_number = ?",
            (payload.status, order_number)
        )
        if cursor.rowcount == 0:
            return {"success": False, "error": "Заказ не найден"}
        conn.commit()
        return {"success": True, "order_number": order_number, "status": payload.status}
    except Exception as e:
        return {"success": False, "error": str(e)}
    finally:
        conn.close()


@app.delete("/api/orders/{order_number}")
def delete_order(order_number: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute("DELETE FROM orders WHERE order_number = ?", (order_number,))
        if cursor.rowcount == 0:
            return {"success": False, "error": "Заказ не найден"}
        conn.commit()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}
    finally:
        conn.close()


# ===== TELEGRAM WEBHOOK =====

@app.post("/api/telegram/webhook")
async def telegram_webhook(update: dict):
    try:
        if "callback_query" in update:
            cq = update["callback_query"]
            callback_id = cq.get("id")
            data = cq.get("data", "")

            if data.startswith("status:"):
                parts = data.split(":", 2)
                if len(parts) == 3:
                    _, order_number, new_status = parts

                    conn = sqlite3.connect(DB_PATH)
                    cursor = conn.cursor()
                    cursor.execute(
                        "UPDATE orders SET status = ? WHERE order_number = ?",
                        (new_status, order_number)
                    )
                    updated = cursor.rowcount
                    conn.commit()
                    conn.close()

                    if updated:
                        answer_callback(callback_id, f"✅ {new_status}")
                        send_telegram_message(
                            f"📝 Заказ <b>{order_number}</b> — статус изменён на <b>{new_status}</b>"
                        )
                    else:
                        answer_callback(callback_id, "❌ Заказ не найден")

        return {"ok": True}
    except Exception as e:
        print(f"[WEBHOOK] Ошибка: {e}")
        import traceback
        traceback.print_exc()
        return {"ok": True}


@app.get("/api/telegram/set-webhook")
def set_telegram_webhook():
    if not TELEGRAM_BOT_TOKEN:
        return {"success": False, "error": "TELEGRAM_BOT_TOKEN не задан"}

    webhook_url = "https://vape-box.onrender.com/api/telegram/webhook"
    try:
        import urllib.request
        import urllib.parse
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/setWebhook"
        payload = urllib.parse.urlencode({"url": webhook_url}).encode("utf-8")
        req = urllib.request.Request(url, data=payload)
        with urllib.request.urlopen(req, timeout=10) as resp:
            result = resp.read().decode("utf-8")
            print(f"[WEBHOOK] Установка: {result}")
            return {"success": True, "response": result}
    except Exception as e:
        print(f"[WEBHOOK] Ошибка установки: {e}")
        return {"success": False, "error": str(e)}
