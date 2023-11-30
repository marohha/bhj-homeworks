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


// Ниже - это решение мое через cookie.

const setCookie = (name, value) => {
    document.cookie = name + '=' + encodeURIComponent(value);
}

const getCookie = (name) => {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length + 1);
}   

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