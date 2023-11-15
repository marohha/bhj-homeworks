const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');


fontSize.forEach(index => {
    index.addEventListener('click', event => {
        event.preventDefault();
        let fontSizeIndex = fontSize.indexOf(event.target);
        fontSize.forEach(item => {item.classList.remove("font-size_active")});
        fontSize[fontSizeIndex].classList.add("font-size_active");
        if (fontSize[fontSizeIndex].classList.contains('font-size_small')) {
            book.classList.remove('font-size_big');
            book.classList.add('font-size_small');
        } 
        if (fontSize[fontSizeIndex].classList.contains('font-size_big')) {
            book.classList.remove('font-size_small');
            book.classList.add('font-size_big');
        }
        if (!fontSize[fontSizeIndex].classList.contains('font-size_big') && !fontSize[fontSizeIndex].classList.contains('font-size_small')) {
            book.classList.remove('font-size_small');
            book.classList.remove('font-size_big');
        }
    })
})