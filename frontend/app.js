// ===== ПОДКЛЮЧЕНИЕ К TELEGRAM =====
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// ===== ПОДКЛЮЧЕНИЕ К БЕКЕНДУ =====
const API_URL = "https://vape-box.onrender.com";

// ===== РЕЖИМЫ (4) =====
const MODES = {
    retail:   { label: '🛒 Розница',      short: '🛒 РОЗНИЦА',  source: 'main',     min: 0,    color: 'linear-gradient(135deg,#f59e0b,#d97706)', desc: 'Заказ до 2500₽',   eta: '' },
    opt:      { label: '📦 Опт',          short: '📦 ОПТ',      source: 'main',     min: 2500, color: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', desc: 'Заказ от 2500₽',   eta: '' },
    opt5000:  { label: '📦 Опт от 5000',  short: '📦 ОПТ 5000', source: 'catalog2', min: 4500, color: 'linear-gradient(135deg,#0ea5e9,#0284c7)', desc: 'От 4500₽ • быстрее', eta: '⚡ Быстрая отправка' },
    preorder: { label: '⏳ Предзаказ',     short: '⏳ ПРЕДЗАКАЗ',source: 'catalog2', min: 0,    color: 'linear-gradient(135deg,#10b981,#059669)', desc: '4–5 дней • без минималки', eta: '⏳ Срок ожидания 4–5 дней' }
};

// ===== РЕЖИМ ЦЕН =====
let priceMode = localStorage.getItem('priceMode');
if (priceMode && !MODES[priceMode]) priceMode = null;

function getModeInfo() {
    return MODES[priceMode] || MODES.opt;
}
function getModeSource() {
    return getModeInfo().source;
}
function getModeMin() {
    return getModeInfo().min;
}

// Эмодзи для категорий
const CATEGORY_ICONS = {
    'Жидкости': '🍓', 'Одноразки': '⚡', 'Под-системы': '📱',
    'Расходники': '🧰', 'Шайбы': '🎮', 'Никотиновые ватки': '💊',
    'БЛОЧНО': '📦'
};

// Эмодзи для брендов
const BRAND_ICONS = {
    'Angry Vape': '🍓', 'ANGRY APE': '🍍', 'ANGRY APE ULTRA': '🍍',
    'ANNIMA': '🍇', 'BLOOD': '🩸', 'CATSWILL': '🐱', 'PODONKI': '🎯',
    'CHAPPMAN': '🧪', 'ChappmaN 2%': '🧪', 'ChappmaN 5%': '🧪',
    'CHILL OUT': '❄️', 'DOTA': '🎮', 'DUALL': '🥭', 'FAFF': '🍬',
    'GLITCH': '💻', 'HOTSPOT': '🔥', 'HUSKY': '🐕', 'ISTERIKA': '💢',
    'KOMA': '💀', 'LIT ENERGY': '⚡', 'MAD': '😈', 'MONSTER': '👾',
    'MONSTERVAPOR': '🧟', 'NARCOZ': '💊', 'NICE SHOT': '🎯', 'OGGO': '🐙',
    'PEREDOZ': '💉', 'PHANTOM': '👻', 'PIXEL': '👾', 'PROTEST': '✊',
    'RICK AND MORTY': '🧠', 'SKALA': '🏔️', 'TRAVA': '🌿', 'YUMMY': '🍭',
    'ZONG ULTRA': '⚡', 'АНАРХИЯ V2': '🏴', 'ГРЕХ': '😈',
    'ЗЛАЯ ЛАБУБУ': '🧙', 'ЗЛАЯ МОНАШКА': '💒', 'МОНАРХИЯ': '👑',
    'САМОУБИЙЦА': '💀', 'Злой Монах 75mg': '🧙'
};

// Точки самовывоза
const PICKUP_POINTS = [
    { id: 'preobrazhenskaya', name: 'М. Преображенская площадь', discount: 0 },
    { id: 'pervomayskaya', name: 'М. Первомайская', discount: 0 },
    { id: 'schelkovskaya', name: 'М. Щелковская', discount: 0 },
    { id: 'solovetskih', name: 'Остановка Площадь Соловецких Юнг', discount: 5 },
    { id: 'habarovskaya', name: 'Остановка Хабаровская улица', discount: 5 }
];

// ===== СОСТОЯНИЕ =====
let categories = [];
let categoryImages = {};
let promoProducts = [];
let promoMap = {};
let cart = [];
let currentView = 'catalog';
let currentCategoryId = 'all';
let currentBrandId = null;
let currentSeriesId = null;
let currentSearch = '';
let isSearchMode = false;
let hasReferralDiscount = false;
let deliveryType = 'pickup';
let selectedPickupPoint = null;

// ===== DOM ЭЛЕМЕНТЫ =====
const productsContainer = document.getElementById('productsContainer');
const emptyState = document.getElementById('emptyState');
const categoriesContainer = document.getElementById('categoriesContainer');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const pageTitle = document.getElementById('pageTitle');
const backBtn = document.getElementById('backBtn');

const orderModal = document.getElementById('orderModal');
const orderModalOverlay = document.getElementById('orderModalOverlay');
const orderModalClose = document.getElementById('orderModalClose');
const orderForm = document.getElementById('orderForm');
const orderItemsList = document.getElementById('orderItemsList');
const orderTotalPrice = document.getElementById('orderTotalPrice');
const successModal = document.getElementById('successModal');
const successModalOverlay = document.getElementById('successModalOverlay');
const successBtn = document.getElementById('successBtn');
const orderNumberEl = document.getElementById('orderNumber');

const checkStockModal = document.getElementById('checkStockModal');
const checkStockOverlay = document.getElementById('checkStockOverlay');
const checkStockClose = document.getElementById('checkStockClose');
const checkStockForm = document.getElementById('checkStockForm');
const checkStockProductInfo = document.getElementById('checkStockProductInfo');
let currentCheckStockProduct = null;

// ===== ПОЛУЧИТЬ ЦЕНУ ПО РЕЖИМУ + АКЦИЯ =====
function getPrice(item) {
    let base = priceMode === 'retail' ? (item.price_retail || item.price) : item.price;
    if (promoMap[item.id]) {
        const discount = promoMap[item.id];
        base = Math.round(base * (1 - discount / 100));
    }
    return base;
}

function getOriginalPrice(item) {
    return priceMode === 'retail' ? (item.price_retail || item.price) : item.price;
}

// ===== SLUGIFY =====
function slugify(text) {
    return String(text).toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-а-яё]+/gi, '')
        .replace(/\-\-+/g, '-')
        .substring(0, 50);
}

// ===== ПОСТРОЕНИЕ ДЕРЕВА =====
function buildCategoriesFromProducts(products) {
    const categoryMap = {};

    products.forEach(p => {
        const catName = (p.category || 'Разное').trim() || 'Разное';
        const brandName = (p.brand || 'Разное').trim() || 'Разное';
        const seriesName = (p.series || '').trim() || 'Основное';

        if (!categoryMap[catName]) {
            categoryMap[catName] = {
                id: slugify(catName),
                name: catName,
                icon: CATEGORY_ICONS[catName] || '📁',
                brands: {}
            };
        }
        const category = categoryMap[catName];

        if (!category.brands[brandName]) {
            category.brands[brandName] = {
                id: slugify(brandName),
                name: brandName,
                icon: BRAND_ICONS[brandName] || '📦',
                series: {}
            };
        }
        const brand = category.brands[brandName];

        if (!brand.series[seriesName]) {
            brand.series[seriesName] = {
                id: slugify(seriesName),
                name: seriesName,
                flavors: []
            };
        }
        const series = brand.series[seriesName];

        series.flavors.push({
            id: p.id,
            name: p.name,
            price: p.price,
            price_retail: p.price_retail || 0,
            stock: p.stock,
            description: p.description || '',
            article: p.article || '',
            brandName: brandName,
            seriesName: seriesName,
            source: p.source || 'main'
        });
    });

    const result = [];
    Object.values(categoryMap).forEach(cat => {
        const brandsArr = [];
        Object.values(cat.brands).forEach(brand => {
            const seriesArr = [];
            Object.values(brand.series).forEach(series => {
                seriesArr.push(series);
            });
            brand.series = seriesArr;
            brandsArr.push(brand);
        });
        cat.brands = brandsArr;
        result.push(cat);
    });

    return result;
}

// ===== ЗАГРУЗКА =====
async function loadAllProducts() {
    try {
        const source = getModeSource();
        const response = await fetch(`${API_URL}/api/products?limit=10000&offset=0&source=${source}`);
        if (!response.ok) throw new Error('Ошибка загрузки');
        const data = await response.json();
        return data.products || [];
    } catch (error) {
        console.warn('Бекенд недоступен:', error);
        return [];
    }
}

async function loadCategoryImages() {
    try {
        const response = await fetch(`${API_URL}/api/images`);
        if (!response.ok) return;
        const data = await response.json();
        const images = data.images || [];
        categoryImages = {};
        images.forEach(img => {
            if (img.category && img.image_url) {
                categoryImages[img.category] = img.image_url;
            }
        });
    } catch (error) {
        console.warn('Не удалось загрузить картинки:', error);
    }
}

async function loadPromos() {
    try {
        const response = await fetch(`${API_URL}/api/promos`);
        if (!response.ok) return;
        const data = await response.json();
        promoProducts = data.promos || [];
        promoMap = {};
        promoProducts.forEach(p => {
            promoMap[p.id] = p.discount_percent || 10;
        });
        console.log('🔥 Акций загружено:', promoProducts.length);
    } catch (error) {
        console.warn('Не удалось загрузить акции:', error);
    }
}

async function checkReferralDiscount() {
    const userId = tg?.initDataUnsafe?.user?.id;
    if (!userId) return;
    try {
        const response = await fetch(`${API_URL}/api/referral/${userId}`);
        const data = await response.json();
        hasReferralDiscount = data.has_discount === true;
        if (hasReferralDiscount) {
            console.log('🎁 Есть реферальная скидка -5%');
        }
    } catch (e) {
        console.warn('Ошибка проверки реферала:', e);
    }
}

// ===== ВСПОМОГАТЕЛЬНЫЕ =====
function getCategory(id) { return categories.find(c => c.id === id); }

function getBrand(categoryId, brandId) {
    const cat = getCategory(categoryId);
    if (!cat || !cat.brands) return null;
    return cat.brands.find(b => b.id === brandId);
}

function getSeries(categoryId, brandId, seriesId) {
    const brand = getBrand(categoryId, brandId);
    if (!brand || !brand.series) return null;
    return brand.series.find(s => s.id === seriesId);
}

function findProduct(productId) {
    const promo = promoProducts.find(p => p.id === productId);
    if (promo) {
        return {
            id: promo.id,
            name: promo.name,
            price: promo.price,
            price_retail: promo.price_retail || 0,
            stock: promo.stock,
            brandName: promo.brand || '',
            seriesName: promo.series || '',
            article: promo.article || '',
            source: promo.source || 'main'
        };
    }

    for (const cat of categories) {
        if (cat.brands) {
            for (const b of cat.brands) {
                if (b.series) {
                    for (const s of b.series) {
                        const found = s.flavors.find(f => f.id === productId);
                        if (found) return found;
                    }
                }
            }
        }
    }
    return null;
}

// ===== ЭКРАН ВЫБОРА РЕЖИМА (4 кнопки) =====
function showModeSelection() {
    const container = productsContainer;
    if (!container) return;

    if (categoriesContainer) categoriesContainer.style.display = 'none';
    if (searchInput) searchInput.style.display = 'none';
    if (pageTitle) pageTitle.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';

    const modeBtn = document.getElementById('modeSwitchBtn');
    if (modeBtn) modeBtn.style.display = 'none';

    const btnStyle = (mode) => `
        display:block;width:100%;max-width:340px;margin:0 auto 12px;
        padding:20px;background:${MODES[mode].color};
        color:#fff;border:none;border-radius:16px;
        font-size:17px;font-weight:700;cursor:pointer;text-align:left;
        box-shadow:0 6px 20px rgba(0,0,0,0.25);
    `;

    container.style.display = 'block';
    container.innerHTML = `
        <div style="text-align:center;padding:30px 20px;">
            <div style="font-size:56px;margin-bottom:16px;">⚡</div>
            <div style="font-size:26px;font-weight:700;margin-bottom:8px;">VAPE BOX</div>
            <div style="font-size:15px;color:#8080a0;margin-bottom:30px;">Выберите режим покупки</div>

            <button id="modeRetail" style="${btnStyle('retail')}">
                <div style="font-size:19px;margin-bottom:4px;">${MODES.retail.label}</div>
                <div style="font-size:13px;opacity:0.85;font-weight:400;">${MODES.retail.desc}</div>
            </button>

            <button id="modeOpt" style="${btnStyle('opt')}">
                <div style="font-size:19px;margin-bottom:4px;">${MODES.opt.label}</div>
                <div style="font-size:13px;opacity:0.85;font-weight:400;">${MODES.opt.desc}</div>
            </button>

            <button id="modeOpt5000" style="${btnStyle('opt5000')}">
                <div style="font-size:19px;margin-bottom:4px;">${MODES.opt5000.label}</div>
                <div style="font-size:13px;opacity:0.85;font-weight:400;">${MODES.opt5000.desc}</div>
            </button>

            <button id="modePreorder" style="${btnStyle('preorder')}">
                <div style="font-size:19px;margin-bottom:4px;">${MODES.preorder.label}</div>
                <div style="font-size:13px;opacity:0.85;font-weight:400;">${MODES.preorder.desc}</div>
            </button>
        </div>
    `;

    document.getElementById('modeRetail').addEventListener('click', () => setMode('retail'));
    document.getElementById('modeOpt').addEventListener('click', () => setMode('opt'));
    document.getElementById('modeOpt5000').addEventListener('click', () => setMode('opt5000'));
    document.getElementById('modePreorder').addEventListener('click', () => setMode('preorder'));
}

async function setMode(mode) {
    const oldSource = priceMode ? getModeSource() : null;
    const oldMode = priceMode;
    priceMode = mode;
    localStorage.setItem('priceMode', mode);

    const newSource = getModeSource();

    if (oldSource && oldSource !== newSource && cart.length > 0) {
        const ok = confirm('Смена каталога очистит корзину. Продолжить?');
        if (!ok) {
            priceMode = oldMode;
            if (oldMode) localStorage.setItem('priceMode', oldMode);
            else localStorage.removeItem('priceMode');
            return;
        }
        cart = [];
        updateCartUI();
    }

    if (oldSource !== newSource) {
        const products = await loadAllProducts();
        categories = buildCategoriesFromProducts(products);
    }

    if (categoriesContainer) categoriesContainer.style.display = 'flex';
    if (searchInput) searchInput.style.display = 'block';
    if (pageTitle) pageTitle.style.display = 'block';

    createModeButton();
    const modeBtn = document.getElementById('modeSwitchBtn');
    if (modeBtn) modeBtn.style.display = 'block';

    updateModeButton();
    renderCategoryTabs();
    showPromos();
    updateCartUI();
    showToast(`${getModeInfo().label} — выбран`, 'success');
}

function updateModeButton() {
    const btn = document.getElementById('modeSwitchBtn');
    if (btn) {
        btn.textContent = getModeInfo().short;
        btn.style.background = getModeInfo().color;
    }
}

function createModeButton() {
    let btn = document.getElementById('modeSwitchBtn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'modeSwitchBtn';
        btn.style.cssText = `
            position:fixed;top:20px;right:70px;z-index:100;
            padding:8px 12px;color:#fff;border:none;border-radius:10px;
            font-size:12px;font-weight:700;cursor:pointer;
            box-shadow:0 4px 12px rgba(0,0,0,0.3);
        `;
        btn.addEventListener('click', () => {
            showModeSelection();
        });
        document.body.appendChild(btn);
    }
    updateModeButton();
}

// ===== АКЦИИ =====
function showPromos() {
    currentView = 'promos';
    currentCategoryId = 'promos';
    currentBrandId = null;
    currentSeriesId = null;
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'none';
    if (pageTitle) pageTitle.textContent = '🔥 Акции';

    document.querySelectorAll('.category').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'promos');
    });

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    productsContainer.style.display = 'block';
    productsContainer.style.gridTemplateColumns = 'none';

    const source = getModeSource();
    const visiblePromos = promoProducts.filter(p => (p.source || 'main') === source);

    if (visiblePromos.length === 0) {
        productsContainer.innerHTML = `
            <div style="text-align:center;padding:40px 20px;color:#8080a0;">
                <div style="font-size:48px;margin-bottom:12px;">🔥</div>
                <div>Сейчас нет активных акций</div>
                <button onclick="renderCatalog()" style="margin-top:20px;padding:12px 24px;background:#8b5cf6;color:#fff;border:none;border-radius:12px;font-weight:600;cursor:pointer;">
                    Перейти в каталог
                </button>
            </div>
        `;
        return;
    }

    const header = document.createElement('div');
    header.style.cssText = 'padding:16px 4px 20px;text-align:center;';
    header.innerHTML = `
        <div style="font-size:28px;margin-bottom:6px;">🔥</div>
        <div style="font-size:20px;font-weight:700;margin-bottom:4px;">Товары по акции</div>
        <div style="font-size:14px;color:#8080a0;">Скидка 10% на выбранные позиции</div>
    `;
    productsContainer.appendChild(header);

    visiblePromos.forEach((p, index) => {
        const flavor = {
            id: p.id,
            name: p.name,
            price: p.price,
            price_retail: p.price_retail || 0,
            stock: p.stock,
            brandName: p.brand || '',
            seriesName: p.series || '',
            article: p.article || ''
        };
        productsContainer.appendChild(buildFlavorItem(flavor, index, null, null, true));
    });
}

// ===== ОТРИСОВКА КАТАЛОГА =====
function renderCatalog() {
    currentView = 'catalog';
    currentCategoryId = 'all';
    currentBrandId = null;
    currentSeriesId = null;
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'none';
    if (pageTitle) pageTitle.textContent = 'Магазин вейп-товаров';

    document.querySelectorAll('.category').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
    });

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    productsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

    categories.forEach((cat, index) => {
        const card = document.createElement('div');
        card.className = 'product-card brand-card';
        card.style.animationDelay = `${index * 0.05}s`;

        let count = 0;
        if (cat.brands) {
            cat.brands.forEach(b => {
                if (b.series) b.series.forEach(s => { count += s.flavors.length; });
            });
        }

        const imageUrl = categoryImages[cat.name];
        const imageHtml = imageUrl
            ? `<img src="${imageUrl}" alt="${cat.name}" style="width:100%;height:100%;object-fit:contain;border-radius:12px;">`
            : `<div style="font-size:48px;">${cat.icon || '📁'}</div>`;

        card.innerHTML = `
            <div class="product-image" style="display:flex;align-items:center;justify-content:center;overflow:hidden;">
                ${imageHtml}
            </div>
            <div class="product-info">
                <div class="product-name">${cat.name}</div>
                <div class="product-description">${count} товаров</div>
                <div class="product-bottom" style="justify-content: flex-end;">
                    <span style="color: var(--text-secondary); font-size: 14px;">→ Открыть</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => showBrands(cat.id));
        productsContainer.appendChild(card);
    });
}

function showBrands(categoryId) {
    currentView = 'brands';
    currentCategoryId = categoryId;
    currentBrandId = null;
    currentSeriesId = null;
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'flex';

    const cat = getCategory(categoryId);
    if (!cat) return;
    if (pageTitle) pageTitle.textContent = cat.name;

    document.querySelectorAll('.category').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === categoryId);
    });

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';

    if (!cat.brands || cat.brands.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        productsContainer.style.display = 'none';
        return;
    }

    productsContainer.style.display = 'grid';
    productsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

    cat.brands.forEach((brand, index) => {
        const card = document.createElement('div');
        card.className = 'product-card brand-card';
        card.style.animationDelay = `${index * 0.05}s`;

        let count = 0;
        if (brand.series) brand.series.forEach(s => { count += s.flavors.length; });

        card.innerHTML = `
            <div class="product-image" style="font-size: 48px;">${brand.icon || '📦'}</div>
            <div class="product-info">
                <div class="product-name">${brand.name}</div>
                <div class="product-description">${count} вкусов</div>
                <div class="product-bottom" style="justify-content: flex-end;">
                    <span style="color: var(--text-secondary); font-size: 14px;">→ Выбрать</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            if (brand.series && brand.series.length > 0) {
                if (brand.series.length === 1) {
                    showFlavors(categoryId, brand.id, brand.series[0].id);
                } else {
                    showSeries(categoryId, brand.id);
                }
            } else {
                showToast('У этого бренда пока нет товаров', 'error');
            }
        });

        productsContainer.appendChild(card);
    });
}

function showSeries(categoryId, brandId) {
    currentView = 'series';
    currentCategoryId = categoryId;
    currentBrandId = brandId;
    currentSeriesId = null;
    if (backBtn) backBtn.style.display = 'flex';

    const brand = getBrand(categoryId, brandId);
    if (!brand) return;
    if (pageTitle) pageTitle.textContent = brand.name;

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    productsContainer.style.display = 'grid';
    productsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

    brand.series.forEach((series, index) => {
        const card = document.createElement('div');
        card.className = 'product-card brand-card';
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="product-image" style="font-size: 36px;">📦</div>
            <div class="product-info">
                <div class="product-name">${series.name}</div>
                <div class="product-description">${series.flavors.length} вкусов</div>
                <div class="product-bottom" style="justify-content: flex-end;">
                    <span style="color: var(--text-secondary); font-size: 14px;">→ Выбрать</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => showFlavors(categoryId, brandId, series.id));
        productsContainer.appendChild(card);
    });
}

function showFlavors(categoryId, brandId, seriesId) {
    currentView = 'flavors';
    currentCategoryId = categoryId;
    currentBrandId = brandId;
    currentSeriesId = seriesId;
    if (backBtn) backBtn.style.display = 'flex';

    const series = getSeries(categoryId, brandId, seriesId);
    if (!series) return;
    if (pageTitle) pageTitle.textContent = series.name;

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    productsContainer.style.display = 'block';
    productsContainer.style.gridTemplateColumns = 'none';

    series.flavors.forEach((flavor, index) => {
        productsContainer.appendChild(buildFlavorItem(flavor, index, categoryId, brandId));
    });
}
function buildFlavorItem(flavor, index, categoryId, brandId, isPromo = false) {
    const item = document.createElement('div');
    item.className = 'flavor-item';
    item.style.animationDelay = `${index * 0.02}s`;

    if (isPromo || promoMap[flavor.id]) {
        item.style.border = '1px solid rgba(16, 185, 129, 0.4)';
        item.style.background = 'rgba(16, 185, 129, 0.05)';
    }

    const isInCart = cart.some(c => c.id === flavor.id);
    const hasStock = flavor.stock > 0;
    const cartItem = cart.find(c => c.id === flavor.id);
    const currentQty = cartItem ? cartItem.quantity : 0;
    const displayPrice = getPrice(flavor);
    const originalPrice = getOriginalPrice(flavor);
    const hasDiscount = promoMap[flavor.id];

    const stockText = hasStock
        ? `<span class="flavor-stock in-stock">✅ В наличии</span>`
        : `<span class="flavor-stock out-stock">🚫 Нет в наличии</span>`;

    let quantityControls = '';
    if (hasStock && isInCart) {
        quantityControls = `
            <div class="qty-controls">
                <button class="qty-btn qty-minus" data-id="${flavor.id}">−</button>
                <span class="qty-number">${currentQty}</span>
                <button class="qty-btn qty-plus" data-id="${flavor.id}">+</button>
            </div>
        `;
    }

    let addButton;
    if (!hasStock) {
        addButton = `<button class="add-btn disabled" disabled>Нет</button>`;
    } else if (isInCart) {
        addButton = `
            <div class="btn-group">
                ${quantityControls}
                <button class="add-btn remove-from-cart" data-id="${flavor.id}" title="Удалить">✕</button>
            </div>
        `;
    } else {
        addButton = `<button class="add-btn add-to-cart" data-id="${flavor.id}">+ Добавить</button>`;
    }

    const brandIcon = brandId ? (getBrand(categoryId, brandId)?.icon || '📦') : '📦';

    const priceHtml = hasDiscount
        ? `<span class="flavor-price" style="color:#34d399;">${displayPrice} ₽</span>
           <span style="text-decoration:line-through;color:#8080a0;font-size:13px;margin-left:6px;">${originalPrice} ₽</span>
           <span style="background:rgba(16,185,129,0.2);color:#34d399;font-size:11px;padding:2px 6px;border-radius:4px;margin-left:6px;">-10%</span>`
        : `<span class="flavor-price">${displayPrice} ₽</span>`;

    const articleHtml = flavor.article
        ? `<span style="color:#6b7280;font-size:11px;margin-left:6px;">#${flavor.article}</span>`
        : '';

    item.innerHTML = `
        <div class="flavor-icon">${brandIcon}</div>
        <div class="flavor-info">
            <div class="flavor-name">${flavor.name}${articleHtml}</div>
            <div class="flavor-meta">
                ${priceHtml}
                ${stockText}
            </div>
        </div>
        <div class="flavor-actions">
            ${addButton}
            <button class="check-stock-btn" data-id="${flavor.id}">❓</button>
        </div>
    `;

    bindFlavorEvents(item, flavor);
    return item;
}

function bindFlavorEvents(item, flavor) {
    const addBtn = item.querySelector('.add-to-cart');
    if (addBtn) addBtn.addEventListener('click', e => { e.stopPropagation(); addToCart(flavor.id, 1); });

    const removeBtn = item.querySelector('.remove-from-cart');
    if (removeBtn) removeBtn.addEventListener('click', e => { e.stopPropagation(); removeFromCart(flavor.id); });

    const plusBtn = item.querySelector('.qty-plus');
    if (plusBtn) plusBtn.addEventListener('click', e => { e.stopPropagation(); addToCart(flavor.id, 1); });

    const minusBtn = item.querySelector('.qty-minus');
    if (minusBtn) minusBtn.addEventListener('click', e => { e.stopPropagation(); addToCart(flavor.id, -1); });

    const checkBtn = item.querySelector('.check-stock-btn');
    if (checkBtn) checkBtn.addEventListener('click', e => { e.stopPropagation(); openCheckStock(flavor.id); });
}

// ===== ПОИСК + ФИЛЬТРЫ =====
let searchTimeout = null;

async function renderSearchResults(filterType = null) {
    currentView = 'search';
    isSearchMode = true;
    if (backBtn) backBtn.style.display = 'flex';

    let query = currentSearch.trim();
    if (filterType === 'first') query = 'под';
    if (filterType === 'power') query = 'мощн';

    if (pageTitle) pageTitle.textContent = filterType === 'first' ? 'Первое устройство' :
                                          filterType === 'power' ? 'Мощные устройства' :
                                          'Поиск: ' + currentSearch;

    if (!filterType && query.length < 2) {
        if (productsContainer) {
            productsContainer.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#8080a0;">Введите минимум 2 символа</div>';
        }
        return;
    }

    if (!productsContainer) return;
    productsContainer.innerHTML = '<div style="text-align:center;padding:40px;color:#8080a0;">🔍 Ищем...</div>';
    productsContainer.style.display = 'block';
    productsContainer.style.gridTemplateColumns = 'none';

    try {
        const response = await fetch(`${API_URL}/api/search?q=${encodeURIComponent(query)}&limit=100&mode=${priceMode || ''}`);
        const data = await response.json();
        let results = data.products || [];

        if (filterType === 'first') {
            results = results.filter(p =>
                /под|pod|aio|starter|набор|комплект/i.test(p.name + ' ' + (p.brand || ''))
            );
        }
        if (filterType === 'power') {
            results = results.filter(p =>
                /мощн|watts|w\b|box|mod|батаре/i.test(p.name + ' ' + (p.brand || ''))
            );
        }

        productsContainer.innerHTML = '';

        if (results.length === 0) {
            productsContainer.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#8080a0;">😕 Ничего не найдено</div>';
            return;
        }

        const info = document.createElement('div');
        info.style.cssText = 'padding:10px 4px 16px;font-size:14px;color:#8080a0;';
        info.textContent = `Найдено: ${results.length}`;
        productsContainer.appendChild(info);

        results.forEach((p, index) => {
            const flavor = {
                id: p.id,
                name: p.name,
                price: p.price,
                price_retail: p.price_retail || 0,
                stock: p.stock,
                brandName: p.brand || '',
                article: p.article || ''
            };
            productsContainer.appendChild(buildFlavorItem(flavor, index, null, null));
        });

    } catch (err) {
        console.error('Ошибка поиска:', err);
        productsContainer.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#ef4444;">❌ Ошибка поиска.</div>';
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== КОРЗИНА =====
function addToCart(productId, delta = 1) {
    const product = findProduct(productId);
    if (!product) return;

    if (delta > 0 && product.stock < delta) {
        showToast(`❌ Осталось только ${product.stock} шт`, 'error');
        return;
    }

    const index = cart.findIndex(item => item.id === productId);
    const finalPrice = getPrice(product);

    if (index === -1) {
        if (delta <= 0) return;
        if (product.stock <= 0) {
            showToast('❌ Товар закончился', 'error');
            return;
        }
        cart.push({ ...product, price: finalPrice, quantity: delta });
        product.stock -= delta;
        showToast(`✅ Добавлено ${delta} шт`, 'success');
    } else {
        const newQty = cart[index].quantity + delta;
        if (newQty <= 0) {
            product.stock += cart[index].quantity;
            cart.splice(index, 1);
            showToast('🗑️ Товар удалён', 'error');
        } else {
            if (delta > 0 && product.stock < delta) {
                showToast(`❌ Осталось только ${product.stock} шт`, 'error');
                return;
            }
            cart[index].quantity = newQty;
            cart[index].price = finalPrice;
            product.stock -= delta;
            showToast(delta > 0 ? `✅ +${delta} шт` : `➖ ${Math.abs(delta)} шт`, delta > 0 ? 'success' : 'error');
        }
    }

    updateCartUI();
    refreshCurrentView();
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index === -1) return;
    const product = findProduct(productId);
    if (product) product.stock += cart[index].quantity;
    cart.splice(index, 1);
    updateCartUI();
    refreshCurrentView();
    showToast('🗑️ Товар удалён', 'error');
}

function changeQuantity(productId, delta) {
    const item = cart.find(c => c.id === productId);
    const product = findProduct(productId);
    if (!item || !product) return;
    if (delta > 0 && product.stock <= 0) {
        showToast('❌ Недостаточно товара', 'error');
        return;
    }
    item.quantity += delta;
    if (delta > 0) product.stock -= 1;
    else product.stock += 1;
    if (item.quantity <= 0) {
        cart.splice(cart.findIndex(c => c.id === productId), 1);
    }
    updateCartUI();
    renderCart();
    refreshCurrentView();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
}

function refreshCurrentView() {
    if (isSearchMode) {
        renderSearchResults();
    } else if (currentView === 'promos') {
        showPromos();
    } else if (currentView === 'catalog') {
        renderCatalog();
    } else if (currentView === 'brands') {
        showBrands(currentCategoryId);
    } else if (currentView === 'series' && currentBrandId) {
        showSeries(currentCategoryId, currentBrandId);
    } else if (currentView === 'flavors' && currentBrandId && currentSeriesId) {
        showFlavors(currentCategoryId, currentBrandId, currentSeriesId);
    }
}

// ===== КАТЕГОРИИ-ТАБЫ =====
function renderCategoryTabs() {
    if (!categoriesContainer) return;
    categoriesContainer.innerHTML = `
        <button class="category" data-category="promos">🔥 Акции</button>
        <button class="category active" data-category="all">📂 Все товары</button>
    `;
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category';
        btn.dataset.category = cat.id;
        btn.textContent = `${cat.icon || '📁'} ${cat.name}`;
        categoriesContainer.appendChild(btn);
    });
}

if (categoriesContainer) {
    categoriesContainer.addEventListener('click', function(e) {
        const btn = e.target.closest('.category');
        if (!btn) return;
        const categoryId = btn.dataset.category;
        document.querySelectorAll('.category').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (categoryId === 'promos') {
            showPromos();
        } else if (categoryId === 'all') {
            if (searchInput) {
                searchInput.value = '';
                currentSearch = '';
                if (searchClear) searchClear.style.display = 'none';
            }
            renderCatalog();
        } else {
            showBrands(categoryId);
        }
    });
}

// ===== НАВИГАЦИЯ =====
if (backBtn) {
    backBtn.addEventListener('click', function() {
        if (isSearchMode) {
            if (searchInput) { searchInput.value = ''; currentSearch = ''; }
            if (searchClear) searchClear.style.display = 'none';
            isSearchMode = false;
            renderCatalog();
        } else if (currentView === 'flavors') {
            const brand = getBrand(currentCategoryId, currentBrandId);
            if (brand && brand.series && brand.series.length > 1) {
                showSeries(currentCategoryId, currentBrandId);
            } else {
                showBrands(currentCategoryId);
            }
        } else if (currentView === 'series') {
            showBrands(currentCategoryId);
        } else if (currentView === 'brands') {
            renderCatalog();
        }
    });
}

// ===== ПОИСК =====
if (searchInput) {
    searchInput.addEventListener('input', function() {
        currentSearch = this.value;
        if (searchClear) searchClear.style.display = currentSearch ? 'block' : 'none';

        if (searchTimeout) clearTimeout(searchTimeout);

        if (!currentSearch.trim()) {
            isSearchMode = false;
            if (currentView === 'search') renderCatalog();
            else refreshCurrentView();
            return;
        }

        searchTimeout = setTimeout(() => renderSearchResults(), 400);
    });
}

if (searchClear) {
    searchClear.addEventListener('click', function() {
        if (searchInput) {
            searchInput.value = '';
            currentSearch = '';
            this.style.display = 'none';
            isSearchMode = false;
            renderCatalog();
        }
    });
}

// ===== КОРЗИНА — ОТРИСОВКА =====
function renderCart() {
    if (!cartItems || !cartEmpty || !cartFooter) return;
    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
        return;
    }
    cartItems.style.display = 'block';
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        div.innerHTML = `
            <div class="cart-item-image">📦</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${itemTotal} ₽</div>
            </div>
            <div class="cart-item-actions">
                <button class="decrease-btn" data-id="${item.id}">−</button>
                <span class="quantity">${item.quantity}</span>
                <button class="increase-btn" data-id="${item.id}">+</button>
                <button class="remove-btn" data-id="${item.id}">✕</button>
            </div>
        `;
        cartItems.appendChild(div);

        div.querySelector('.increase-btn').addEventListener('click', e => { e.stopPropagation(); changeQuantity(item.id, 1); });
        div.querySelector('.decrease-btn').addEventListener('click', e => { e.stopPropagation(); changeQuantity(item.id, -1); });
        div.querySelector('.remove-btn').addEventListener('click', e => {
            e.stopPropagation();
            const idx = cart.findIndex(c => c.id === item.id);
            if (idx !== -1) {
                const product = findProduct(item.id);
                if (product) product.stock += item.quantity;
                cart.splice(idx, 1);
                updateCartUI();
                renderCart();
                refreshCurrentView();
            }
        });
    });

    if (cartTotalPrice) cartTotalPrice.textContent = total + ' ₽';
}

// ===== МОДАЛКИ =====
function openCart() { renderCart(); if (cartModal) cartModal.classList.add('active'); }
function closeCart() { if (cartModal) cartModal.classList.remove('active'); }
function closeOrderModal() { if (orderModal) orderModal.classList.remove('active'); if (cartModal) cartModal.classList.add('active'); }
function closeSuccessModal() { if (successModal) successModal.classList.remove('active'); }

function openOrderModal() {
    if (cart.length === 0) { showToast('⚠️ Корзина пуста', 'error'); return; }

    const minSum = getModeMin();
    if (minSum > 0) {
        const currentTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
        if (currentTotal < minSum) {
            showToast(`⚠️ Минимум для «${getModeInfo().label}»: ${minSum}₽. Сейчас: ${currentTotal}₽`, 'error');
            return;
        }
    }

    if (orderItemsList) orderItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'order-item';
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        div.textContent = `${item.name} × ${item.quantity} = ${itemTotal} ₽`;
        if (orderItemsList) orderItemsList.appendChild(div);
    });

    ensureDeliveryFields();
    updateOrderTotal();

    if (cartModal) cartModal.classList.remove('active');
    if (orderModal) orderModal.classList.add('active');
}

function ensureDeliveryFields() {
    const existing = document.getElementById('deliveryBlock');
    if (existing) existing.remove();

    const form = orderForm;
    if (!form) return;

    const modeInfo = getModeInfo();
    const block = document.createElement('div');
    block.id = 'deliveryBlock';
    block.style.cssText = 'margin:16px 0;padding:16px;background:rgba(139,92,246,0.08);border-radius:12px;';

    const etaHtml = modeInfo.eta
        ? `<div style="margin-bottom:12px;padding:8px 12px;background:rgba(16,185,129,0.15);color:#34d399;border-radius:8px;font-size:13px;font-weight:600;">${modeInfo.eta}</div>`
        : '';

    const minHtml = modeInfo.min > 0
        ? `<div style="margin-bottom:12px;font-size:12px;color:#8080a0;">Минимальная сумма для «${modeInfo.label}»: ${modeInfo.min}₽</div>`
        : '';

    block.innerHTML = `
        <div style="font-weight:600;margin-bottom:12px;">Режим: ${modeInfo.label}</div>
        ${etaHtml}
        ${minHtml}
        <div style="font-weight:600;margin-bottom:12px;">Способ получения</div>

        <label style="display:flex;align-items:center;gap:8px;margin-bottom:10px;cursor:pointer;">
            <input type="radio" name="deliveryType" value="pickup" checked onchange="onDeliveryTypeChange()">
            <span>🏪 Самовывоз</span>
        </label>

        <label style="display:flex;align-items:center;gap:8px;margin-bottom:14px;cursor:pointer;">
            <input type="radio" name="deliveryType" value="delivery" onchange="onDeliveryTypeChange()">
            <span>🚚 Доставка</span>
        </label>

        <div id="pickupPointsBlock">
            <div style="font-size:13px;color:#8080a0;margin-bottom:8px;">Выберите точку:</div>
            ${PICKUP_POINTS.map(p => `
                <label style="display:flex;align-items:center;gap:8px;margin-bottom:8px;cursor:pointer;font-size:14px;">
                    <input type="radio" name="pickupPoint" value="${p.id}" onchange="onPickupPointChange()">
                    <span>${p.name}${p.discount > 0 ? ` <span style="color:#34d399;font-weight:600;">(-${p.discount}%)</span>` : ''}</span>
                </label>
            `).join('')}
        </div>

        <div id="deliveryAddressBlock" style="display:none;">
            <label style="display:block;font-size:13px;color:#8080a0;margin-bottom:6px;">Метро / Адрес</label>
            <input type="text" id="deliveryAddressInput" placeholder="Например: м. Сокольники"
                   style="width:100%;padding:12px;background:#0f0f14;border:1px solid #2a2a38;border-radius:10px;color:#e8e8ee;font-size:15px;">
            <div style="font-size:12px;color:#8080a0;margin-top:8px;">
                Стоимость доставки уточнит менеджер после подтверждения заказа
            </div>
        </div>

        <div id="discountInfo" style="margin-top:12px;font-size:13px;color:#34d399;display:none;"></div>
    `;

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        form.insertBefore(block, submitBtn);
    } else {
        form.appendChild(block);
    }

    deliveryType = 'pickup';
    selectedPickupPoint = null;
}

function onDeliveryTypeChange() {
    const type = document.querySelector('input[name="deliveryType"]:checked')?.value || 'pickup';
    deliveryType = type;

    document.getElementById('pickupPointsBlock').style.display = type === 'pickup' ? 'block' : 'none';
    document.getElementById('deliveryAddressBlock').style.display = type === 'delivery' ? 'block' : 'none';

    updateOrderTotal();
}

function onPickupPointChange() {
    const pointId = document.querySelector('input[name="pickupPoint"]:checked')?.value;
    selectedPickupPoint = PICKUP_POINTS.find(p => p.id === pointId) || null;
    updateOrderTotal();
}

function updateOrderTotal() {
    let promoTotal = 0;
    let regularTotal = 0;

    cart.forEach(item => {
        const itemSum = item.price * item.quantity;
        if (promoMap[item.id]) {
            promoTotal += itemSum;
        } else {
            regularTotal += itemSum;
        }
    });

    let discountPercent = 0;

    if (deliveryType === 'pickup' && selectedPickupPoint && selectedPickupPoint.discount > 0) {
        discountPercent = selectedPickupPoint.discount;
    }

    let referralDiscountAmount = 0;
    if (hasReferralDiscount && discountPercent === 0 && regularTotal > 0) {
        referralDiscountAmount = Math.round(regularTotal * 0.05);
    }

    let total = promoTotal + regularTotal;

    if (discountPercent > 0) {
        total = Math.round(total * (1 - discountPercent / 100));
    } else {
        total = total - referralDiscountAmount;
    }

    if (orderTotalPrice) {
        orderTotalPrice.textContent = total + ' ₽';
    }

    const info = document.getElementById('discountInfo');
    if (info) {
        const minSum = getModeMin();
        const minWarn = (minSum > 0 && total < minSum)
            ? `<div style="color:#ef4444;margin-top:6px;">⚠️ Минимум для режима: ${minSum}₽ (сейчас ${total}₽)</div>`
            : '';
        if (discountPercent > 0) {
            info.style.display = 'block';
            info.innerHTML = `💥 Применена скидка -${discountPercent}% (за точку самовывоза)${minWarn}`;
        } else if (referralDiscountAmount > 0) {
            info.style.display = 'block';
            info.innerHTML = `🎁 Скидка -5% за первый заказ (не действует на товары из акций)${minWarn}`;
        } else if (minWarn) {
            info.style.display = 'block';
            info.innerHTML = minWarn;
        } else {
            info.style.display = 'none';
        }
    }
}

function generateOrderNumber() {
    return String(Math.floor(1000 + Math.random() * 9000));
}

async function submitOrder(e) {
    e.preventDefault();

    if (window.__orderSubmitting) return;
    window.__orderSubmitting = true;

    const name = document.getElementById('customerName')?.value.trim();
    const telegram = document.getElementById('customerTelegram')?.value.trim();
    const phone = document.getElementById('customerPhone')?.value.trim();
    const comment = document.getElementById('orderComment')?.value.trim() || '';

    if (!name) { showToast('⚠️ Введите имя', 'error'); window.__orderSubmitting = false; return; }
    if (!telegram && !phone) { showToast('⚠️ Укажите Telegram или телефон', 'error'); window.__orderSubmitting = false; return; }

    let pickupPointName = '';
    let deliveryAddress = '';
    let discountPercent = 0;

    if (deliveryType === 'pickup') {
        if (!selectedPickupPoint) {
            showToast('⚠️ Выберите точку самовывоза', 'error');
            window.__orderSubmitting = false;
            return;
        }
        pickupPointName = selectedPickupPoint.name;
        discountPercent = selectedPickupPoint.discount || 0;
    } else {
        deliveryAddress = document.getElementById('deliveryAddressInput')?.value.trim() || '';
        if (!deliveryAddress) {
            showToast('⚠️ Укажите метро / адрес доставки', 'error');
            window.__orderSubmitting = false;
            return;
        }
    }

    let promoTotal = 0;
    let regularTotal = 0;

    cart.forEach(item => {
        const itemSum = item.price * item.quantity;
        if (promoMap[item.id]) {
            promoTotal += itemSum;
        } else {
            regularTotal += itemSum;
        }
    });

    let total = promoTotal + regularTotal;
    let finalDiscountPercent = discountPercent;

    if (discountPercent > 0) {
        total = Math.round(total * (1 - discountPercent / 100));
    }
    else if (hasReferralDiscount && regularTotal > 0) {
        const referralDiscount = Math.round(regularTotal * 0.05);
        total = total - referralDiscount;
        finalDiscountPercent = 5;
    }

    const minSum = getModeMin();
    if (minSum > 0 && total < minSum) {
        showToast(`⚠️ Минимум для «${getModeInfo().label}»: ${minSum}₽`, 'error');
        window.__orderSubmitting = false;
        return;
    }

    const orderNumber = generateOrderNumber();
    const telegramUserId = tg?.initDataUnsafe?.user?.id || null;

    const order = {
        id: orderNumber,
        customer: {
            name,
            telegram,
            phone,
            address: deliveryAddress || pickupPointName,
            comment,
            telegram_id: telegramUserId
        },
        items: cart.map(i => ({
            name: i.name,
            brand: i.brandName || '',
            article: i.article || '',
            quantity: i.quantity,
            price: i.price,
            total: i.price * i.quantity
        })),
        total: total,
        mode: priceMode || 'opt',
        date: new Date().toISOString(),
        delivery_type: deliveryType,
        pickup_point: pickupPointName,
        delivery_address: deliveryAddress,
        discount_percent: finalDiscountPercent
    };

    try {
        const response = await fetch(`${API_URL}/api/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        });
        const result = await response.json();
        if (!result.success) {
            showToast('❌ Ошибка: ' + (result.error || 'не удалось'), 'error');
            window.__orderSubmitting = false;
            return;
        }
    } catch (err) {
        showToast('⚠️ Ошибка сети', 'error');
        window.__orderSubmitting = false;
        return;
    }

    if (orderModal) orderModal.classList.remove('active');
    if (orderNumberEl) orderNumberEl.textContent = `№ ${orderNumber}`;
    if (successModal) successModal.classList.add('active');

    cart = [];
    updateCartUI();
    refreshCurrentView();
    if (orderForm) orderForm.reset();
    showToast(`✅ Заказ №${orderNumber} оформлен!`, 'success');

    setTimeout(() => { window.__orderSubmitting = false; }, 3000);
}

// ===== УТОЧНЕНИЕ НАЛИЧИЯ =====
function openCheckStock(productId) {
    const product = findProduct(productId);
    if (!product) return;
    currentCheckStockProduct = { product };
    const displayPrice = getPrice(product);
    if (checkStockProductInfo) {
        checkStockProductInfo.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-meta">${product.brandName || ''} • ${displayPrice} ₽</div>
        `;
    }
    document.getElementById('checkStockName').value = '';
    document.getElementById('checkStockContact').value = '';
    document.getElementById('checkStockPhone').value = '';
    document.getElementById('checkStockComment').value = '';
    if (checkStockModal) checkStockModal.classList.add('active');
}

function closeCheckStock() { if (checkStockModal) checkStockModal.classList.remove('active'); }

function submitCheckStock(e) {
    e.preventDefault();
    const name = document.getElementById('checkStockName').value.trim();
    const contact = document.getElementById('checkStockContact').value.trim();
    const phone = document.getElementById('checkStockPhone').value.trim();
    const comment = document.getElementById('checkStockComment').value.trim();

    if (!name) { showToast('⚠️ Введите имя', 'error'); return; }
    if (!contact && !phone) { showToast('⚠️ Укажите Telegram или телефон', 'error'); return; }

    const requests = JSON.parse(localStorage.getItem('stockRequests') || '[]');
    requests.push({
        id: `RQ-${Date.now().toString().slice(-6)}`,
        product: currentCheckStockProduct?.product?.name || '',
        price: getPrice(currentCheckStockProduct?.product || {}),
        customer: { name, contact, phone, comment },
        date: new Date().toISOString(),
        status: 'Новый'
    });
    localStorage.setItem('stockRequests', JSON.stringify(requests));
    closeCheckStock();
    showToast('✅ Запрос отправлен!', 'success');
}

// ===== КНОПКИ =====
if (modalOverlay) modalOverlay.addEventListener('click', closeCart);
if (orderModalOverlay) orderModalOverlay.addEventListener('click', closeOrderModal);
if (successModalOverlay) successModalOverlay.addEventListener('click', closeSuccessModal);
if (modalClose) modalClose.addEventListener('click', closeCart);
if (orderModalClose) orderModalClose.addEventListener('click', closeOrderModal);
if (successBtn) successBtn.addEventListener('click', closeSuccessModal);
if (cartBtn) cartBtn.addEventListener('click', openCart);
if (checkoutBtn) checkoutBtn.addEventListener('click', openOrderModal);
if (orderForm) orderForm.addEventListener('submit', submitOrder);

if (checkStockOverlay) checkStockOverlay.addEventListener('click', closeCheckStock);
if (checkStockClose) checkStockClose.addEventListener('click', closeCheckStock);
if (checkStockForm) checkStockForm.addEventListener('submit', submitCheckStock);

// ===== TOAST =====
function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️';
    toast.innerHTML = `${icon} ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ===== ЗАПУСК =====
(async function init() {
    console.log('🛍️ VAPE BOX: загружаем...');

    await Promise.all([
        loadCategoryImages(),
        loadPromos(),
        checkReferralDiscount()
    ]);

    if (!priceMode) {
        showModeSelection();
        return;
    }

    const products = await loadAllProducts();
    console.log(`🛍️ Получено товаров (${getModeSource()}): ${products.length}`);
    categories = buildCategoriesFromProducts(products);

    createModeButton();
    renderCategoryTabs();
    showPromos();
    updateCartUI();
    console.log(`🛍️ VAPE BOX загружен! Режим: ${priceMode}`);
})();
