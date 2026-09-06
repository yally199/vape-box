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
                    { id: 1, name: 'Клубничный джем 50мг', price: 325, stock: 15, description: 'Сладкий клубничный джем с ментолом' },
                    { id: 2, name: 'Черника со сливками 20мг', price: 325, stock: 8, description: 'Нежная черника со сливочными нотками' }
                ]
            },
            {
                id: 'angry-ape',
                name: 'ANGRY APE',
                icon: '🍍',
                flavors: [
                    { id: 3, name: 'Ананасовая конфета 60mg', price: 360, stock: 12, description: 'Сладкая ананасовая конфета' }
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
                    { id: 4, name: 'BC30000', price: 880, stock: 7, description: '30000 затяжек' }
                ]
            }
        ]
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
let currentView = 'catalog'; // catalog, brands, flavors, search
let currentCategoryId = 'all';
let currentBrandId = null;
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
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'none';
    if (pageTitle) pageTitle.textContent = 'Магазин вейп-товаров';
    
    // Подсвечиваем кнопку "Все"
    document.querySelectorAll('.category').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
    });
    
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    
    categories.forEach((cat, index) => {
        if (cat.id === 'all') return;
        
        const card = document.createElement('div');
        card.className = 'product-card brand-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        let count = 0;
        if (cat.brands) {
            cat.brands.forEach(b => { count += b.flavors.length; });
        }
        
        card.innerHTML = `
            <div class="product-image" style="font-size: 48px;">
                ${cat.icon || '📁'}
            </div>
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
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'flex';
    
    const cat = getCategory(categoryId);
    if (pageTitle) pageTitle.textContent = cat.name;
    
    // Подсвечиваем выбранную категорию
    document.querySelectorAll('.category').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === categoryId);
    });
    
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    
    if (!cat.brands || cat.brands.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
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
                    <span style="color: var(--text-secondary); font-size: 14px;">→ Выбрать</span>
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
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'flex';
    
    const brand = getBrand(categoryId, brandId);
    if (pageTitle) pageTitle.textContent = brand.name;
    
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
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
        
        productsContainer.appendChild(card);
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
    productsContainer.style.display = 'grid';
    
    if (results.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
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
    } else if (currentView === 'flavors' && currentBrandId) {
        showFlavors(currentCategoryId, currentBrandId);
    }
}

// ===== КАТЕГОРИИ (ГОРИЗОНТАЛЬНЫЕ КНОПКИ) =====
if (categoriesContainer) {
    categoriesContainer.addEventListener('click', function(e) {
        const btn = e.target.closest('.category');
        if (!btn) return;
        
        const categoryId = btn.dataset.category;
        
        // Обновляем активный класс
        document.querySelectorAll('.category').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        if (categoryId === 'all') {
            // Очищаем поиск
            if (searchInput) {
                searchInput.value = '';
                currentSearch = '';
                if (searchClear) searchClear.style.display = 'none';
            }
            renderCatalog();
        } else {
            // Показываем бренды выбранной категории
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
            // Выходим из поиска
            if (searchInput) {
                searchInput.value = '';
                currentSearch = '';
                if (searchClear) searchClear.style.display = 'none';
            }
            isSearchMode = false;
            renderCatalog();
        } else if (currentView === 'flavors') {
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
            // Возвращаемся к предыдущему виду
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
const checkStockModal = document.getElementById('checkStockModal');
const checkStockOverlay = document.getElementById('checkStockOverlay');
const checkStockClose = document.getElementById('checkStockClose');
const checkStockForm = document.getElementById('checkStockForm');
const checkStockProductInfo = document.getElementById('checkStockProductInfo');

let currentCheckStockProduct = null;

// Открыть модалку уточнения
function openCheckStock(productId) {
    // Находим товар
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
    
    currentCheckStockProduct = { product, brand };
    
    // Заполняем информацию о товаре
    checkStockProductInfo.innerHTML = `
        <div class="product-name">${product.name}</div>
        <div class="product-meta">${brand?.name || ''} • ${product.price} ₽</div>
        <div class="product-meta" style="color: var(--text-secondary); font-size: 13px;">
            ${product.description || ''}
        </div>
    `;
    
    // Очищаем форму
    document.getElementById('checkStockName').value = '';
    document.getElementById('checkStockContact').value = '';
    document.getElementById('checkStockPhone').value = '';
    document.getElementById('checkStockComment').value = '';
    
    checkStockModal.classList.add('active');
}

// Закрыть модалку
function closeCheckStock() {
    checkStockModal.classList.remove('active');
}

// Отправка запроса
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
    
    // Сохраняем запрос в localStorage
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
    
    // Отправка в Telegram (есть бот)
    if (tg) {
        tg.sendData(JSON.stringify({
            type: 'stockRequest',
            request: request
        }));
    }
    
    // Закрываем модалку
    closeCheckStock();
    
    // Показываем уведомление
    showToast('✅ Запрос отправлен! Менеджер свяжется с вами.', 'success');
    
    // Показываем дополнительное сообщение
    setTimeout(() => {
        showToast('📱 Укажите Telegram в комментарии для быстрого ответа', 'success');
    }, 2000);
}

// Кнопки
if (checkStockOverlay) checkStockOverlay.addEventListener('click', closeCheckStock);
if (checkStockClose) checkStockClose.addEventListener('click', closeCheckStock);
if (checkStockForm) checkStockForm.addEventListener('submit', submitCheckStock);

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
