const productsContainer = document.getElementById("products");
const cartItemsContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
let cart = [];

// Función para cargar productos desde la API usando AJAX y JSON
async function loadProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products"); // Llamada AJAX
        const products = await response.json(); // Procesar respuesta como JSON

        // Crear dinámicamente los elementos de los productos
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");

            productElement.innerHTML = `
                <h3>${product.title}</h3>
                <img src="${product.image}" alt="${product.title}" width="100">
                <p>${product.description}</p>
                <p><strong>Precio:</strong> $${product.price}</p>
                <button onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Agregar al Carrito</button>
            `;

            productsContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}

// Función para agregar un producto al carrito
function addToCart(id, title, price) {
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ id, title, price, quantity: 1 });
    }

    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");

        cartItemElement.innerHTML = `
            <p>${item.title} (x${item.quantity}) - $${item.price * item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Eliminar</button>
        `;

        cartItemsContainer.appendChild(cartItemElement);
        total += item.price * item.quantity;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Función para simular la compra
function simulatePurchase() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    document.getElementById("loader").style.display = "block";

    setTimeout(() => {
        alert("Compra realizada con éxito.");
        cart = [];
        updateCart();
        document.getElementById("loader").style.display = "none";
    }, 2000);
}

// Cargar los productos al cargar la página
loadProducts();