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
import cloudinary
import cloudinary.uploader

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "vape_shop.db"
EXCEL_FILE = "prices.xlsx"          # Розница + Опт
EXCEL_FILE_2 = "prices2.xlsx"       # Опт от 5000 + Предзаказ

TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
TELEGRAM_ADMIN_ID = os.getenv("TELEGRAM_ADMIN_ID", "")

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
    secure=True
)


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
            series TEXT,
            article TEXT DEFAULT '',
            source TEXT DEFAULT 'main'
        )
    ''')

    # На случай старой БД — добавляем колонки если их нет
    try:
        cursor.execute("ALTER TABLE products ADD COLUMN article TEXT DEFAULT ''")
    except Exception:
        pass
    try:
        cursor.execute("ALTER TABLE products ADD COLUMN source TEXT DEFAULT 'main'")
    except Exception:
        pass

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_number TEXT NOT NULL UNIQUE,
            customer_name TEXT,
            customer_telegram TEXT,
            customer_telegram_id INTEGER,
            customer_phone TEXT,
            customer_address TEXT,
            comment TEXT,
            items TEXT,
            total REAL,
            mode TEXT DEFAULT 'opt',
            status TEXT DEFAULT 'Новый',
            created_at TEXT,
            delivery_type TEXT DEFAULT '',
            pickup_point TEXT DEFAULT '',
            delivery_address TEXT DEFAULT '',
            discount_percent REAL DEFAULT 0
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category TEXT,
            image_url TEXT,
            created_at TEXT
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS promos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id INTEGER NOT NULL UNIQUE,
            discount_percent REAL DEFAULT 10,
            created_at TEXT
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS referrals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            telegram_id INTEGER NOT NULL UNIQUE,
            inviter_id INTEGER,
            used_discount INTEGER DEFAULT 0,
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


def parse_article(value):
    if value is None:
        return ""
    try:
        if pd.isna(value):
            return ""
    except Exception:
        pass
    s = str(value).strip()
    if s.lower() == "nan":
        return ""
    # убираем .0 у чисел из excel
    if s.endswith(".0"):
        s = s[:-2]
    return s


def import_excel_file(filepath: str, source: str) -> int:
    """Импорт одного Excel-файла. source = 'main' | 'catalog2'"""
    if not os.path.exists(filepath):
        print(f"[IMPORT] Файл {filepath} не найден!")
        return 0

    try:
        df = pd.read_excel(filepath, header=0, engine='openpyxl')
        df = df.dropna(how='all')
        print(f"[IMPORT:{source}] Строк в файле: {len(df)}")
        print(f"[IMPORT:{source}] Колонки: {list(df.columns)}")

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()

        # Удаляем только товары этого source
        cursor.execute("DELETE FROM products WHERE source = ?", (source,))

        count = 0
        skipped_no_price = 0
        skipped_no_name = 0
        skipped_raznoe = 0

        for _, row in df.iterrows():
            name = str(row.get('Наименование', '')).strip()
            if not name or name.lower() == 'nan':
                skipped_no_name += 1
                continue

            # Пометка "нет в наличии" в названии
            name_lower = name.lower()
            in_stock = 99
            if 'нет в наличии' in name_lower:
                in_stock = 0
                name = name.replace(' - нет в наличии', '').replace('- нет в наличии', '').strip()

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

            base_price = parse_price(row.get('Цена', 0))
            if base_price == 0:
                skipped_no_price += 1
                continue

            final_price = calculate_price(base_price)
            final_price_retail = calculate_price_retail(base_price)
            article = parse_article(row.get('Артикул', ''))

            cursor.execute('''
                INSERT INTO products (name, price, price_retail, stock, category, description, brand, series, article, source)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (name, final_price, final_price_retail, in_stock, category, '', brand, series, article, source))

            count += 1

        conn.commit()
        conn.close()
        print(f"[IMPORT:{source}] Добавлено: {count}")
        print(f"[IMPORT:{source}] Пропущено (нет цены): {skipped_no_price}")
        print(f"[IMPORT:{source}] Пропущено (нет названия): {skipped_no_name}")
        print(f"[IMPORT:{source}] Пропущено (Разное): {skipped_raznoe}")
        return count

    except Exception as e:
        print(f"[IMPORT:{source}] ОШИБКА: {e}")
        import traceback
        traceback.print_exc()
        return 0


def import_all():
    c1 = import_excel_file(EXCEL_FILE, "main")
    c2 = import_excel_file(EXCEL_FILE_2, "catalog2")
    return c1 + c2


IMPORTED_COUNT = import_all()


def send_telegram_message(text, reply_markup=None):
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_ADMIN_ID:
        print("[TG] Не настроены переменные окружения")
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


def send_telegram_to_customer(chat_id, text, reply_markup=None):
    if not TELEGRAM_BOT_TOKEN or not chat_id:
        return False
    try:
        import urllib.request
        import urllib.parse
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        data = {
            "chat_id": chat_id,
            "text": text,
            "parse_mode": "HTML"
        }
        if reply_markup:
            data["reply_markup"] = json.dumps(reply_markup, ensure_ascii=False)
        payload = urllib.parse.urlencode(data).encode("utf-8")
        req = urllib.request.Request(url, data=payload)
        with urllib.request.urlopen(req, timeout=10) as resp:
            return True
    except Exception as e:
        print(f"[TG-CLIENT] Ошибка: {e}")
        return False


def upload_image_to_cloudinary(image_bytes, filename="image.jpg"):
    if not os.getenv("CLOUDINARY_CLOUD_NAME"):
        print("[CLOUDINARY] Нет настроек Cloudinary")
        return None
    try:
        result = cloudinary.uploader.upload(
            image_bytes,
            folder="vape_shop",
            resource_type="image",
            quality="auto",
            fetch_format="auto"
        )
        url = result.get("secure_url")
        print(f"[CLOUDINARY] Загружено: {url}")
        return url
    except Exception as e:
        print(f"[CLOUDINARY] Ошибка: {e}")
        return None


def notify_customer_status(order_number, new_status):
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()
    cursor.execute(
        "SELECT customer_name, customer_telegram_id FROM orders WHERE order_number = ?",
        (order_number,)
    )
    row = cursor.fetchone()
    conn.close()

    if not row:
        return

    customer_tg_id = row[1]
    if not customer_tg_id:
        return

    texts = {
        "Принят": f"✅ <b>Заказ №{order_number} принят!</b>\n\nМы начали обработку вашего заказа и свяжемся с вами для подтверждения.",
        "Отправлен": f"🚚 <b>Заказ №{order_number} отправлен!</b>\n\nПо вопросам доставки обращайтесь к менеджеру.",
        "Завершён": f"🎉 <b>Заказ №{order_number} завершён!</b>\n\nСпасибо за покупку! Будем рады видеть вас снова.",
        "Отменён": f"❌ <b>Заказ №{order_number} отменён.</b>\n\nЕсли это ошибка — свяжитесь с менеджером.",
    }

    text = texts.get(new_status)
    if text:
        send_telegram_to_customer(customer_tg_id, text)


def answer_callback(callback_query_id, text=""):
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
    telegram_id: Optional[int] = None


class OrderIn(BaseModel):
    id: str
    customer: OrderCustomer
    items: List[OrderItem]
    total: float
    mode: Optional[str] = "opt"
    date: Optional[str] = ""
    delivery_type: Optional[str] = ""
    pickup_point: Optional[str] = ""
    delivery_address: Optional[str] = ""
    discount_percent: Optional[float] = 0


class OrderStatusUpdate(BaseModel):
    status: str


class PromoIn(BaseModel):
    product_id: int
    discount_percent: Optional[float] = 10


# ===== ЭНДПОИНТЫ =====

@app.get("/")
def read_root():
    return {"message": "VAPE BOX API работает!", "imported": IMPORTED_COUNT}


def mode_to_source(mode: str) -> str:
    """Какой каталог товаров соответствует режиму"""
    if mode in ("opt5000", "preorder"):
        return "catalog2"
    return "main"


@app.get("/api/products")
def get_products(limit: int = 100, offset: int = 0, mode: str = "", source: str = ""):
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()

    # Определяем source
    if mode:
        src = mode_to_source(mode)
    elif source:
        src = source
    else:
        src = "main"

    cursor.execute("SELECT COUNT(*) FROM products WHERE source = ?", (src,))
    total = cursor.fetchone()[0]

    cursor.execute(
        """SELECT id, name, price, price_retail, stock, category, description, brand, series, article, source
           FROM products WHERE source = ? LIMIT ? OFFSET ?""",
        (src, limit, offset)
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
            "article": row[9] or "",
            "source": row[10] or "main",
        })

    return {
        "products": products,
        "total": total,
        "limit": limit,
        "offset": offset,
        "source": src,
        "has_more": offset + len(products) < total
    }


@app.get("/api/products/by-category")
def get_products_by_category(
    category: str = "",
    brand: str = "",
    series: str = "",
    mode: str = "",
    limit: int = 100,
    offset: int = 0
):
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()

    src = mode_to_source(mode) if mode else "main"

    conditions = ["source = ?"]
    params = [src]

    if category:
        conditions.append("category = ?")
        params.append(category)
    if brand:
        conditions.append("brand = ?")
        params.append(brand)
    if series:
        conditions.append("series = ?")
        params.append(series)

    where_sql = "WHERE " + " AND ".join(conditions)

    cursor.execute(f"SELECT COUNT(*) FROM products {where_sql}", params)
    total = cursor.fetchone()[0]

    cursor.execute(
        f"""SELECT id, name, price, price_retail, stock, category, description, brand, series, article, source
            FROM products {where_sql} LIMIT ? OFFSET ?""",
        params + [limit, offset]
    )
    rows = cursor.fetchall()
    conn.close()

    products = []
    for row in rows:
        products.append({
            "id": row[0], "name": row[1], "price": row[2], "price_retail": row[3] or 0,
            "stock": row[4], "category": row[5] or "", "description": row[6] or "",
            "brand": row[7] or "", "series": row[8] or "", "article": row[9] or "",
            "source": row[10] or "main",
        })

    return {
        "products": products,
        "total": total,
        "limit": limit,
        "offset": offset,
        "has_more": offset + len(products) < total
    }


@app.get("/api/categories")
def get_categories_tree(mode: str = ""):
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()

    src = mode_to_source(mode) if mode else "main"

    cursor.execute('''
        SELECT category, brand, series, COUNT(*) as count
        FROM products
        WHERE source = ? AND category != '' AND category IS NOT NULL
        GROUP BY category, brand, series
        ORDER BY category, brand, series
    ''', (src,))
    rows = cursor.fetchall()
    conn.close()

    tree = {}
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

    result = []
    for cat_name, cat_data in tree.items():
        brands_arr = []
        for brand_name, brand_data in cat_data['brands'].items():
            series_arr = list(brand_data['series'].values())
            brands_arr.append({'name': brand_name, 'series': series_arr})
        result.append({'name': cat_name, 'brands': brands_arr})

    return {'categories': result, 'source': src}


@app.get("/api/search")
def search_products(q: str = "", mode: str = "", limit: int = 100):
    if not q or len(q.strip()) < 2:
        return {"products": [], "query": q, "total": 0}

    query = q.strip().lower()
    src = mode_to_source(mode) if mode else "main"

    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()

    search_pattern = f"%{query}%"
    cursor.execute('''
        SELECT id, name, price, price_retail, stock, category, description, brand, series, article, source
        FROM products
        WHERE source = ?
          AND (LOWER(name) LIKE ?
           OR LOWER(brand) LIKE ?
           OR LOWER(series) LIKE ?
           OR LOWER(category) LIKE ?
           OR LOWER(article) LIKE ?)
        LIMIT ?
    ''', (src, search_pattern, search_pattern, search_pattern, search_pattern, search_pattern, limit))
    rows = cursor.fetchall()

    cursor.execute('''
        SELECT COUNT(*) FROM products
        WHERE source = ?
          AND (LOWER(name) LIKE ?
           OR LOWER(brand) LIKE ?
           OR LOWER(series) LIKE ?
           OR LOWER(category) LIKE ?
           OR LOWER(article) LIKE ?)
    ''', (src, search_pattern, search_pattern, search_pattern, search_pattern, search_pattern))
    total = cursor.fetchone()[0]
    conn.close()

    products = []
    for row in rows:
        products.append({
            "id": row[0], "name": row[1], "price": row[2], "price_retail": row[3] or 0,
            "stock": row[4], "category": row[5] or "", "description": row[6] or "",
            "brand": row[7] or "", "series": row[8] or "", "article": row[9] or "",
            "source": row[10] or "main",
        })

    return {"products": products, "query": q, "total": total, "source": src}


@app.post("/api/reload")
def reload_products():
    count = import_all()
    return {"message": f"Товары обновлены. Всего: {count}", "count": count}


@app.post("/api/upload-excel")
async def upload_excel(file: UploadFile = File(...), source: str = "main"):
    """source=main → prices.xlsx, source=catalog2 → prices2.xlsx"""
    contents = await file.read()
    target = EXCEL_FILE_2 if source == "catalog2" else EXCEL_FILE
    with open(target, "wb") as f:
        f.write(contents)
    count = import_excel_file(target, "catalog2" if source == "catalog2" else "main")
    return {"message": f"Файл загружен ({source}). Импортировано {count} товаров", "count": count, "source": source}


@app.get("/api/count")
def get_count():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT source, COUNT(*) FROM products GROUP BY source")
    rows = cursor.fetchall()
    conn.close()
    result = {row[0]: row[1] for row in rows}
    result["total"] = sum(result.values())
    return result


# ===== АКЦИИ =====

@app.get("/api/promos")
def get_promos():
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()
    cursor.execute('''
        SELECT p.id, p.name, p.price, p.price_retail, p.stock, p.category, p.brand, p.series, pr.discount_percent, p.source
        FROM promos pr
        JOIN products p ON p.id = pr.product_id
        ORDER BY pr.id DESC
    ''')
    rows = cursor.fetchall()
    conn.close()
    promos = []
    for row in rows:
        promos.append({
            "id": row[0], "name": row[1], "price": row[2], "price_retail": row[3] or 0,
            "stock": row[4], "category": row[5] or "", "brand": row[6] or "",
            "series": row[7] or "", "discount_percent": row[8] or 10, "source": row[9] or "main"
        })
    return {"promos": promos}


@app.post("/api/promos")
def add_promo(payload: PromoIn):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT id FROM products WHERE id = ?", (payload.product_id,))
        if not cursor.fetchone():
            return {"success": False, "error": "Товар не найден"}
        cursor.execute(
            "INSERT OR REPLACE INTO promos (product_id, discount_percent, created_at) VALUES (?, ?, ?)",
            (payload.product_id, payload.discount_percent or 10, datetime.now().isoformat())
        )
        conn.commit()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}
    finally:
        conn.close()


@app.delete("/api/promos/{product_id}")
def delete_promo(product_id: int):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute("DELETE FROM promos WHERE product_id = ?", (product_id,))
        if cursor.rowcount == 0:
            return {"success": False, "error": "Товар не найден в акциях"}
        conn.commit()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}
    finally:
        conn.close()


# ===== РЕФЕРАЛЫ =====

@app.get("/api/referral/{telegram_id}")
def get_referral_status(telegram_id: int):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(
        "SELECT inviter_id, used_discount FROM referrals WHERE telegram_id = ?",
        (telegram_id,)
    )
    row = cursor.fetchone()
    conn.close()
    if not row:
        return {"has_discount": False, "inviter_id": None}
    inviter_id, used = row
    return {
        "has_discount": used == 0 and inviter_id is not None,
        "inviter_id": inviter_id
    }


@app.post("/api/referral/use/{telegram_id}")
def use_referral_discount(telegram_id: int):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE referrals SET used_discount = 1 WHERE telegram_id = ? AND used_discount = 0",
        (telegram_id,)
    )
    conn.commit()
    updated = cursor.rowcount
    conn.close()
    return {"success": updated > 0}


# ===== ЗАКАЗЫ =====

MODE_LABELS = {
    "opt": "📦 ОПТ (от 2500)",
    "retail": "🛒 РОЗНИЦА",
    "opt5000": "📦 ОПТ от 5000",
    "preorder": "⏳ ПРЕДЗАКАЗ (4–5 дней)",
}

MIN_ORDER = {
    "opt": 2500,
    "opt5000": 4500,
    "retail": 0,
    "preorder": 0,
}


@app.post("/api/orders")
def create_order(order: OrderIn):
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()
    try:
        cursor.execute('SELECT order_number FROM orders WHERE order_number = ?', (order.id,))
        if cursor.fetchone():
            return {"success": False, "error": "Такой заказ уже создан"}

        # Проверка минималки
        mode = order.mode or "opt"
        min_sum = MIN_ORDER.get(mode, 0)
        if min_sum > 0 and order.total < min_sum:
            return {
                "success": False,
                "error": f"Минимальная сумма заказа для этого режима: {min_sum}₽"
            }

        if order.customer.telegram_id and order.discount_percent and order.discount_percent > 0:
            cursor.execute(
                "UPDATE referrals SET used_discount = 1 WHERE telegram_id = ? AND used_discount = 0",
                (order.customer.telegram_id,)
            )

        cursor.execute('''
            INSERT INTO orders (
                order_number, customer_name, customer_telegram,
                customer_telegram_id, customer_phone, customer_address, comment,
                items, total, mode, status, created_at,
                delivery_type, pickup_point, delivery_address, discount_percent
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            order.id,
            order.customer.name,
            order.customer.telegram,
            order.customer.telegram_id,
            order.customer.phone,
            order.customer.address,
            order.customer.comment,
            json.dumps([item.dict() for item in order.items], ensure_ascii=False),
            order.total,
            mode,
            'Новый',
            order.date or datetime.now().isoformat(),
            order.delivery_type or '',
            order.pickup_point or '',
            order.delivery_address or '',
            order.discount_percent or 0
        ))
        conn.commit()

        items_text = "\n".join([
            f"  • {item.name} × {item.quantity} = {item.total:.0f}₽"
            for item in order.items
        ])
        mode_label = MODE_LABELS.get(mode, mode)

        delivery_text = ""
        if order.delivery_type == "delivery":
            delivery_text = f"\n🚚 <b>Доставка</b>\nАдрес: {order.delivery_address or '—'}\n(стоимость уточнит менеджер)"
        elif order.delivery_type == "pickup":
            delivery_text = f"\n🏪 <b>Самовывоз</b>\nТочка: {order.pickup_point or '—'}"
            if order.discount_percent and order.discount_percent > 0:
                delivery_text += f"\n💥 Скидка: -{order.discount_percent:.0f}%"

        text = (
            f"🛍️ <b>НОВЫЙ ЗАКАЗ №{order.id}</b> [{mode_label}]\n\n"
            f"<b>Клиент:</b> {order.customer.name}\n"
        )
        if order.customer.telegram:
            text += f"<b>Telegram:</b> {order.customer.telegram}\n"
        if order.customer.phone:
            text += f"<b>Телефон:</b> {order.customer.phone}\n"
        if order.customer.comment:
            text += f"<b>Комментарий:</b> {order.customer.comment}\n"

        text += delivery_text
        text += f"\n\n<b>Товары:</b>\n{items_text}\n"
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

        if order.customer.telegram_id:
            client_text = (
                f"🛍️ <b>Спасибо, {order.customer.name}!</b>\n\n"
                f"Ваш заказ <b>№{order.id}</b> принят ✅\n\n"
                f"Режим: <b>{mode_label}</b>\n"
                f"Сумма: <b>{order.total:.0f}₽</b>\n\n"
            )
            if mode == "preorder":
                client_text += "⏳ Срок ожидания: 4–5 дней\n\n"
            if order.delivery_type == "delivery":
                client_text += "Менеджер скоро напишет и уточнит стоимость доставки.\n\n"
            client_text += "Мы свяжемся с вами в ближайшее время."
            send_telegram_to_customer(order.customer.telegram_id, client_text)

        return {"success": True, "order_number": order.id}
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
               items, total, mode, status, created_at,
               delivery_type, pickup_point, delivery_address, discount_percent
        FROM orders ORDER BY created_at DESC
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
            "order_number": row[0], "customer_name": row[1], "customer_telegram": row[2],
            "customer_phone": row[3], "customer_address": row[4], "comment": row[5],
            "items": items_parsed, "total": row[7], "mode": row[8] or "opt",
            "status": row[9], "created_at": row[10],
            "delivery_type": row[11] or "", "pickup_point": row[12] or "",
            "delivery_address": row[13] or "", "discount_percent": row[14] or 0,
        })
    return {"orders": orders}


@app.post("/api/orders/{order_number}/status")
def update_order_status(order_number: str, payload: OrderStatusUpdate):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute("UPDATE orders SET status = ? WHERE order_number = ?", (payload.status, order_number))
        if cursor.rowcount == 0:
            return {"success": False, "error": "Заказ не найден"}
        conn.commit()
        notify_customer_status(order_number, payload.status)
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
        if "message" in update:
            message = update["message"]
            chat_id = message["chat"]["id"]
            text = message.get("text", "")
            user = message.get("from", {})
            user_id = user.get("id")

            # /start
            if text.startswith("/start"):
                inviter_id = None
                parts = text.split()
                if len(parts) > 1 and parts[1].startswith("ref_"):
                    try:
                        inviter_id = int(parts[1].replace("ref_", ""))
                        if inviter_id == user_id:
                            inviter_id = None
                    except Exception:
                        inviter_id = None

                if user_id:
                    conn = sqlite3.connect(DB_PATH)
                    cursor = conn.cursor()
                    cursor.execute("SELECT id FROM referrals WHERE telegram_id = ?", (user_id,))
                    if not cursor.fetchone():
                        cursor.execute(
                            "INSERT INTO referrals (telegram_id, inviter_id, used_discount, created_at) VALUES (?, ?, 0, ?)",
                            (user_id, inviter_id, datetime.now().isoformat())
                        )
                        conn.commit()
                    conn.close()

                welcome_text = (
                    "Приветствую тебя в магазине <b>Vape Box</b> 💨\n\n"
                    "Здесь ты можешь оформить заказ.\n"
                    "После оформления напиши менеджеру — @manager_vape_box\n\n"
                    "Больше информации по кнопке ниже 👇"
                )

                webapp_url = "https://vape-box.onrender.com"

                keyboard = {
                    "keyboard": [
                        [{"text": "🛒 Открыть магазин", "web_app": {"url": webapp_url}}],
                        [{"text": "ℹ️ Информация"}, {"text": "⭐ Отзывы"}]
                    ],
                    "resize_keyboard": True
                }

                send_telegram_to_customer(chat_id, welcome_text, reply_markup=keyboard)
                return {"ok": True}

            # Информация
            if text == "ℹ️ Информация":
                info_text = (
                    "<b>ℹ️ О магазине Vape Box</b>\n\n"
                    "<b>Режимы заказа:</b>\n"
                    "🛒 <b>Розница</b> — заказ до 2500₽\n"
                    "📦 <b>Опт</b> — от 2500₽\n"
                    "📦 <b>Опт от 5000</b> — от 4500₽, быстрее по срокам\n"
                    "⏳ <b>Предзаказ</b> — без минимальной суммы, срок 4–5 дней\n\n"
                    "<b>Доставка и оплата:</b>\n"
                    "• Отправляем <b>СДЭКом</b>\n"
                    "• Работаем <b>только по предоплате</b>\n"
                    "• Самовывоз — по согласованным точкам\n"
                    "• Стоимость доставки уточняет менеджер\n\n"
                    "<b>Как заказать:</b>\n"
                    "1. Открой магазин кнопкой ниже\n"
                    "2. Выбери режим и товары\n"
                    "3. Оформи заказ\n"
                    "4. Напиши менеджеру — @manager_vape_box\n\n"
                    "По всем вопросам: @manager_vape_box"
                )
                send_telegram_to_customer(chat_id, info_text)
                return {"ok": True}

            # Отзывы
            if text == "⭐ Отзывы":
                reviews_text = (
                    "⭐ <b>Отзывы о Vape Box</b>\n\n"
                    "Читайте отзывы наших клиентов:\n"
                    "https://t.me/vape_box_otzv"
                )
                reviews_keyboard = {
                    "inline_keyboard": [[
                        {"text": "⭐ Открыть отзывы", "url": "https://t.me/vape_box_otzv"}
                    ]]
                }
                send_telegram_to_customer(chat_id, reviews_text, reply_markup=reviews_keyboard)
                return {"ok": True}

        # Callback (статусы заказов)
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
                        notify_customer_status(order_number, new_status)
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
            return {"success": True, "response": result}
    except Exception as e:
        return {"success": False, "error": str(e)}


# ===== CLOUDINARY =====

@app.post("/api/upload-image")
async def upload_image(file: UploadFile = File(...), category: str = ""):
    try:
        contents = await file.read()
        image_url = upload_image_to_cloudinary(contents, file.filename)
        if not image_url:
            return {"success": False, "error": "Не удалось загрузить картинку"}
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO images (category, image_url, created_at) VALUES (?, ?, ?)",
            (category, image_url, datetime.now().isoformat())
        )
        conn.commit()
        conn.close()
        return {"success": True, "image_url": image_url}
    except Exception as e:
        return {"success": False, "error": str(e)}


@app.get("/api/images")
def get_images():
    conn = sqlite3.connect(DB_PATH)
    conn.text_factory = str
    cursor = conn.cursor()
    cursor.execute("SELECT id, category, image_url FROM images ORDER BY id DESC")
    rows = cursor.fetchall()
    conn.close()
    images = [{"id": row[0], "category": row[1] or "", "image_url": row[2] or ""} for row in rows]
    return {"images": images}


@app.delete("/api/images/{image_id}")
def delete_image(image_id: int):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute("DELETE FROM images WHERE id = ?", (image_id,))
        if cursor.rowcount == 0:
            return {"success": False, "error": "Картинка не найдена"}
        conn.commit()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}
    finally:
        conn.close()
