# VAPE BOX — Telegram Mini App магазин

## Что это
Готовый интернет-магазин для Telegram на FastAPI + чистом JS.

## Быстрый старт
1. `pip install -r backend/requirements.txt`
2. Задай переменные окружения:
   - TELEGRAM_BOT_TOKEN
   - TELEGRAM_ADMIN_ID
   - ADMIN_PASSWORD
   - CLOUDINARY_CLOUD_NAME
   - CLOUDINARY_API_KEY
   - CLOUDINARY_API_SECRET
3. Запусти: `uvicorn backend.main:app --reload`
4. Открой `frontend/index.html` через локальный сервер.

## Деплой
Рекомендуется Render (backend) + Cloudflare Pages / GitHub Pages (frontend).

## Поддержка
По вопросам запуска — @yally1
