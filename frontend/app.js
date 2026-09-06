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
                series: [
                    {
                        id: 'angry-vape-50mg',
                        name: 'Angry Vape 50mg',
                        flavors: [
                            { id: 1, name: 'Варан Комод (клубничный джем)', price: 325, stock: 99, description: 'Клубничный джем с ментолом' },
                            { id: 2, name: 'Бегемот Брутто (черный виноград)', price: 325, stock: 99, description: 'Черный виноград' },
                            { id: 3, name: 'Ворон Лут (груша с ананасом)', price: 325, stock: 99, description: 'Груша с ананасом' },
                            { id: 4, name: 'Жираф Шпиль (манго)', price: 325, stock: 99, description: 'Сочное манго' },
                            { id: 5, name: 'Ёж Кутёж (синяя малина)', price: 325, stock: 99, description: 'Синяя малина' },
                            { id: 6, name: 'Геккон Пупырка (кислые конфеты)', price: 325, stock: 99, description: 'Кислые конфеты' },
                            { id: 7, name: 'Енот щипач (чизкейк с клубникой и бананом)', price: 325, stock: 99, description: 'Чизкейк с клубникой и бананом' },
                            { id: 8, name: 'Волк АУФ (вишня с лимоном)', price: 325, stock: 99, description: 'Вишня с лимоном' },
                            { id: 9, name: 'Акула гарпун (черника со сливками)', price: 325, stock: 99, description: 'Черника со сливками' },
                            { id: 10, name: 'Вомбат Батяня (виноградная газировка)', price: 325, stock: 99, description: 'Виноградная газировка' },
                            { id: 11, name: 'Гадюка мамба (персик с малиной)', price: 325, stock: 99, description: 'Персик с малиной' }
                        ]
                    },
                    {
                        id: 'angry-vape-20mg',
                        name: 'Angry Vape 20mg',
                        flavors: [
                            { id: 12, name: 'Акула гарпун (черника со сливками)', price: 325, stock: 99, description: 'Черника со сливками' },
                            { id: 13, name: 'Жираф Шпиль (манго)', price: 325, stock: 99, description: 'Сочное манго' },
                            { id: 14, name: 'Ёж Кутёж (синяя малина)', price: 325, stock: 99, description: 'Синяя малина' },
                            { id: 15, name: 'Варан Комод (клубничный джем)', price: 325, stock: 99, description: 'Клубничный джем с ментолом' }
                        ]
                    }
                ]
            },
            {
                id: 'angry-ape',
                name: 'ANGRY APE',
                icon: '🍍',
                series: [
                    {
                        id: 'angry-ape-ultra-60mg',
                        name: 'ANGRY APE ULTRA 60mg',
                        flavors: [
                            { id: 16, name: 'Ананасовая конфета', price: 360, stock: 99, description: 'Сладкая ананасовая конфета' },
                            { id: 17, name: 'Банан клубника', price: 360, stock: 99, description: 'Нежный банан с клубникой' },
                            { id: 18, name: 'Ягодный микс', price: 360, stock: 99, description: 'Микс лесных ягод' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'disposable',
        name: 'Одноразки',
        icon: '⚡',
        brands: []
    },
    {
        id: 'pods',
        name: 'Под-системы',
        icon: '📱',
        brands: []
    },
    {
        id: 'consumables',
        name: 'Расходники',
        icon: '🧰',
        brands: []
    },
    {
        id: 'pouches',
        name: 'Шайбы/Пэки',
        icon: '🎮',
        brands: []
    },
    {
        id: 'nicotine',
        name: 'Никотиновые',
        icon: '💊',
        brands: []
    }
];

// ===== СОСТОЯНИЕ =====
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

// Модалки
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

// Модалка уточнения наличия
const checkStockModal = document.getElementById('checkStockModal');
const checkStockOverlay = document.getElementById('checkStockOverlay');
const checkStockClose = document.getElementById('checkStockClose');
const checkStockForm = document.getElementById('checkStockForm');
const checkStockProductInfo = document.getElementById('checkStockProductInfo');
let currentCheckStockProduct = null;

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
function getCategory(id) {
    return categories.find(c => c.id === id);
}

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
        if (cat.id === 'all') return;
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
    productsContainer.style.display = 'grid';
    productsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

    if (!cat.brands || cat.brands.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        productsContainer.style.display = 'none';
        return;
    }

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
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'flex';

    const brand = getBrand(categoryId, brandId);
    if (pageTitle) pageTitle.textContent = brand.name;

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
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

        card.addEventListener('click', () => {
            showFlavors(categoryId, brandId, series.id);
        });

        productsContainer.appendChild(card);
    });
}

function showFlavors(categoryId, brandId, seriesId) {
    currentView = 'flavors';
    currentCategoryId = categoryId;
    currentBrandId = brandId;
    currentSeriesId = seriesId;
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'flex';

    const series = getSeries(categoryId, brandId, seriesId);
    if (pageTitle) pageTitle.textContent = series.name;

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    productsContainer.style.display = 'block';
    productsContainer.style.gridTemplateColumns = 'none';

    series.flavors.forEach((flavor, index) => {
        const item = document.createElement('div');
        item.className = 'flavor-item';
        item.style.animationDelay = `${index * 0.03}s`;

        const isInCart = cart.some(c => c.id === flavor.id);
        const hasStock = flavor.stock > 0;

        const cartItem = cart.find(c => c.id === flavor.id);
        const currentQty = cartItem ? cartItem.quantity : 0;

        const stockText = hasStock
            ? `<span class="flavor-stock in-stock">✅ ${flavor.stock} шт</span>`
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
                    <button class="add-btn remove-from-cart" data-id="${flavor.id}" title="Удалить из корзины">✕</button>
                </div>
            `;
        } else {
            addButton = `<button class="add-btn add-to-cart" data-id="${flavor.id}">+ Добавить</button>`;
        }

        item.innerHTML = `
            <div class="flavor-icon">${getBrand(categoryId, brandId)?.icon || '📦'}</div>
            <div class="flavor-info">
                <div class="flavor-name">${flavor.name}</div>
                <div class="flavor-description">${flavor.description || ''}</div>
                <div class="flavor-meta">
                    <span class="flavor-price">${flavor.price} ₽</span>
                    ${stockText}
                </div>
            </div>
            <div class="flavor-actions">
                ${addButton}
                <button class="check-stock-btn" data-id="${flavor.id}">❓</button>
            </div>
        `;

        const addBtn = item.querySelector('.add-to-cart');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, 1);
            });
        }

        const removeBtn = item.querySelector('.remove-from-cart');
        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeFromCart(flavor.id);
            });
        }

        const plusBtn = item.querySelector('.qty-plus');
        if (plusBtn) {
            plusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, 1);
            });
        }

        const minusBtn = item.querySelector('.qty-minus');
        if (minusBtn) {
            minusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, -1);
            });
        }

        const checkBtn = item.querySelector('.check-stock-btn');
        if (checkBtn) {
            checkBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openCheckStock(flavor.id);
            });
        }

        productsContainer.appendChild(item);
    });
}

function renderSearchResults() {
    currentView = 'search';
    isSearchMode = true;
    if (backBtn) backBtn.style.display = 'flex';
    if (pageTitle) pageTitle.textContent = 'Результаты поиска';

    const results = getFilteredFlavors();

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    productsContainer.style.display = 'block';
    productsContainer.style.gridTemplateColumns = 'none';

    if (results.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        productsContainer.style.display = 'none';
        return;
    }

    results.forEach((flavor, index) => {
        const item = document.createElement('div');
        item.className = 'flavor-item';
        item.style.animationDelay = `${index * 0.03}s`;

        const isInCart = cart.some(c => c.id === flavor.id);
        const hasStock = flavor.stock > 0;

        const cartItem = cart.find(c => c.id === flavor.id);
        const currentQty = cartItem ? cartItem.quantity : 0;

        const stockText = hasStock
            ? `<span class="flavor-stock in-stock">✅ ${flavor.stock} шт</span>`
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

        item.innerHTML = `
            <div class="flavor-icon">${flavor.brandIcon || '📦'}</div>
            <div class="flavor-info">
                <div class="flavor-name">${flavor.name}</div>
                <div class="flavor-description">${flavor.brandName} • ${flavor.description || ''}</div>
                <div class="flavor-meta">
                    <span class="flavor-price">${flavor.price} ₽</span>
                    ${stockText}
                </div>
            </div>
            <div class="flavor-actions">
                ${addButton}
                <button class="check-stock-btn" data-id="${flavor.id}">❓</button>
            </div>
        `;

        const addBtn = item.querySelector('.add-to-cart');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, 1);
            });
        }

        const removeBtn = item.querySelector('.remove-from-cart');
        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeFromCart(flavor.id);
            });
        }

        const plusBtn = item.querySelector('.qty-plus');
        if (plusBtn) {
            plusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, 1);
            });
        }

        const minusBtn = item.querySelector('.qty-minus');
        if (minusBtn) {
            minusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, -1);
            });
        }

        const checkBtn = item.querySelector('.check-stock-btn');
        if (checkBtn) {
            checkBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openCheckStock(flavor.id);
            });
        }

        productsContainer.appendChild(item);
    });
}

// ===== КОРЗИНА =====
function toggleCart(productId) {
    let product = null;
    for (const cat of categories) {
        if (cat.brands) {
            for (const b of cat.brands) {
                if (b.series) {
                    for (const s of b.series) {
                        const found = s.flavors.find(f => f.id === productId);
                        if (found) {
                            product = found;
                            break;
                        }
                    }
                }
                if (product) break;
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
        cart.push({ ...product, quantity: 1 });
        product.stock -= 1;
        showToast('✅ Товар добавлен в корзину', 'success');
    } else {
        cart.splice(index, 1);
        product.stock += 1;
        showToast('🗑️ Товар удалён из корзины', 'error');
    }

    updateCartUI();
    refreshCurrentView();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
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

function changeQuantity(productId, delta) {
    const item = cart.find(c => c.id === productId);
    const product = findProduct(productId);
    if (!item || !product) return;

    if (delta > 0 && product.stock <= 0) {
        showToast('❌ Недостаточно товара на складе', 'error');
        return;
    }

    item.quantity += delta;
    if (delta > 0) product.stock -= 1;
    else product.stock += 1;

    if (item.quantity <= 0) {
        const idx = cart.findIndex(c => c.id === productId);
        cart.splice(idx, 1);
    }

    updateCartUI();
    renderCart();
    refreshCurrentView();
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

// ===== КАТЕГОРИИ (ГОРИЗОНТАЛЬНЫЕ КНОПКИ) =====
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
            const cat = getCategory(categoryId);
            if (cat && cat.brands && cat.brands.length > 0) {
                showBrands(categoryId);
            } else {
                showToast('В этой категории пока нет товаров', 'error');
            }
        }
    });
}

// ===== НАВИГАЦИЯ (КНОПКА НАЗАД) =====
if (backBtn) {
    backBtn.addEventListener('click', function() {
        if (isSearchMode) {
            if (searchInput) {
                searchInput.value = '';
                currentSearch = '';
                if (searchClear) searchClear.style.display = 'none';
            }
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

        if (currentSearch.trim()) {
            renderSearchResults();
        } else {
            isSearchMode = false;
            if (currentView === 'search') {
                renderCatalog();
            } else {
                refreshCurrentView();
            }
        }
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

    cart.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        div.innerHTML = `
            <div class="cart-item-image">📦</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div style="font-size: 12px; color: var(--text-secondary);">${item.brandName || ''}</div>
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
                const product = findProduct(item.id);
                if (product) product.stock += item.quantity;
                cart.splice(idx, 1);
                updateCartUI();
                renderCart();
                refreshCurrentView();
                showToast('🗑️ Товар удалён', 'error');
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
    if (cart.length === 0) {
        showToast('⚠️ Корзина пуста', 'error');
        return;
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
    if (orderTotalPrice) orderTotalPrice.textContent = total + ' ₽';
    if (cartModal) cartModal.classList.remove('active');
    if (orderModal) orderModal.classList.add('active');
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

    if (orderModal) orderModal.classList.remove('active');
    if (orderNumberEl) orderNumberEl.textContent = `№ ${orderNumber}`;
    if (successModal) successModal.classList.add('active');

    cart = [];
    updateCartUI();
    refreshCurrentView();
    if (orderForm) orderForm.reset();

    if (tg) {
        tg.sendData(JSON.stringify({ type: 'order', order: order }));
    }

    showToast(`✅ Заказ №${orderNumber} оформлен!`, 'success');
}

// ===== УТОЧНЕНИЕ НАЛИЧИЯ =====
function openCheckStock(productId) {
    let product = null;
    let brand = null;

    for (const cat of categories) {
        if (cat.brands) {
            for (const b of cat.brands) {
                if (b.series) {
                    for (const s of b.series) {
                        const found = s.flavors.find(f => f.id === productId);
                        if (found) {
                            product = found;
                            brand = b;
                            break;
                        }
                    }
                }
                if (product) break;
            }
        }
        if (product) break;
    }

    if (!product) return;

    currentCheckStockProduct = { product, brand };

    checkStockProductInfo.innerHTML = `
        <div class="product-name">${product.name}</div>
        <div class="product-meta">${brand?.name || ''} • ${product.price} ₽</div>
        <div class="product-meta" style="color: var(--text-secondary); font-size: 13px;">
            ${product.description || ''}
        </div>
    `;

    document.getElementById('checkStockName').value = '';
    document.getElementById('checkStockContact').value = '';
    document.getElementById('checkStockPhone').value = '';
    document.getElementById('checkStockComment').value = '';

    checkStockModal.classList.add('active');
}

function closeCheckStock() {
    checkStockModal.classList.remove('active');
}

function submitCheckStock(e) {
    e.preventDefault();

    const name = document.getElementById('checkStockName').value.trim();
    const contact = document.getElementById('checkStockContact').value.trim();
    const phone = document.getElementById('checkStockPhone').value.trim();
    const comment = document.getElementById('checkStockComment').value.trim();

    if (!name) {
        showToast('⚠️ Введите ваше имя', 'error');
        return;
    }

    if (!contact && !phone) {
        showToast('⚠️ Укажите Telegram или телефон', 'error');
        return;
    }

    const product = currentCheckStockProduct?.product;
    const brand = currentCheckStockProduct?.brand;

    const requests = JSON.parse(localStorage.getItem('stockRequests') || '[]');
    const request = {
        id: `RQ-${Date.now().toString().slice(-6)}`,
        product: product?.name || 'Неизвестный товар',
        brand: brand?.name || '',
        price: product?.price || 0,
        customer: { name, contact, phone, comment },
        date: new Date().toISOString(),
        status: 'Новый'
    };
    requests.push(request);
    localStorage.setItem('stockRequests', JSON.stringify(requests));

    if (tg) {
        tg.sendData(JSON.stringify({
            type: 'stockRequest',
            request: request
        }));
    }

    closeCheckStock();
    showToast('✅ Запрос отправлен! Менеджер свяжется с вами.', 'success');

    setTimeout(() => {
        showToast('📱 Укажите Telegram в комментарии для быстрого ответа', 'success');
    }, 2000);
}

// ===== УПРАВЛЕНИЕ КОЛИЧЕСТВОМ =====

function addToCart(productId, delta = 1) {
    let product = null;
    for (const cat of categories) {
        if (cat.brands) {
            for (const b of cat.brands) {
                if (b.series) {
                    for (const s of b.series) {
                        const found = s.flavors.find(f => f.id === productId);
                        if (found) {
                            product = found;
                            break;
                        }
                    }
                }
                if (product) break;
            }
        }
        if (product) break;
    }

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
        showToast(`✅ Добавлено ${delta} шт (осталось ${product.stock})`, 'success');
    } else {
        const newQty = cart[index].quantity + delta;
        if (newQty <= 0) {
            product.stock += cart[index].quantity;
            cart.splice(index, 1);
            showToast('🗑️ Товар удалён из корзины', 'error');
        } else {
            if (delta > 0 && product.stock < delta) {
                showToast(`❌ Осталось только ${product.stock} шт`, 'error');
                return;
            }
            cart[index].quantity = newQty;
            product.stock -= delta;
            if (delta > 0) {
                showToast(`✅ Добавлено ${delta} шт (осталось ${product.stock})`, 'success');
            } else {
                showToast(`➖ Убрано ${Math.abs(delta)} шт (осталось ${product.stock})`, 'error');
            }
        }
    }

    updateCartUI();
    refreshCurrentView();
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index === -1) return;

    const product = findProduct(productId);
    if (product) {
        product.stock += cart[index].quantity;
    }
    cart.splice(index, 1);
    updateCartUI();
    refreshCurrentView();
    showToast('🗑️ Товар удалён из корзины', 'error');
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

// ===== УТОЧНЕНИЕ НАЛИЧИЯ — КНОПКИ =====
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
renderCatalog();
updateCartUI();
console.log('🛍️ VAPE BOX с категориями и поиском загружен!');
