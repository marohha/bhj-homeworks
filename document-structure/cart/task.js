const quantityValue = Array.from(document.querySelectorAll('.product__quantity-value'));
const plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const add = Array.from(document.querySelectorAll('.product__add'));
const product = Array.from(document.querySelectorAll('.product'));
const image = Array.from(document.querySelectorAll('.product__image'));
const bin = document.querySelector('.cart__products');

for (let i = 0; i < quantityValue.length; i++) {
    plus[i].onclick = () => {
        quantityValue[i].textContent = Number(quantityValue[i].textContent) + 1;
    }

    minus[i].onclick = () => {
        if( Number(quantityValue[i].textContent) > 0) {
            quantityValue[i].textContent = Number(quantityValue[i].textContent) - 1;
        }
    }

    add[i].onclick = () => {
        if (Number(quantityValue[i].textContent) > 0) {
            let productsInCard = Array.from(document.getElementsByClassName('cart__product'));
            let productCount = Array.from(document.getElementsByClassName('cart__product-count')); 
    
            const productInCard = productsInCard.find(el => el.getAttribute('data-id') === product[i].getAttribute('data-id'));
            let index = productsInCard.indexOf(productInCard);

            if (productInCard) {
                productCount[index].textContent = Number(productInCard.textContent) + Number(quantityValue[i].textContent);
            } else {
                bin.innerHTML +=
                    `<div class="cart__product" data-id="${product[i].getAttribute('data-id')}">
                        <img class="cart__product-image" src="${image[i].getAttribute('src')}">
                        <div class="cart__product-count">${quantityValue[i].textContent}</div>
                    </div>`;
            }
        }
    }
}

