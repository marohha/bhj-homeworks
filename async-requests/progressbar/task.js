const progress = document.getElementById( 'progress' )
const form = document.getElementById('form')
form.addEventListener('submit', (el) => {
    el.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = (el) => {
        progress.setAttribute('max', el.total)
        progress.value = el.loaded;
    }
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form)
    xhr.send(formData);
})