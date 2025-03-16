// Array de productos disponibles en la tienda
const productos = [
    { nombre: "Laptop", precio: 800, stock: 5 },
    { nombre: "Mouse", precio: 20, stock: 10 },
    { nombre: "Teclado", precio: 50, stock: 8 },
    { nombre: "Monitor", precio: 200, stock: 3 }
];

// Carrito de compras
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, cantidad) {
    const producto = productos.find(p => p.nombre === nombre);
    if (!producto) {
        console.log("Producto no encontrado.");
        return;
    }
    if (producto.stock >= cantidad) {
        carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad });
        producto.stock -= cantidad;
        console.log(`${cantidad} ${nombre}(s) agregado(s) al carrito.`);
    } else {
        console.log("Stock insuficiente.");
    }
}

// Función para calcular el total del carrito
function calcularTotal() {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

// Función para aplicar descuento si el total supera $100
function aplicarDescuento(total) {
    return total > 100 ? total * 0.9 : total;
}

// Función para procesar la compra
function procesarCompra() {
    console.log("Procesando compra...");
    setTimeout(() => {
        let total = calcularTotal();
        total = aplicarDescuento(total);
        console.log(`Compra confirmada. Total a pagar: $${total.toFixed(2)}`);
    }, 3000);
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(nombre) {
    const index = carrito.findIndex(item => item.nombre === nombre);
    if (index !== -1) {
        const item = carrito[index];
        carrito.splice(index, 1);
        const producto = productos.find(p => p.nombre === nombre);
        producto.stock += item.cantidad;
        console.log(`${nombre} eliminado del carrito.`);
    } else {
        console.log("Producto no encontrado en el carrito.");
    }
}

// Función para mostrar la cuenta regresiva antes de confirmar la compra
function cuentaRegresiva(segundos) {
    let contador = segundos;
    const intervalo = setInterval(() => {
        console.log(`Compra confirmada en ${contador}...`);
        contador--;
        if (contador < 0) {
            clearInterval(intervalo);
            procesarCompra();
        }
    }, 1000);
}
