const quantityValue = Array.from(document.querySelectorAll('.product__quantity-value'));
const plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const add = Array.from(document.querySelectorAll('.product__add'));
const product = Array.from(document.querySelectorAll('.product'));
const image = Array.from(document.querySelectorAll('.product__image'));
const bin = document.querySelector('.cart__products');
let products = [];

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
        const productInCard = products.find(el => el.getAttribute('data-id') === product[i].getAttribute('data-id'));
        console.log(productInCard)
        if (Number(quantityValue[i].textContent) > 0) {
            if (productInCard) {
                productInCard.textContent = Number(productInCard.textContent) + Number(quantityValue[i].textContent);
            } else {
                bin.innerHTML +=
                    `<div class="cart__product" data-id="${product[i].getAttribute('data-id')}">
                        <img class="cart__product-image" src="${image[i].getAttribute('src')}">
                        <div class="cart__product-count">${quantityValue[i].textContent}</div>
                    </div>`;
            }
            
            products.push(product[i]);
            console.log(products);
        }

       
    }
}

