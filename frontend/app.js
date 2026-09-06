// ===== ПОДКЛЮЧЕНИЕ К TELEGRAM =====
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// ===== ТОВАРЫ С ОСТАТКАМИ =====
const products = [
    // === ЖИДКОСТИ ===
    {
        id: 1,
        name: "Angry Vape Salt 50мг",
        description: "Клубничный джем с ментолом",
        price: 325,
        image: "🍓",
        category: "liquid",
        stock: 15
    },
    {
        id: 2,
        name: "Angry Vape Salt 20мг",
        description: "Черника со сливками",
        price: 325,
        image: "🫐",
        category: "liquid",
        stock: 8
    },
    {
        id: 3,
        name: "ANGRY APE ULTRA 60mg",
        description: "Ананасовая конфета",
        price: 360,
        image: "🍍",
        category: "liquid",
        stock: 12
    },
    {
        id: 4,
        name: "ANNIMA LOVE KILLER 80mg",
        description: "Ежевичный лимонад",
        price: 380,
        image: "🍇",
        category: "liquid",
        stock: 5
    },
    {
        id: 5,
        name: "BLOOD 50mg",
        description: "Вишня лайм",
        price: 230,
        image: "🍒",
        category: "liquid",
        stock: 20
    },
    {
        id: 6,
        name: "CATSWILL 20mg",
        description: "Клубника арбуз жвачка",
        price: 330,
        image: "🍉",
        category: "liquid",
        stock: 0
    },
    
    // === ОДНОРАЗКИ ===
    {
        id: 7,
        name: "ELF BAR BC30000",
        description: "30000 затяжек, аккумулятор 650 мАч",
        price: 880,
        image: "⚡",
        category: "disposable",
        stock: 7
    },
    {
        id: 8,
        name: "PUFFMI Mosh 40000",
        description: "40000 затяжек, 5% никотина",
        price: 1030,
        image: "🔥",
        category: "disposable",
        stock: 3
    },
    {
        id: 9,
        name: "LOST MARY MO 10000",
        description: "10000 затяжек, компактный дизайн",
        price: 830,
        image: "💨",
        category: "disposable",
        stock: 10
    },
    {
        id: 10,
        name: "SnoopySmoke Extra Tank 40000",
        description: "40000 затяжек, яркий дизайн",
        price: 490,
        image: "🐾",
        category: "disposable",
        stock: 0
    },
    {
        id: 11,
        name: "ELF BAR GH33000",
        description: "33000 затяжек, регулировка мощности",
        price: 940,
        image: "💎",
        category: "disposable",
        stock: 6
    },
    
    // === ПОД-СИСТЕМЫ ===
    {
        id: 12,
        name: "Vaporesso Xros 3",
        description: "1000 мАч, картриджи 0.6/0.8/1.2 Ом",
        price: 1060,
        image: "📱",
        category: "pods",
        stock: 4
    },
    {
        id: 13,
        name: "Vaporesso Xros 3 Mini",
        description: "1000 мАч, компактный размер",
        price: 1040,
        image: "📱",
        category: "pods",
        stock: 2
    },
    {
        id: 14,
        name: "GeekVape Aegis Boost 2",
        description: "Влагозащита, 1500 мАч, 5 мл",
        price: 3190,
        image: "🛡️",
        category: "pods",
        stock: 0
    },
    {
        id: 15,
        name: "GeekVape Aegis Hero 2",
        description: "Защита от ударов, 800 мАч",
        price: 2880,
        image: "💪",
        category: "pods",
        stock: 1
    },
    
    // === РАСХОДНИКИ ===
    {
        id: 16,
        name: "Картридж Vaporesso Xros 3ml 0.8ом",
        description: "Сменный картридж, 3 мл",
        price: 250,
        image: "🔄",
        category: "consumables",
        stock: 25
    },
    {
        id: 17,
        name: "Картридж GeekVape H45 4ml",
        description: "Сменный картридж, 4 мл",
        price: 350,
        image: "🔄",
        category: "consumables",
        stock: 10
    },
    {
        id: 18,
        name: "Аккумулятор Sony 18650 2600mAh",
        description: "Литий-ионный аккумулятор",
        price: 520,
        image: "🔋",
        category: "consumables",
        stock: 15
    },
    {
        id: 19,
        name: "Испаритель Smoant Pasito 2 K1 0.3ом",
        description: "50-65 Вт, отличный вкус",
        price: 210,
        image: "🌀",
        category: "consumables",
        stock: 8
    },
    
    // === ШАЙБЫ/ПЭКИ ===
    {
        id: 20,
        name: "ARQA 120mg CS DOTA",
        description: "Фанта, ананас-банан-личи",
        price: 340,
        image: "🎮",
        category: "pouches",
        stock: 30
    },
    {
        id: 21,
        name: "ICEBERG 150mg",
        description: "Сладкая мята, двойная мята",
        price: 340,
        image: "🧊",
        category: "pouches",
        stock: 20
    },
    {
        id: 22,
        name: "DRYMOST 150mg",
        description: "Яблоко, мятный бриз",
        price: 330,
        image: "🍎",
        category: "pouches",
        stock: 0
    },
    
    // === НИКОТИНОВЫЕ ВАТКИ ===
    {
        id: 23,
        name: "НИКОБУСТЕРЫ 4% (5шт)",
        description: "Никотиновые бустеры для жидкости",
        price: 380,
        image: "💊",
        category: "nicotine",
        stock: 12
    },
    {
        id: 24,
        name: "FEDRS Ice cool #9",
        description: "Малина, мята, энергетик",
        price: 490,
        image: "🧪",
        category: "nicotine",
        stock: 5
    }
];

// ===== СОСТОЯНИЕ =====
let cart = [];
let currentCategory = 'all';
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

// ===== ОТОБРАЖЕНИЕ ТОВАРОВ =====
function getFilteredProducts() {
    let filtered = products;
    
    // Фильтр по категории
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    // Фильтр по поиску
    if (currentSearch.trim()) {
        const query = currentSearch.toLowerCase().trim();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }
    
    return filtered;
}

function renderProducts() {
    const filtered = getFilteredProducts();
    
    productsContainer.innerHTML = '';
    
    if (filtered.length === 0) {
        emptyState.style.display = 'block';
        productsContainer.style.display = 'none';
        return;
    }
    
    emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    
    filtered.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        const isInCart = cart.some(item => item.id === product.id);
        const hasStock = product.stock > 0;
        
        // Индикатор наличия
        const stockText = hasStock 
            ? `<span class="stock-badge in-stock">✅ ${product.stock} шт</span>`
            : `<span class="stock-badge out-stock">❌ Нет в наличии</span>`;
        
        // Кнопка добавления
        let addButton;
        if (!hasStock) {
            addButton = `<button class="add-btn disabled" disabled>Нет в наличии</button>`;
        } else if (isInCart) {
            addButton = `<button class="add-btn added" data-id="${product.id}">✓ В корзине</button>`;
        } else {
            addButton = `<button class="add-btn" data-id="${product.id}">+ Добавить</button>`;
        }
        
        card.innerHTML = `
            <div class="product-image">
                ${product.image || '📦'}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                    ${stockText}
                </div>
                <div class="product-bottom">
                    <span class="product-price">${product.price} ₽</span>
                    ${addButton}
                </div>
            </div>
        `;
        
        // Обработчик добавления
        const addBtn = card.querySelector('.add-btn:not(.disabled)');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleCart(product.id);
            });
        }
        
        // Клик по карточке - показываем информацию
        card.addEventListener('click', () => {
            showProductInfo(product);
        });
        
        productsContainer.appendChild(card);
    });
}

// ===== ПОКАЗ ИНФОРМАЦИИ О ТОВАРЕ =====
function showProductInfo(product) {
    const isInCart = cart.some(item => item.id === product.id);
    const stockStatus = product.stock > 0 
        ? `✅ В наличии: ${product.stock} шт` 
        : '❌ Нет в наличии';
    
    const msg = `
📦 ${product.name}
${'─'.repeat(30)}
📝 ${product.description}
💰 ${product.price} ₽
📂 Категория: ${getCategoryName(product.category)}
${stockStatus}
${'─'.repeat(30)}
${isInCart ? '🛒 Товар уже в корзине' : 'Нажмите "Добавить", чтобы положить в корзину'}
    `;
    alert(msg);
}

function getCategoryName(category) {
    const names = {
        'all': 'Все',
        'liquid': 'Жидкости',
        'disposable': 'Одноразки',
        'pods': 'Под-системы',
        'consumables': 'Расходники',
        'pouches': 'Шайбы/Пэки',
        'nicotine': 'Никотиновые'
    };
    return names[category] || category;
}

// ===== КОРЗИНА =====
function toggleCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    if (index === -1) {
        // Проверяем остаток
        if (product.stock <= 0) {
            showToast('❌ Товар закончился на складе', 'error');
            return;
        }
        // Добавляем
        cart.push({ ...product, quantity: 1 });
        product.stock -= 1;
        showToast('✅ Товар добавлен в корзину', 'success');
    } else {
        // Удаляем
        cart.splice(index, 1);
        product.stock += 1;
        showToast('🗑️ Товар удалён из корзины', 'error');
    }
    
    updateCartUI();
    renderProducts();
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
        
        // Обработчики
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
                const product = products.find(p => p.id === item.id);
                if (product) {
                    product.stock += item.quantity;
                }
                cart.splice(idx, 1);
                updateCartUI();
                renderCart();
                renderProducts();
                showToast('🗑️ Товар удалён', 'error');
            }
        });
    });
    
    cartTotalPrice.textContent = total + ' ₽';
}

function changeQuantity(productId, delta) {
    const item = cart.find(c => c.id === productId);
    const product = products.find(p => p.id === productId);
    
    if (!item || !product) return;
    
    // Проверяем при увеличении
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
    renderProducts();
}

// ===== ОФОРМЛЕНИЕ ЗАКАЗА =====
function openOrderModal() {
    if (cart.length === 0) {
        showToast('⚠️ Корзина пуста', 'error');
        return;
    }
    
    // Заполняем список товаров
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

function closeOrderModal() {
    orderModal.classList.remove('active');
    cartModal.classList.add('active');
}

// ===== ГЕНЕРАЦИЯ НОМЕРА ЗАКАЗА =====
function generateOrderNumber() {
    const timestamp = Date.now().toString().slice(-4);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `VB-${timestamp}${random}`;
}

// ===== ОТПРАВКА ЗАКАЗА =====
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
    
    // Формируем заказ
    const order = {
        id: orderNumber,
        customer: { name, phone, address, comment },
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity
        })),
        total: total,
        status: 'Новый',
        date: new Date().toISOString()
    };
    
    // Сохраняем заказы в localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Показываем успех
    orderModal.classList.remove('active');
    orderNumberEl.textContent = `№ ${orderNumber}`;
    successModal.classList.add('active');
    
    // Очищаем корзину
    cart = [];
    updateCartUI();
    renderProducts();
    
    // Очищаем форму
    orderForm.reset();
    
    // Уведомление в Telegram
    if (tg) {
        tg.sendData(JSON.stringify({
            type: 'order',
            order: order
        }));
    }
    
    showToast(`✅ Заказ №${orderNumber} оформлен!`, 'success');
}

function closeSuccessModal() {
    successModal.classList.remove('active');
}

// ===== ПОИСК =====
searchInput.addEventListener('input', function() {
    currentSearch = this.value;
    searchClear.style.display = currentSearch ? 'block' : 'none';
    renderProducts();
});

searchClear.addEventListener('click', function() {
    searchInput.value = '';
    currentSearch = '';
    this.style.display = 'none';
    renderProducts();
});

// ===== КАТЕГОРИИ =====
categoriesContainer.addEventListener('click', function(e) {
    const btn = e.target.closest('.category');
    if (!btn) return;
    
    categoriesContainer.querySelectorAll('.category').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    currentCategory = btn.dataset.category;
    renderProducts();
});

// ===== МОДАЛКИ =====
function openCart() {
    renderCart();
    cartModal.classList.add('active');
}

function closeCart() {
    cartModal.classList.remove('active');
}

// Клики по оверлеям
modalOverlay.addEventListener('click', closeCart);
orderModalOverlay.addEventListener('click', closeOrderModal);
successModalOverlay.addEventListener('click', closeSuccessModal);

// Кнопки закрытия
modalClose.addEventListener('click', closeCart);
orderModalClose.addEventListener('click', closeOrderModal);

// Кнопка корзины
cartBtn.addEventListener('click', openCart);

// Кнопка оформления заказа
checkoutBtn.addEventListener('click', openOrderModal);

// Кнопка успешного заказа
successBtn.addEventListener('click', closeSuccessModal);

// Отправка формы заказа
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
renderProducts();
updateCartUI();

// Подсветка активной категории при загрузке
document.querySelector('.category[data-category="all"]')?.classList.add('active');

console.log('🛍️ VAPE BOX загружен!');
console.log(`📦 Товаров в каталоге: ${products.length}`);
console.log(`📂 Категорий: 7`);
