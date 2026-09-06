// ===== ПОДКЛЮЧЕНИЕ К TELEGRAM =====
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// ===== КАТЕГОРИИ С БРЕНДАМИ =====
const categories = [
    {
        id: 'all',
        name: 'Все товары',
        icon: '📂'
    },
    {
        id: 'liquid',
        name: 'Жидкости',
        icon: '🍓',
        brands: [
            {
                id: 'angry-vape',
                name: 'Angry Vape',
                icon: '🍓',
                flavors: [
                    { id: 101, name: 'Клубничный джем 50мг', price: 325, stock: 15, description: 'Сладкий клубничный джем с ментолом' },
                    { id: 102, name: 'Черника со сливками 20мг', price: 325, stock: 8, description: 'Нежная черника со сливочными нотками' },
                    { id: 103, name: 'Манго 50мг', price: 325, stock: 12, description: 'Сочное манго с лёгкой кислинкой' },
                    { id: 104, name: 'Синяя малина 20мг', price: 325, stock: 5, description: 'Кисло-сладкая синяя малина' }
                ]
            },
            {
                id: 'angry-ape',
                name: 'ANGRY APE',
                icon: '🍍',
                flavors: [
                    { id: 201, name: 'Ананасовая конфета 60mg', price: 360, stock: 12, description: 'Сладкая ананасовая конфета' },
                    { id: 202, name: 'Банан клубника 60mg', price: 360, stock: 8, description: 'Нежный банан с клубникой' },
                    { id: 203, name: 'Ягодный микс 60mg', price: 360, stock: 10, description: 'Микс лесных ягод' }
                ]
            },
            {
                id: 'annima',
                name: 'ANNIMA LOVE',
                icon: '🍇',
                flavors: [
                    { id: 301, name: 'Ежевичный лимонад 80mg', price: 380, stock: 5, description: 'Освежающий лимонад с ежевикой' },
                    { id: 302, name: 'Земляника виноград 80mg', price: 380, stock: 7, description: 'Сочная земляника с виноградом' },
                    { id: 303, name: 'Вишнёвый морс 80mg', price: 380, stock: 3, description: 'Домашний вишнёвый морс' }
                ]
            },
            {
                id: 'blood',
                name: 'BLOOD',
                icon: '🩸',
                flavors: [
                    { id: 401, name: 'Вишня лайм 50mg', price: 230, stock: 20, description: 'Таркая вишня с лаймом' },
                    { id: 402, name: 'Банановый милкшейк 50mg', price: 230, stock: 15, description: 'Густой банановый милкшейк' },
                    { id: 403, name: 'Малиновый лимонад 50mg', price: 230, stock: 10, description: 'Освежающий малиновый лимонад' }
                ]
            },
            {
                id: 'catswill',
                name: 'CATSWILL',
                icon: '🐱',
                flavors: [
                    { id: 501, name: 'Клубника арбуз жвачка 20mg', price: 330, stock: 0, description: 'Жвачка со вкусом клубники и арбуза' },
                    { id: 502, name: 'Кислый скитлс 50mg', price: 330, stock: 8, description: 'Кислые конфетки скитлс' },
                    { id: 503, name: 'Мятная вишня 50mg', price: 330, stock: 12, description: 'Вишня с освежающей мятой' }
                ]
            }
        ]
    },
    {
        id: 'disposable',
        name: 'Одноразки',
        icon: '⚡',
        brands: [
            {
                id: 'elf-bar',
                name: 'ELF BAR',
                icon: '⚡',
                flavors: [
                    { id: 601, name: 'BC30000', price: 880, stock: 7, description: '30000 затяжек, аккумулятор 650 мАч' },
                    { id: 602, name: 'GH33000', price: 940, stock: 6, description: '33000 затяжек, регулировка мощности' },
                    { id: 603, name: 'BC30000 NEW', price: 880, stock: 10, description: 'Обновлённая версия BC30000' }
                ]
            },
            {
                id: 'lost-mary',
                name: 'LOST MARY',
                icon: '💨',
                flavors: [
                    { id: 701, name: 'MO 10000', price: 830, stock: 10, description: '10000 затяжек, компактный дизайн' },
                    { id: 702, name: 'MO 30000', price: 890, stock: 5, description: '30000 затяжек, мощный аккумулятор' },
                    { id: 703, name: 'BM 16000', price: 930, stock: 8, description: '16000 затяжек, стильный дизайн' }
                ]
            },
            {
                id: 'puffmi',
                name: 'PUFFMI',
                icon: '🔥',
                flavors: [
                    { id: 801, name: 'Mosh 40000', price: 1030, stock: 3, description: '40000 затяжек, 5% никотина' },
                    { id: 802, name: 'FLORA 25000', price: 1060, stock: 4, description: '25000 затяжек, яркий дизайн' },
                    { id: 803, name: 'DURA V2 9000', price: 950, stock: 6, description: '9000 затяжек, компактный' }
                ]
            },
            {
                id: 'waka',
                name: 'WAKA',
                icon: '🌊',
                flavors: [
                    { id: 901, name: 'soPRO 20000', price: 0, stock: 0, description: '20000 затяжек' },
                    { id: 902, name: 'BLAST 38000', price: 0, stock: 0, description: '38000 затяжек' },
                    { id: 903, name: 'JUPITER 30000', price: 0, stock: 0, description: '30000 затяжек' }
                ]
            },
            {
                id: 'snoopy',
                name: 'SnoopySmoke',
                icon: '🐾',
                flavors: [
                    { id: 1001, name: 'Extra Tank 40000', price: 490, stock: 0, description: '40000 затяжек, яркий дизайн' }
                ]
            }
        ]
    },
    {
        id: 'pods',
        name: 'Под-системы',
        icon: '📱',
        brands: [
            {
                id: 'vaporesso',
                name: 'Vaporesso',
                icon: '📱',
                flavors: [
                    { id: 1101, name: 'Xros 3', price: 1060, stock: 4, description: '1000 мАч, картриджи 0.6/0.8/1.2 Ом' },
                    { id: 1102, name: 'Xros 3 Mini', price: 1040, stock: 2, description: '1000 мАч, компактный размер' },
                    { id: 1103, name: 'Xros 4', price: 1880, stock: 3, description: 'Новейшая модель Xros' }
                ]
            },
            {
                id: 'geekvape',
                name: 'GeekVape',
                icon: '🛡️',
                flavors: [
                    { id: 1201, name: 'Aegis Boost 2', price: 3190, stock: 0, description: 'Влагозащита, 1500 мАч, 5 мл' },
                    { id: 1202, name: 'Aegis Hero 2', price: 2880, stock: 1, description: 'Защита от ударов, 800 мАч' },
                    { id: 1203, name: 'Aegis Hero 5', price: 2810, stock: 2, description: 'Новейшая модель Hero' }
                ]
            },
            {
                id: 'smoant',
                name: 'Smoant',
                icon: '💎',
                flavors: [
                    { id: 1301, name: 'Knight 80', price: 3190, stock: 3, description: '80 Вт, отличный вкус' },
                    { id: 1302, name: 'Pasito 2', price: 2630, stock: 2, description: 'Компактная POD-система' }
                ]
            },
            {
                id: 'voopoo',
                name: 'Voopoo',
                icon: '🔮',
                flavors: [
                    { id: 1401, name: 'Vmate Pro', price: 1250, stock: 5, description: 'Простая и надёжная POD-система' },
                    { id: 1402, name: 'V.THRU Pro', price: 1750, stock: 3, description: 'Стильный дизайн, хороший вкус' }
                ]
            }
        ]
    },
    {
        id: 'consumables',
        name: 'Расходники',
        icon: '🧰',
        brands: [
            {
                id: 'vaporesso-cart',
                name: 'Картриджи Vaporesso',
                icon: '🔄',
                flavors: [
                    { id: 1501, name: 'Xros 0.4ом 3ml', price: 250, stock: 25, description: 'Сменный картридж, 3 мл' },
                    { id: 1502, name: 'Xros 0.6ом 3ml', price: 250, stock: 20, description: 'Сменный картридж, 3 мл' },
                    { id: 1503, name: 'Xros 0.8ом 3ml', price: 250, stock: 15, description: 'Сменный картридж, 3 мл' }
                ]
            },
            {
                id: 'geekvape-cart',
                name: 'Картриджи GeekVape',
                icon: '🔄',
                flavors: [
                    { id: 1601, name: 'H45 4ml', price: 350, stock: 10, description: 'Сменный картридж, 4 мл' },
                    { id: 1602, name: 'B60 5ml', price: 300, stock: 8, description: 'Сменный картридж, 5 мл' }
                ]
            },
            {
                id: 'coils',
                name: 'Испарители',
                icon: '🌀',
                flavors: [
                    { id: 1701, name: 'Smoant Pasito 2 K1 0.3ом', price: 210, stock: 8, description: '50-65 Вт, отличный вкус' },
                    { id: 1702, name: 'Smoant Pasito 2 K3', price: 200, stock: 6, description: 'Универсальный испаритель' }
                ]
            },
            {
                id: 'batteries',
                name: 'Аккумуляторы',
                icon: '🔋',
                flavors: [
                    { id: 1801, name: 'Sony 18650 2600mAh', price: 520, stock: 15, description: 'Литий-ионный аккумулятор' },
                    { id: 1802, name: 'HG2 18650 3000mAh', price: 520, stock: 10, description: 'Ёмкий аккумулятор' }
                ]
            }
        ]
    },
    {
        id: 'pouches',
        name: 'Шайбы/Пэки',
        icon: '🎮',
        brands: [
            {
                id: 'arqa',
                name: 'ARQA',
                icon: '🎮',
                flavors: [
                    { id: 1901, name: '120mg CS DOTA', price: 340, stock: 30, description: 'Фанта, ананас-банан-личи' },
                    { id: 1902, name: '100mg', price: 340, stock: 25, description: 'Классическая серия ARQA' },
                    { id: 1903, name: '70mg', price: 340, stock: 20, description: 'Лёгкая серия ARQA' }
                ]
            },
            {
                id: 'iceberg',
                name: 'ICEBERG',
                icon: '🧊',
                flavors: [
                    { id: 2001, name: '150mg', price: 340, stock: 20, description: 'Сладкая мята, двойная мята' },
                    { id: 2002, name: '130mg', price: 340, stock: 15, description: 'Средняя крепость' },
                    { id: 2003, name: '110mg', price: 340, stock: 10, description: 'Лёгкая серия ICEBERG' }
                ]
            },
            {
                id: 'drymost',
                name: 'DRYMOST',
                icon: '🍎',
                flavors: [
                    { id: 2101, name: '150mg', price: 330, stock: 0, description: 'Яблоко, мятный бриз' },
                    { id: 2102, name: '200mg', price: 350, stock: 5, description: 'Максимальная крепость' }
                ]
            }
        ]
    },
    {
        id: 'nicotine',
        name: 'Никотиновые ватки',
        icon: '💊',
        brands: [
            {
                id: 'boosters',
                name: 'Никобустеры',
                icon: '💊',
                flavors: [
                    { id: 2201, name: '4% (5шт)', price: 380, stock: 12, description: 'Никотиновые бустеры для жидкости' },
                    { id: 2202, name: '5% (5шт)', price: 440, stock: 8, description: 'Никотиновые бустеры 5%' },
                    { id: 2203, name: '6% (5шт)', price: 440, stock: 5, description: 'Никотиновые бустеры 6%' }
                ]
            },
            {
                id: 'fedrs',
                name: 'FEDRS',
                icon: '🧪',
                flavors: [
                    { id: 2301, name: 'Ice cool #9', price: 490, stock: 5, description: 'Малина, мята, энергетик' }
                ]
            }
        ]
    }
];

// ===== СОСТОЯНИЕ =====
let cart = [];
let currentView = 'catalog'; // catalog, brands, flavors
let currentCategoryId = 'all';
let currentBrandId = null;
let currentSearch = '';

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

// Модалка заказа
const orderModal = document.getElementById('orderModal');
const orderModalOverlay = document.getElementById('orderModalOverlay');
const orderModalClose = document.getElementById('orderModalClose');
const orderForm = document.getElementById('orderForm');
const orderItemsList = document.getElementById('orderItemsList');
const orderTotalPrice = document.getElementById('orderTotalPrice');

// Модалка успеха
const successModal = document.getElementById('successModal');
const successModalOverlay = document.getElementById('successModalOverlay');
const successBtn = document.getElementById('successBtn');
const orderNumberEl = document.getElementById('orderNumber');

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
function getCategory(id) {
    return categories.find(c => c.id === id);
}

function getBrand(categoryId, brandId) {
    const cat = getCategory(categoryId);
    if (!cat || !cat.brands) return null;
    return cat.brands.find(b => b.id === brandId);
}

function getAllFlavors() {
    const all = [];
    categories.forEach(cat => {
        if (cat.brands) {
            cat.brands.forEach(brand => {
                brand.flavors.forEach(flavor => {
                    all.push({
                        ...flavor,
                        categoryId: cat.id,
                        categoryName: cat.name,
                        brandId: brand.id,
                        brandName: brand.name,
                        brandIcon: brand.icon
                    });
                });
            });
        }
    });
    return all;
}

function getFilteredFlavors() {
    let all = getAllFlavors();
    
    // Фильтр по поиску
    if (currentSearch.trim()) {
        const query = currentSearch.toLowerCase().trim();
        all = all.filter(f => 
            f.name.toLowerCase().includes(query) ||
            f.description.toLowerCase().includes(query) ||
            f.brandName.toLowerCase().includes(query)
        );
    }
    
    return all;
}

// ===== ОТОБРАЖЕНИЕ =====
function renderCatalog() {
    currentView = 'catalog';
    currentCategoryId = 'all';
    currentBrandId = null;
    backBtn.style.display = 'none';
    pageTitle.textContent = 'Магазин вейп-товаров';
    
    productsContainer.innerHTML = '';
    emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    
    // Показываем категории
    categories.forEach((cat, index) => {
        if (cat.id === 'all') return;
        
        const card = document.createElement('div');
        card.className = 'product-card brand-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        // Подсчёт товаров в категории
        let count = 0;
        if (cat.brands) {
            cat.brands.forEach(b => {
                count += b.flavors.length;
            });
        }
        
        card.innerHTML = `
            <div class="product-image" style="font-size: 48px;">
                ${cat.icon || '📁'}
            </div>
            <div class="product-info">
                <div class="product-name">${cat.name}</div>
                <div class="product-description">${count} товаров</div>
                <div class="product-bottom" style="justify-content: flex-end;">
                    <span style="color: var(--text-secondary); font-size: 14px;">
                        → Открыть
                    </span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            if (cat.brands && cat.brands.length > 0) {
                showBrands(cat.id);
            } else {
                showToast('В этой категории пока нет товаров', 'error');
            }
        });
        
        productsContainer.appendChild(card);
    });
}

function showBrands(categoryId) {
    currentView = 'brands';
    currentCategoryId = categoryId;
    currentBrandId = null;
    backBtn.style.display = 'flex';
    
    const cat = getCategory(categoryId);
    pageTitle.textContent = cat.name;
    
    productsContainer.innerHTML = '';
    emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    
    if (!cat.brands || cat.brands.length === 0) {
        emptyState.style.display = 'block';
        productsContainer.style.display = 'none';
        return;
    }
    
    cat.brands.forEach((brand, index) => {
        const card = document.createElement('div');
        card.className = 'product-card brand-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="product-image" style="font-size: 48px;">
                ${brand.icon || '📦'}
            </div>
            <div class="product-info">
                <div class="product-name">${brand.name}</div>
                <div class="product-description">${brand.flavors.length} вкусов</div>
                <div class="product-bottom" style="justify-content: flex-end;">
                    <span style="color: var(--text-secondary); font-size: 14px;">
                        → Выбрать
                    </span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            showFlavors(categoryId, brand.id);
        });
        
        productsContainer.appendChild(card);
    });
}

function showFlavors(categoryId, brandId) {
    currentView = 'flavors';
    currentCategoryId = categoryId;
    currentBrandId = brandId;
    backBtn.style.display = 'flex';
    
    const brand = getBrand(categoryId, brandId);
    pageTitle.textContent = brand.name;
    
    productsContainer.innerHTML = '';
    emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    
    brand.flavors.forEach((flavor, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        const isInCart = cart.some(item => item.id === flavor.id);
        const hasStock = flavor.stock > 0;
        
        const stockText = hasStock 
            ? `<span class="stock-badge in-stock">✅ ${flavor.stock} шт</span>`
            : `<span class="stock-badge out-stock">❌ Нет в наличии</span>`;
        
        let addButton;
        if (!hasStock) {
            addButton = `<button class="add-btn disabled" disabled>Нет в наличии</button>`;
        } else if (isInCart) {
            addButton = `<button class="add-btn added" data-id="${flavor.id}">✓ В корзине</button>`;
        } else {
            addButton = `<button class="add-btn" data-id="${flavor.id}">+ Добавить</button>`;
        }
        
        card.innerHTML = `
            <div class="product-image" style="font-size: 48px;">
                ${brand.icon || '📦'}
            </div>
            <div class="product-info">
                <div class="product-name">${flavor.name}</div>
                <div class="product-description">${flavor.description || ''}</div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                    ${stockText}
                </div>
                <div class="product-bottom">
                    <span class="product-price">${flavor.price} ₽</span>
                    ${addButton}
                </div>
            </div>
        `;
        
        const addBtn = card.querySelector('.add-btn:not(.disabled)');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleCart(flavor.id);
            });
        }
        
        card.addEventListener('click', () => {
            showProductInfo(flavor, brand);
        });
        
        productsContainer.appendChild(card);
    });
}

// ===== ПОКАЗ ИНФОРМАЦИИ О ТОВАРЕ =====
function showProductInfo(flavor, brand) {
    const isInCart = cart.some(item => item.id === flavor.id);
    const stockStatus = flavor.stock > 0 
        ? `✅ В наличии: ${flavor.stock} шт` 
        : '❌ Нет в наличии';
    
    const msg = `
📦 ${flavor.name}
${'─'.repeat(30)}
🏷️ Бренд: ${brand.name}
📝 ${flavor.description || 'Нет описания'}
💰 ${flavor.price} ₽
${stockStatus}
${'─'.repeat(30)}
${isInCart ? '🛒 Товар уже в корзине' : 'Нажмите "Добавить", чтобы положить в корзину'}
    `;
    alert(msg);
}

// ===== ПОИСК =====
function renderSearchResults() {
    currentView = 'search';
    backBtn.style.display = 'flex';
    pageTitle.textContent = 'Результаты поиска';
    
    const results = getFilteredFlavors();
    
    productsContainer.innerHTML = '';
    emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    
    if (results.length === 0) {
        emptyState.style.display = 'block';
        productsContainer.style.display = 'none';
        return;
    }
    
    results.forEach((flavor, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        const isInCart = cart.some(item => item.id === flavor.id);
        const hasStock = flavor.stock > 0;
        
        const stockText = hasStock 
            ? `<span class="stock-badge in-stock">✅ ${flavor.stock} шт</span>`
            : `<span class="stock-badge out-stock">❌ Нет в наличии</span>`;
        
        let addButton;
        if (!hasStock) {
            addButton = `<button class="add-btn disabled" disabled>Нет в наличии</button>`;
        } else if (isInCart) {
            addButton = `<button class="add-btn added" data-id="${flavor.id}">✓ В корзине</button>`;
        } else {
            addButton = `<button class="add-btn" data-id="${flavor.id}">+ Добавить</button>`;
        }
        
        card.innerHTML = `
            <div class="product-image" style="font-size: 48px;">
                ${flavor.brandIcon || '📦'}
            </div>
            <div class="product-info">
                <div class="product-name">${flavor.name}</div>
                <div class="product-description">${flavor.brandName} • ${flavor.description || ''}</div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                    ${stockText}
                </div>
                <div class="product-bottom">
                    <span class="product-price">${flavor.price} ₽</span>
                    ${addButton}
                </div>
            </div>
        `;
        
        const addBtn = card.querySelector('.add-btn:not(.disabled)');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleCart(flavor.id);
            });
        }
        
        productsContainer.appendChild(card);
    });
}

// ===== КОРЗИНА =====
function toggleCart(productId) {
    // Ищем товар во всех брендах
    let product = null;
    let brand = null;
    
    for (const cat of categories) {
        if (cat.brands) {
            for (const b of cat.brands) {
                const found = b.flavors.find(f => f.id === productId);
                if (found) {
                    product = found;
                    brand = b;
                    break;
                }
            }
        }
        if (product) break;
    }
    
    if (!product) return;
    
    const index = cart.findIndex(item => item.id === productId);
    
    if (index === -1) {
        if (product.stock <= 0) {
            showToast('❌ Товар закончился на складе', 'error');
            return;
        }
        cart.push({ ...product, quantity: 1, brandName: brand?.name || '' });
        product.stock -= 1;
        showToast('✅ Товар добавлен в корзину', 'success');
    } else {
        cart.splice(index, 1);
        product.stock += 1;
        showToast('🗑️ Товар удалён из корзины', 'error');
    }
    
    updateCartUI();
    
    // Обновляем текущий вид
    if (currentView === 'flavors' && currentBrandId) {
        showFlavors(currentCategoryId, currentBrandId);
    } else if (currentView === 'search') {
        renderSearchResults();
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderCart() {
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
    
    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.style.animationDelay = `${index * 0.05}s`;
        
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        div.innerHTML = `
            <div class="cart-item-image">${item.image || '📦'}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div style="font-size: 12px; color: var(--text-secondary);">${item.brandName || ''}</div>
                <div class="cart-item-price">${itemTotal} ₽</div>
            </div>
            <div class="cart-item-actions">
                <button class="decrease-btn" data-id="${item.id}">−</button>
                <span class="quantity">${item.quantity}</span>
                <button class="increase-btn" data-id="${item.id}">+</button>
                <button class="remove-btn" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItems.appendChild(div);
        
        div.querySelector('.increase-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            changeQuantity(item.id, 1);
        });
        
        div.querySelector('.decrease-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            changeQuantity(item.id, -1);
        });
        
        div.querySelector('.remove-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = cart.findIndex(c => c.id === item.id);
            if (idx !== -1) {
                // Возвращаем остаток
                const product = findProduct(item.id);
                if (product) {
                    product.stock += item.quantity;
                }
                cart.splice(idx, 1);
                updateCartUI();
                renderCart();
                refreshCurrentView();
                showToast('🗑️ Товар удалён', 'error');
            }
        });
    });
    
    cartTotalPrice.textContent = total + ' ₽';
}

function findProduct(productId) {
    for (const cat of categories) {
        if (cat.brands) {
            for (const b of cat.brands) {
                const found = b.flavors.find(f => f.id === productId);
                if (found) return found;
            }
        }
    }
    return null;
}

function changeQuantity(productId, delta) {
    const item = cart.find(c => c.id === productId);
    const product = findProduct(productId);
    
    if (!item || !product) return;
    
    if (delta > 0 && product.stock <= 0) {
        showToast('❌ Недостаточно товара на складе', 'error');
        return;
    }
    
    item.quantity += delta;
    
    if (delta > 0) {
        product.stock -= 1;
    } else {
        product.stock += 1;
    }
    
    if (item.quantity <= 0) {
        const idx = cart.findIndex(c => c.id === productId);
        cart.splice(idx, 1);
    }
    
    updateCartUI();
    renderCart();
    refreshCurrentView();
}

function refreshCurrentView() {
    if (currentView === 'catalog') {
        renderCatalog();
    } else if (currentView === 'brands') {
        showBrands(currentCategoryId);
    } else if (currentView === 'flavors' && currentBrandId) {
        showFlavors(currentCategoryId, currentBrandId);
    } else if (currentView === 'search') {
        renderSearchResults();
    }
}

// ===== НАВИГАЦИЯ =====
backBtn.addEventListener('click', function() {
    if (currentView === 'search') {
        // Возвращаемся в каталог
        renderCatalog();
        searchInput.value = '';
        currentSearch = '';
        searchClear.style.display = 'none';
    } else if (currentView === 'flavors') {
        showBrands(currentCategoryId);
    } else if (currentView === 'brands') {
        renderCatalog();
    }
});

// ===== ПОИСК =====
searchInput.addEventListener('input', function() {
    currentSearch = this.value;
    searchClear.style.display = currentSearch ? 'block' : 'none';
    
    if (currentSearch.trim()) {
        renderSearchResults();
    } else {
        // Возвращаемся к последнему виду
        if (currentView === 'search') {
            renderCatalog();
        } else {
            refreshCurrentView();
        }
    }
});

searchClear.addEventListener('click', function() {
    searchInput.value = '';
    currentSearch = '';
    this.style.display = 'none';
    renderCatalog();
});

// ===== МОДАЛКИ =====
function openCart() {
    renderCart();
    cartModal.classList.add('active');
}

function closeCart() {
    cartModal.classList.remove('active');
}

function closeOrderModal() {
    orderModal.classList.remove('active');
    cartModal.classList.add('active');
}

function closeSuccessModal() {
    successModal.classList.remove('active');
}

function openOrderModal() {
    if (cart.length === 0) {
        showToast('⚠️ Корзина пуста', 'error');
        return;
    }
    
    orderItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'order-item';
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        div.textContent = `${item.name} × ${item.quantity} = ${itemTotal} ₽`;
        orderItemsList.appendChild(div);
    });
    
    orderTotalPrice.textContent = total + ' ₽';
    
    cartModal.classList.remove('active');
    orderModal.classList.add('active');
}

function generateOrderNumber() {
    const timestamp = Date.now().toString().slice(-4);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `VB-${timestamp}${random}`;
}

function submitOrder(e) {
    e.preventDefault();
    
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const comment = document.getElementById('orderComment').value.trim();
    
    if (!name || !phone) {
        showToast('⚠️ Заполните имя и телефон', 'error');
        return;
    }
    
    const orderNumber = generateOrderNumber();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const order = {
        id: orderNumber,
        customer: { name, phone, address, comment },
        items: cart.map(item => ({
            name: item.name,
            brand: item.brandName || '',
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity
        })),
        total: total,
        status: 'Новый',
        date: new Date().toISOString()
    };
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    orderModal.classList.remove('active');
    orderNumberEl.textContent = `№ ${orderNumber}`;
    successModal.classList.add('active');
    
    cart = [];
    updateCartUI();
    refreshCurrentView();
    orderForm.reset();
    
    if (tg) {
        tg.sendData(JSON.stringify({
            type: 'order',
            order: order
        }));
    }
    
    showToast(`✅ Заказ №${orderNumber} оформлен!`, 'success');
}

// ===== КНОПКИ =====
modalOverlay.addEventListener('click', closeCart);
orderModalOverlay.addEventListener('click', closeOrderModal);
successModalOverlay.addEventListener('click', closeSuccessModal);
modalClose.addEventListener('click', closeCart);
orderModalClose.addEventListener('click', closeOrderModal);
successBtn.addEventListener('click', closeSuccessModal);
cartBtn.addEventListener('click', openCart);
checkoutBtn.addEventListener('click', openOrderModal);
orderForm.addEventListener('submit', submitOrder);

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
renderCatalog();
updateCartUI();

console.log('🛍️ VAPE BOX с брендами загружен!');
console.log(`📂 Категорий: ${categories.length - 1}`);
