const saveText = document.getElementById('editor');
const btn = document.querySelector('.button');

saveText.value = localStorage.getItem('text'); 

document.addEventListener('keydown', () => {
    localStorage.setItem('text', saveText.value);
} )
    
btn.addEventListener('click', (el) => {
    el.preventDefault();
    localStorage.clear();
    saveText.value = '';
})



