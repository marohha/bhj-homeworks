// const btn = document.getElementById('signin__btn');
// const welcome = document.getElementById('welcome');
// const form = document.getElementById('signin__form');

// form.addEventListener('submit', (el) => {
//     el.preventDefault();
//     const xhr = new XMLHttpRequest();
    
    
    
//     xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
//     const formData = new FormData(form);
//     xhr.send(formData);
// })

// const answerJson = JSON.parse(xhr);

// answerJson.success === true ? welcome.classList.add('welcome_active') : alert('Неверный логин/пароль');


const form = document.querySelector('#signin__form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
  });
  
  xhr.open('POST', form.action);
  
  xhr.send(formData);
});