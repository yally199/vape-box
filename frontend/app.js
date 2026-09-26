// ===== ПОДКЛЮЧЕНИЕ К TELEGRAM =====
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// ===== ПОДКЛЮЧЕНИЕ К БЕКЕНДУ =====
const API_URL = "https://vape-box.onrender.com";

// ===== РЕЖИМ ЦЕН =====
let priceMode = localStorage.getItem('priceMode') || null;

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

// ===== СОСТОЯНИЕ =====
let categories = [];
let cart = [];
let currentView = 'catalog';
let currentCategoryId = 'all';
let currentBrandId = null;
let currentSeriesId = null;
let currentSearch = '';
let isSearchMode = false;

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

// ===== ПОЛУЧИТЬ ЦЕНУ ПО РЕЖИМУ =====
function getPrice(item) {
    if (priceMode === 'retail') {
        return item.price_retail || item.price;
    }
    return item.price;
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
            brandName: brandName,
            seriesName: seriesName
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

// ===== ЗАГРУЗКА ВСЕХ ТОВАРОВ =====
async function loadAllProducts() {
    try {
        const response = await fetch(`${API_URL}/api/products?limit=10000&offset=0`);
        if (!response.ok) throw new Error('Ошибка загрузки');
        const data = await response.json();
        return data.products || [];
    } catch (error) {
        console.warn('Бекенд недоступен:', error);
        return [];
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

// ===== ЭКРАН ВЫБОРА РЕЖИМА =====
function showModeSelection() {
    const container = productsContainer;
    if (!container) return;

    if (categoriesContainer) categoriesContainer.style.display = 'none';
    if (searchInput) searchInput.style.display = 'none';
    if (pageTitle) pageTitle.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';

    container.style.display = 'block';
    container.innerHTML = `
        <div style="text-align:center;padding:40px 20px;">
            <div style="font-size:56px;margin-bottom:20px;">⚡</div>
            <div style="font-size:26px;font-weight:700;margin-bottom:10px;">VAPE BOX</div>
            <div style="font-size:15px;color:#8080a0;margin-bottom:36px;">Выберите режим покупки</div>

            <button id="modeOpt" style="
                display:block;width:100%;max-width:340px;margin:0 auto 14px;
                padding:22px;background:linear-gradient(135deg,#8b5cf6,#7c3aed);
                color:#fff;border:none;border-radius:16px;
                font-size:17px;font-weight:700;cursor:pointer;text-align:left;
            ">
                <div style="font-size:20px;margin-bottom:4px;">📦 Опт</div>
                <div style="font-size:13px;opacity:0.85;font-weight:400;">Заказ от 2500₽</div>
            </button>

            <button id="modeRetail" style="
                display:block;width:100%;max-width:340px;margin:0 auto;
                padding:22px;background:linear-gradient(135deg,#f59e0b,#d97706);
                color:#fff;border:none;border-radius:16px;
                font-size:17px;font-weight:700;cursor:pointer;text-align:left;
            ">
                <div style="font-size:20px;margin-bottom:4px;">🛒 Розница</div>
                <div style="font-size:13px;opacity:0.85;font-weight:400;">Заказ до 2500₽</div>
            </button>

            <div style="margin-top:24px;font-size:12px;color:#606080;">
                Режим можно поменять в шапке
            </div>
        </div>
    `;

    document.getElementById('modeOpt').addEventListener('click', () => setMode('opt'));
    document.getElementById('modeRetail').addEventListener('click', () => setMode('retail'));
}

function setMode(mode) {
    priceMode = mode;
    localStorage.setItem('priceMode', mode);

    if (categoriesContainer) categoriesContainer.style.display = 'flex';
    if (searchInput) searchInput.style.display = 'block';
    if (pageTitle) pageTitle.style.display = 'block';

    // Обновляем кнопку в шапке
    updateModeButton();

    renderCategoryTabs();
    renderCatalog();
    updateCartUI();
    showToast(mode === 'opt' ? '📦 Режим: ОПТ' : '🛒 Режим: РОЗНИЦА', 'success');
}

function updateModeButton() {
    const btn = document.getElementById('modeSwitchBtn');
    if (btn) {
        btn.textContent = priceMode === 'opt' ? '📦 ОПТ' : '🛒 РОЗНИЦА';
        btn.style.background = priceMode === 'opt'
            ? 'linear-gradient(135deg,#8b5cf6,#7c3aed)'
            : 'linear-gradient(135deg,#f59e0b,#d97706)';
    }
}

function createModeButton() {
    // Проверяем, есть ли уже кнопка
    if (document.getElementById('modeSwitchBtn')) return;

    const btn = document.createElement('button');
    btn.id = 'modeSwitchBtn';
    btn.style.cssText = `
        position:fixed;top:20px;right:70px;z-index:100;
        padding:8px 12px;color:#fff;border:none;border-radius:10px;
        font-size:12px;font-weight:700;cursor:pointer;
        box-shadow:0 4px 12px rgba(0,0,0,0.3);
    `;
    btn.textContent = '📦 ОПТ';
    btn.addEventListener('click', () => {
        const newMode = priceMode === 'opt' ? 'retail' : 'opt';
        setMode(newMode);
    });
    document.body.appendChild(btn);
    updateModeButton();
}

// ===== ОТРИСОВКА =====
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

        card.innerHTML = `
            <div class="product-image" style="font-size: 48px;">${cat.icon || '📁'}</div>
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

function buildFlavorItem(flavor, index, categoryId, brandId) {
    const item = document.createElement('div');
    item.className = 'flavor-item';
    item.style.animationDelay = `${index * 0.02}s`;

    const isInCart = cart.some(c => c.id === flavor.id);
    const hasStock = flavor.stock > 0;
    const cartItem = cart.find(c => c.id === flavor.id);
    const currentQty = cartItem ? cartItem.quantity : 0;
    const displayPrice = getPrice(flavor);

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

    item.innerHTML = `
        <div class="flavor-icon">${brandIcon}</div>
        <div class="flavor-info">
            <div class="flavor-name">${flavor.name}</div>
            <div class="flavor-meta">
                <span class="flavor-price">${displayPrice} ₽</span>
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

// ===== ПОИСК =====
let searchTimeout = null;

async function renderSearchResults() {
    currentView = 'search';
    isSearchMode = true;
    if (backBtn) backBtn.style.display = 'flex';
    if (pageTitle) pageTitle.textContent = 'Поиск: ' + currentSearch;

    const query = currentSearch.trim();
    if (query.length < 2) {
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
        const response = await fetch(`${API_URL}/api/search?q=${encodeURIComponent(query)}&limit=100`);
        const data = await response.json();
        const results = data.products || [];
        const total = data.total || 0;

        if (currentSearch.trim() !== query) return;

        productsContainer.innerHTML = '';

        if (results.length === 0) {
            productsContainer.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#8080a0;">😕 Ничего не найдено по запросу «' + escapeHtml(query) + '»</div>';
            return;
        }

        const info = document.createElement('div');
        info.style.cssText = 'padding:10px 4px 16px;font-size:14px;color:#8080a0;';
        info.textContent = `Найдено: ${total}${total > 100 ? ' (показаны первые 100)' : ''}`;
        productsContainer.appendChild(info);

        const flavors = results.map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            price_retail: p.price_retail || 0,
            stock: p.stock,
            description: p.description || '',
            brandName: p.brand || ''
        }));

        flavors.forEach((flavor, index) => {
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
            cart[index].price = finalPrice; // обновляем цену на случай смены режима
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
    categoriesContainer.innerHTML = '<button class="category active" data-category="all">📂 Все товары</button>';
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

        if (categoryId === 'all') {
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
    if (orderTotalPrice) orderTotalPrice.textContent = total + ' ₽';
    if (cartModal) cartModal.classList.remove('active');
    if (orderModal) orderModal.classList.add('active');
}

function generateOrderNumber() {
    return String(Math.floor(1000 + Math.random() * 9000));
}

async function submitOrder(e) {
    e.preventDefault();
    const name = document.getElementById('customerName').value.trim();
    const telegram = document.getElementById('customerTelegram').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const comment = document.getElementById('orderComment').value.trim();

    if (!name) { showToast('⚠️ Введите имя', 'error'); return; }
    if (!telegram && !phone) { showToast('⚠️ Укажите Telegram или телефон', 'error'); return; }

    const orderNumber = generateOrderNumber();
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const telegramUserId = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user)
        ? tg.initDataUnsafe.user.id : null;

    const order = {
        id: orderNumber,
        customer: { name, telegram, phone, address, comment, telegram_id: telegramUserId },
        items: cart.map(i => ({
            name: i.name,
            brand: i.brandName || '',
            quantity: i.quantity,
            price: i.price,
            total: i.price * i.quantity
        })),
        total: total,
        mode: priceMode,
        date: new Date().toISOString()
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
            return;
        }
    } catch (err) {
        showToast('⚠️ Ошибка сети', 'error');
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
    console.log('🛍️ VAPE BOX: загружаем товары...');
    const products = await loadAllProducts();
    console.log(`🛍️ Получено товаров: ${products.length}`);
    categories = buildCategoriesFromProducts(products);

    if (!priceMode) {
        showModeSelection();
        return;
    }

    createModeButton();
    renderCategoryTabs();
    renderCatalog();
    updateCartUI();
    console.log(`🛍️ VAPE BOX загружен! Режим: ${priceMode}`);
})();
