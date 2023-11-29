const popup = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

if (localStorage.getItem('visit') === '1') {
    popup.classList.remove('modal_active');
} else {
    document.addEventListener('DOMContentLoaded', () => {
        popup.classList.add('modal_active');
    })
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('modal_active');
        localStorage.setItem('visit', 1);
    })
    
}
// const setCookie = (name, value) => {
//     document.cookie = name + '=' + encodeURIComponent(value);
// }

// const getCookie = (name) => {
//     const pairs = document.cookie.split('; ');
//     const cookie = pairs.find(p => p.startsWith(name + '='));
//     return cookie.substr(name.length + 1);
// }

// if (document.cookie === 'visit=1') {
//     popup.classList.remove('modal_active');
// } else {
//     document.addEventListener('DOMContentLoaded', () => {
//         popup.classList.add('modal_active');
//     })
//     closeBtn.addEventListener('click', () => {
//         popup.classList.remove('modal_active');
//         document.cookie = 'visit=1';
//     })   
// }