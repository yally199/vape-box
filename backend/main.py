from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os
import json
from datetime import datetime

app = FastAPI()

# Разрешаем запросы с любых адресов (для разработки)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Путь к файлу с товарами (временно тестовые данные)
EXCEL_FILE = "prices.xlsx"

# Хранилище товаров (временно в памяти)
products = []
orders = []
order_counter = 1000

# ==========================================
# ТЕСТОВЫЕ ТОВАРЫ (пока нет Excel)
# ==========================================

def get_test_products():
    return [
        {"id": 1, "name": "Xros 3", "price": 1950, "category": "Устройства", "image": ""},
        {"id": 2, "name": "Angry Vape Salt Варан Комод 50мг", "price": 315, "category": "Жидкости", "image": ""},
        {"id": 3, "name": "PODONKI V1 Black Currant Lemonade", "price": 0, "category": "Жидкости", "image": ""},
        {"id": 4, "name": "D.L.T.A BURN GREEN (пластинки)", "price": 340, "category": "Никотиновые", "image": ""},
        {"id": 5, "name": "D.L.T.A Kiwi Strawberry", "price": 380, "category": "Жидкости", "image": ""},
        {"id": 6, "name": "D.L.T.A REDBULL (пластинки)", "price": 340, "category": "Никотиновые", "image": ""},
    ]

# Загружаем тестовые товары
products = get_test_products()

# ==========================================
# ЭНДПОИНТЫ API
# ==========================================

@app.get("/")
def read_root():
    return {"message": "VAPE BOX API работает!", "status": "ok"}

@app.get("/api/products")
def get_products():
    """Получить список всех товаров"""
    return {"products": products}

@app.get("/api/products/{product_id}")
def get_product(product_id: int):
    """Получить один товар по ID"""
    for product in products:
        if product["id"] == product_id:
            return product
    raise HTTPException(status_code=404, detail="Товар не найден")

@app.post("/api/orders")
def create_order(order_data: dict):
    """Создать новый заказ"""
    global order_counter
    
    # Генерируем номер заказа
    order_counter += 1
    order_number = f"VB-{order_counter}"
    
    # Сохраняем заказ
    order = {
        "order_number": order_number,
        "created_at": datetime.now().isoformat(),
        **order_data
    }
    orders.append(order)
    
    # В реальном проекте здесь будет отправка уведомления админу
    print(f"📦 Новый заказ! Номер: {order_number}")
    print(f"👤 Клиент: {order_data.get('customer_name')}")
    print(f"💰 Сумма: {order_data.get('total', 0)} ₽")
    
    return {
        "status": "success",
        "order_number": order_number,
        "message": "Заказ оформлен!"
    }

@app.post("/api/reload")
def reload_products():
    """Обновить товары из Excel (заглушка)"""
    global products
    products = get_test_products()
    return {"message": f"Товары обновлены. Всего: {len(products)}", "count": len(products)}

@app.get("/api/orders")
def get_orders():
    """Получить все заказы (для админа)"""
    return {"orders": orders}
