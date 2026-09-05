const products = [
    {
        id: 1,
        name: "Товар 1",
        price: 500,
        image: "https://placehold.co/600x600"
    },
    {
        id: 2,
        name: "Товар 2",
        price: 900,
        image: "https://placehold.co/600x600"
    },
    {
        id: 3,
        name: "Товар 3",
        price: 1200,
        image: "https://placehold.co/600x600"
    },
    {
        id: 4,
        name: "Товар 4",
        price: 750,
        image: "https://placehold.co/600x600"
    }
];

let cart = [];

const productsContainer = document.querySelector(".products");

function showProducts() {
    productsContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price} ₽</div>
            <button class="add-button" onclick="addToCart(${product.id})">
                Добавить
            </button>
        `;

        productsContainer.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    cart.push(product);

    updateCart();

    alert("Товар добавлен в корзину");
}

function updateCart() {
    console.log("Товаров в корзине:", cart.length);
}

showProducts();
