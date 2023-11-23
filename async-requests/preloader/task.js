const xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');
const items = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        const dataValue = JSON.parse(xhr.responseText);
        Object.keys(dataValue.response.Valute).forEach((key) => {
            items.innerHTML +=
            `<div class="item">
            <div class="item__code">
                ${dataValue.response.Valute[key].CharCode}
            </div>
            <div class="item__value">
                ${dataValue.response.Valute[key].Value}
            </div>
            <div class="item__currency">
               руб.
            </div>
            </div>`
        })
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();