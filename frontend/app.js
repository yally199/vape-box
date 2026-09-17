// ===== ПОДКЛЮЧЕНИЕ К TELEGRAM =====
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// ===== ПОДКЛЮЧЕНИЕ К БЕКЕНДУ =====
const API_URL = "https://vape-box.onrender.com";

// Эмодзи для известных категорий
const CATEGORY_ICONS = {
    'Жидкости': '🍓',
    'Одноразки': '⚡',
    'Под-системы': '📱',
    'Расходники': '🧰',
    'Шайбы': '🎮',
    'Никотиновые ватки': '💊',
    'БЛОЧНО': '🗃️'
};

// Эмодзи для брендов (можно расширять)
const BRAND_ICONS = {
    'Angry Vape': '🍓',
    'ANGRY APE': '🍍',
    'ANGRY APE ULTRA': '🍍',
    'ANNIMA': '🍇',
    'BLOOD': '🩸',
    'CATSWILL': '🐱',
    'PODONKI': '🎯',
    'CHAPPMAN': '🧪',
    'CHILL OUT': '❄️',
    'DOTA': '🎮',
    'DUALL': '🥭',
    'FAFF': '🍬',
    'GLITCH': '💻',
    'HOTSPOT': '🔥',
    'HUSKY': '🐕',
    'ISTERIKA': '💢',
    'KOMA': '💀',
    'LIT ENERGY': '⚡',
    'MAD': '😈',
    'MONSTER': '👾',
    'MONSTERVAPOR': '🧟',
    'NARCOZ': '💊',
    'NICE SHOT': '🎯',
    'OGGO': '🐙',
    'PEREDOZ': '💉',
    'PHANTOM': '👻',
    'PIXEL': '👾',
    'PROTEST': '✊',
    'RICK AND MORTY': '🧠',
    'SKALA': '🏔️',
    'TRAVA': '🌿',
    'YUMMY': '🍭',
    'ZONG ULTRA': '⚡',
    'АНАРХИЯ V2': '🏴',
    'ГРЕХ': '😈',
    'ЗЛАЯ ЛАБУБУ': '🧙',
    'ЗЛАЯ МОНАШКА': '💒',
    'МОНАРХИЯ': '👑',
    'САМОУБИЙЦА': '💀',
    'Злой Монах 75mg': '🧙'
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

// ===== ПРЕОБРАЗОВАНИЕ ТОВАРОВ С БЕКЕНДА В КАТЕГОРИИ =====
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
            price: p.price,          // наценка уже применена на бекенде
            stock: p.stock,
            description: p.description || '',
            brandName: brandName,
            seriesName: seriesName
        });
    });

    // Преобразуем объекты в массивы
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

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-а-яё]+/gi, '')
        .replace(/\-\-+/g, '-')
        .substring(0, 50);
}

// ===== ЗАГРУЗКА С БЕКЕНДА =====
let allLoadedProducts = [];
let currentOffset = 0;
const PAGE_SIZE = 100;
let hasMoreProducts = true;

async function loadProductsPage(offset = 0, limit = PAGE_SIZE) {
    try {
        const response = await fetch(`${API_URL}/api/products?limit=${limit}&offset=${offset}`);
        if (!response.ok) throw new Error('Ошибка загрузки');
        const data = await response.json();
        return {
            products: data.products || [],
            total: data.total || 0,
            has_more: data.has_more || false
        };
    } catch (error) {
        console.warn('Бекенд недоступен:', error);
        return { products: [], total: 0, has_more: false };
    }
}

async function loadNextPage() {
    if (!hasMoreProducts) return false;

    const result = await loadProductsPage(currentOffset);
    if (result.products.length === 0) {
        hasMoreProducts = false;
        return false;
    }

    allLoadedProducts = allLoadedProducts.concat(result.products);
    currentOffset += result.products.length;
    hasMoreProducts = result.has_more;

    categories = buildCategoriesFromProducts(allLoadedProducts);
    renderCategoryTabs();

    if (isSearchMode) {
        // Во время поиска — не перерисовываем каталог
    } else if (currentView === 'catalog') {
        renderCatalog();
    } else if (currentView === 'brands') {
        showBrands(currentCategoryId);
    } else if (currentView === 'series' && currentBrandId) {
        showSeries(currentCategoryId, currentBrandId);
    } else if (currentView === 'flavors' && currentBrandId && currentSeriesId) {
        showFlavors(currentCategoryId, currentBrandId, currentSeriesId);
    }

    console.log(`📦 Загружено ${allLoadedProducts.length} из ${result.total}`);
    return true;
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

function getAllFlavors() {
    const all = [];
    categories.forEach(cat => {
        if (cat.brands) {
            cat.brands.forEach(brand => {
                if (brand.series) {
                    brand.series.forEach(series => {
                        series.flavors.forEach(flavor => {
                            all.push({
                                ...flavor,
                                categoryId: cat.id,
                                categoryName: cat.name,
                                brandId: brand.id,
                                brandName: brand.name,
                                brandIcon: brand.icon,
                                seriesId: series.id,
                                seriesName: series.name
                            });
                        });
                    });
                }
            });
        }
    });
    return all;
}

function getFilteredFlavors() {
    let all = getAllFlavors();
    if (currentSearch.trim()) {
        const query = currentSearch.toLowerCase().trim();
        all = all.filter(f =>
            f.name.toLowerCase().includes(query) ||
            (f.description || '').toLowerCase().includes(query) ||
            f.brandName.toLowerCase().includes(query)
        );
    }
    return all;
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
                if (b.series) {
                    b.series.forEach(s => { count += s.flavors.length; });
                }
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
        if (brand.series) {
            brand.series.forEach(s => { count += s.flavors.length; });
        }

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

async function showFlavors(categoryId, brandId, seriesId) {
    currentView = 'flavors';
    currentCategoryId = categoryId;
    currentBrandId = brandId;
    currentSeriesId = seriesId;
    if (backBtn) backBtn.style.display = 'flex';

    const series = getSeries(categoryId, brandId, seriesId);
    if (pageTitle) pageTitle.textContent = series.name;

    if (!productsContainer) return;
    productsContainer.innerHTML = '<div style="text-align:center;padding:40px;color:#8080a0;">⏳ Загружаем товары...</div>';
    productsContainer.style.display = 'block';
    productsContainer.style.gridTemplateColumns = 'none';

    // Запрашиваем товары конкретной серии с бекенда
    try {
        const cat = getCategory(categoryId);
        const brand = getBrand(categoryId, brandId);

        const params = new URLSearchParams();
        if (cat && cat.name) params.append('category', cat.name);
        if (brand && brand.name) params.append('brand', brand.name);
        if (series && series.name) params.append('series', series.name);
        params.append('limit', '100');

        const response = await fetch(`${API_URL}/api)/products/by-category?${params.toString()}`);
        const data {
 = await response.json();
        const products = data.           products || [];

        productsContainer.innerHTML = '';

        if products (products.length === 0Container.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#8080a0;">Товаров нет</div>';
            return;
        }

        // Информация сверху
        const info = document.createElement('div');
        info.style.cssText = 'padding:8px 4px 12px;font-size:13px;color:#8080a0;';
        info.textContent = `Показано ${products.length} из ${data.total}`;
        productsContainer.appendChild(info);

        // Преобразуем в flavor-формат
        const flavors = products.map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            stock: p.stock,
            description: p.description || '',
            brandName: p.brand || '',
            seriesName: p.series || ''
        }));

        flavors.forEach((flavor, index) => {
            productsContainer.appendChild(buildFlavorItem(flavor, index, categoryId, brandId));
        });

    } catch (err) {
        console.error('Ошибка загрузки товаров категории:', err);
        productsContainer.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#ef4444;">❌ Ошибка загрузки. Попробуйте ещё раз.</div>';
    }
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
            stock: p.stock,
            description: p.description || '',
            brandName: p.brand || '',
            brandIcon: (typeof BRAND_ICONS !== 'undefined' && BRAND_ICONS[p.brand]) || '📦',
            categoryId: slugify(p.category || 'Разное'),
            brandId: slugify(p.brand || 'Разное'),
            categoryName: p.category || '',
            seriesName: p.series || ''
        }));

        flavors.forEach((flavor, index) => {
            productsContainer.appendChild(buildFlavorItem(flavor, index, flavor.categoryId, flavor.brandId));
        });

    } catch (err) {
        console.error('Ошибка поиска:', err);
        productsContainer.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#ef4444;">❌ Ошибка поиска. Попробуйте ещё раз.</div>';
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

    if (index === -1) {
        if (delta <= 0) return;
        if (product.stock <= 0) {
            showToast('❌ Товар закончился на складе', 'error');
            return;
        }
        cart.push({ ...product, quantity: delta });
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

async function refreshCurrentView() {
    if (isSearchMode) {
        await renderSearchResults();
    } else if (currentView === 'catalog') {
        renderCatalog();
    } else if (currentView === 'brands') {
        showBrands(currentCategoryId);
    } else if (currentView === 'series' && currentBrandId) {
        showSeries(currentCategoryId, currentBrandId);
    } else if (currentView === 'flavors' && currentBrandId && currentSeriesId) {
        await showFlavors(currentCategoryId, currentBrandId, currentSeriesId);
    }
}

// ===== КАТЕГОРИИ (ГОРИЗОНТАЛЬНЫЕ КНОПКИ) =====
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
        if (searchClear) {
            searchClear.style.display = currentSearch ? 'block' : 'none';
        }

        if (searchTimeout) clearTimeout(searchTimeout);

        if (!currentSearch.trim()) {
            isSearchMode = false;
            if (currentView === 'search') renderCatalog();
            else refreshCurrentView();
            return;
        }

        searchTimeout = setTimeout(() => {
            renderSearchResults();
        }, 400);
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
                <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
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
    const timestamp = Date.now().toString().slice(-4);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `VB-${timestamp}${random}`;
}

async function submitOrder(e) {
    e.preventDefault();
    const name = document.getElementById('customerName').value.trim();
    const telegram = document.getElementById('customerTelegram').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const comment = document.getElementById('orderComment').value.trim();

    if (!name) {
        showToast('⚠️ Введите имя', 'error');
        return;
    }
    if (!telegram && !phone) {
        showToast('⚠️ Укажите Telegram или телефон', 'error');
        return;
    }

    const orderNumber = generateOrderNumber();
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const order = {
        id: orderNumber,
        customer: { name, telegram, phone, address, comment },
        items: cart.map(i => ({
            name: i.name,
            brand: i.brandName || '',
            quantity: i.quantity,
            price: i.price,
            total: i.price * i.quantity
        })),
        total: total,
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
            showToast('❌ Ошибка: ' + (result.error || 'не удалось отправить'), 'error');
            return;
        }
    } catch (err) {
        console.warn('Не удалось отправить заказ на сервер:', err);
        showToast('⚠️ Ошибка сети. Попробуйте ещё раз.', 'error');
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
    if (checkStockProductInfo) {
        checkStockProductInfo.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-meta">${product.brandName || ''} • ${product.price} ₽</div>
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
    const request = {
        id: `RQ-${Date.now().toString().slice(-6)}`,
        product: currentCheckStockProduct?.product?.name || '',
        price: currentCheckStockProduct?.product?.price || 0,
        customer: { name, contact, phone, comment },
        date: new Date().toISOString(),
        status: 'Новый'
    };
    requests.push(request);
    localStorage.setItem('stockRequests', JSON.stringify(requests));

    if (tg) tg.sendData(JSON.stringify({ type: 'stockRequest', request }));
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

// ===== УВЕДОМЛЕНИЯ =====
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
    await loadNextPage();
    renderCatalog();
    updateCartUI();
    console.log('🛍️ VAPE BOX загружен! Первая порция:', allLoadedProducts.length);

    window.addEventListener('scroll', async () => {
        if (!hasMoreProducts) return;
        if (isSearchMode) return; // во время поиска не догружаем

        const scrollPosition = window.innerHeight + window.scrollY;
        const pageHeight = document.body.offsetHeight;

        if (pageHeight - scrollPosition < 500) {
            if (window.__loadingMore) return;
            window.__loadingMore = true;
            await loadNextPage();
            window.__loadingMore = false;
        }
    });
})();
