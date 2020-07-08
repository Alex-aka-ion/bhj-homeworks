const incButtons = document.getElementsByClassName('product__quantity-control_inc');
const decButtons = document.getElementsByClassName('product__quantity-control_dec');
const addToCartButtons = document.getElementsByClassName('product__add');
const cartProducts = document.getElementsByClassName('cart__products')[0];
const alreadyInCart = document.getElementsByClassName('cart__product');

Array.from(incButtons).forEach((incButton) => {
    incButton.addEventListener('click', (e) => {
        e.preventDefault();

        const quantity = incButton.closest('.product__quantity-controls').getElementsByClassName('product__quantity-value')[0];
        quantity.textContent = Number(quantity.textContent) + 1;
    })
})

Array.from(decButtons).forEach((decButton) => {
    decButton.addEventListener('click', (e) => {
        e.preventDefault();

        const quantity = decButton.closest('.product__quantity-controls').getElementsByClassName('product__quantity-value')[0];

        if (Number(quantity.textContent) !== 1) {
            quantity.textContent = Number(quantity.textContent) - 1;
        }
    })
})

Array.from(addToCartButtons).forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', (e) => {
        e.preventDefault();

        const product = addToCartButton.closest('.product');
        const id = product.dataset.id;
        const image = product.getElementsByClassName('product__image')[0].src;
        const quantity = Number(product.getElementsByClassName('product__quantity-value')[0].textContent);

        const index = Array.from(alreadyInCart).findIndex((item) => item.dataset.id === id);

        if ( index !== -1 ) {
            const foundQuantity = alreadyInCart[index].getElementsByClassName('cart__product-count')[0];
            foundQuantity.textContent = Number(foundQuantity.textContent) + quantity;
        } else {
            cartProducts.insertAdjacentHTML('beforeend',`
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${image}">
                    <div class="cart__product-count">${quantity}</div>
                </div>
            `);
        }
    })
})
