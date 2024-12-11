// Carrito de compras
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButton = document.querySelector('.add-to-cart');
const wishlistButton = document.querySelector('.wishlist');
const cartPopup = document.getElementById('cart-popup');
const cartItemsContainer = document.getElementById('cart-items');
const closeCartButton = document.getElementById('close-cart');

// Productos del carrito
let cartItems = [];

// Función para actualizar la cantidad de productos en el carrito
const updateCartCount = () => {
    cartCountElement.textContent = cartCount;
};

// Función para mostrar el carrito emergente
const showCartPopup = () => {
    cartPopup.style.display = 'flex';
};

// Función para ocultar el carrito emergente
const closeCartPopup = () => {
    cartPopup.style.display = 'none';
};

// Función para agregar un producto al carrito
const addToCart = () => {
    const product = {
        name: "Zapatillas Adidas",
        price: "$400.99",
        image: "imagen/adi2000.jpg",
        id: cartCount + 1
    };

    cartItems.push(product);
    cartCount++;
    updateCartCount();
    displayCartItems();
    showCartPopup();
};

// Función para eliminar un producto del carrito
const removeFromCart = (id) => {
    cartItems = cartItems.filter(item => item.id !== id);
    cartCount--;
    updateCartCount();
    displayCartItems();
};

// Función para mostrar los productos en el carrito
const displayCartItems = () => {
    cartItemsContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 50px; border-radius: 0.5rem;">
                <div>
                    <p>${item.name}</p>
                    <p>${item.price}</p>
                </div>
                <button onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i> 
                </button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
};

// Evento de agregar al carrito
addToCartButton.addEventListener('click', addToCart);

// Evento de cerrar el carrito
closeCartButton.addEventListener('click', closeCartPopup);

// Toggle wishlist
let isInWishlist = false;
wishlistButton.addEventListener('click', () => {
    isInWishlist = !isInWishlist;
    if (isInWishlist) {
        wishlistButton.style.background = '#6d28d9';
        wishlistButton.style.color = 'white';
    } else {
        wishlistButton.style.background = 'white';
        wishlistButton.style.color = '#6d28d9';
    }
});

// Formulario de newsletter
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    if (email) {
        alert('¡Gracias por suscribirte!');
        newsletterForm.reset();
    }
});

// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
