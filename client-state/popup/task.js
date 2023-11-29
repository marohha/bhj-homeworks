const popup = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

// if (localStorage.getItem('visit') === '1') {
//     popup.classList.remove('modal_active');
// } else {
//     document.addEventListener('DOMContentLoaded', () => {
//         popup.classList.add('modal_active');
//     })
//     closeBtn.addEventListener('click', () => {
//         popup.classList.remove('modal_active');
//         localStorage.setItem('visit', 1);
//     })
    
// } 
// Выше - это решение через сохранение в localStorage. Оно работает. 


// Ниже - это решение мое через cookie. Не могу понять что делаю не так. 
// Не записываются и не выводит даже в консоль куки, выводит пустую строку.

const setCookie = (name, value) => {
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

const getCookie = (name) => {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substr(name.length + 1);
}   

// setCookie('visit', '1');
// даже если просто установить куки и получить не выходит. 

// console.log(getCookie('visit')); 
// при таком выводе пишет ошибку, TypeError: Cannot read properties of undefined (reading 'substr')

if (document.cookie === 'visit=1') {
    popup.classList.remove('modal_active');
} else {
    document.addEventListener('DOMContentLoaded', () => {
        popup.classList.add('modal_active');
    })
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('modal_active');
        document.cookie = 'visit=1';
        console.log(document.cookie);
    })   
}