const form = document.querySelector('#signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const userId = document.getElementById('user_id');
const singoutBtn = document.getElementById('signout__btn');

const ifAuth = localStorage.getItem('userId');
if (ifAuth) { 
  signin.classList.remove('signin_active');
  userId.textContent = localStorage.getItem('userId');
  welcome.classList.add('welcome_active');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    if (xhr.response.success === true) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.textContent = xhr.response.user_id;
        localStorage.setItem('userId', userId.textContent);
        form.reset();
    } else {
        alert('Неверный логин/пароль');
    }
  });
  
  xhr.open('POST', form.action);
  xhr.send(formData);
});

singoutBtn.addEventListener('click', e => {
  e.preventDefault();
  localStorage.clear();
  signin.classList.add('signin_active');
  welcome.classList.remove('welcome_active');
})