const products = [
    { name: "Laptop", price: 800, stock: 5 },
    { name: "Mouse", price: 20, stock: 10 },
    { name: "Teclado", price: 50, stock: 8 },
    { name: "Monitor", price: 200, stock: 3 }
];

const cart = [];
const productsContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const loader = document.getElementById("loader");

function renderProducts() {
    productsContainer.innerHTML = "";
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price} (Stock: ${product.stock})</span>
            <button onclick="addToCart(${index})">Agregar</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(index) {
    const product = products[index];
    if (product.stock > 0) {
        let cartItem = cart.find(item => item.name === product.name);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ name: product.name, price: product.price, quantity: 1 });
        }
        product.stock--;
        renderProducts();
        renderCart();
    } else {
        alert("Producto agotado");
    }
}

function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <span>${item.name} - $${item.price} x ${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 1)">+</button>
            <button onclick="changeQuantity(${index}, -1)">-</button>
        `;
        cartContainer.appendChild(cartItemDiv);
    });
    if (total > 100) {
        total *= 0.9; // Aplicar 10% de descuento
    }
    totalElement.innerText = `Total: $${total.toFixed(2)}`;
}

function changeQuantity(index, change) {
    const item = cart[index];
    const product = products.find(p => p.name === item.name);
    if (change === 1 && product.stock > 0) {
        item.quantity++;
        product.stock--;
    } else if (change === -1 && item.quantity > 1) {
        item.quantity--;
        product.stock++;
    } else if (change === -1 && item.quantity === 1) {
        cart.splice(index, 1);
        product.stock++;
    }
    renderProducts();
    renderCart();
}

function simulatePurchase() {
    loader.style.display = "block";
    setTimeout(() => {
        loader.style.display = "none";
        alert("Compra confirmada! Gracias por tu compra.");
        cart.length = 0;
        renderCart();
    }, 5000);
}

renderProducts();