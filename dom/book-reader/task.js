const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');
const bookContent = document.querySelector('.book__content');

const textColor = Array.from(document.querySelectorAll('.text-color'));
const bgColor = Array.from(document.querySelectorAll('.background-color'));


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


bgColor.forEach(index => {
    index.addEventListener('click', event => {
        event.preventDefault();
        let bgColorIndex = bgColor.indexOf(event.target);
        bgColor.forEach(item => {item.classList.remove("color_active")});
        bgColor[bgColorIndex].classList.add("color_active");
        if (bgColor[bgColorIndex].classList.contains('bg_color_black')) {
            bookContent.classList.remove('bg_color_white');
            bookContent.classList.remove('bg_color_gray');
            bookContent.classList.add('bg_color_black');
        } 
        if (bgColor[bgColorIndex].classList.contains('bg_color_gray')) {
            bookContent.classList.remove('bg_color_white');
            bookContent.classList.remove('bg_color_black');
            bookContent.classList.add('bg_color_gray');
        }
        if (!bgColor[bgColorIndex].classList.contains('bg_color_gray') && !bgColor[bgColorIndex].classList.contains('bg_color_black')) {
            bookContent.classList.remove('bg_color_black');
            bookContent.classList.remove('bg_color_gray');
        }
    })
})

textColor.forEach(index => {
    index.addEventListener('click', event => {
        event.preventDefault();
        let textColorIndex = textColor.indexOf(event.target);
        textColor.forEach(item => {item.classList.remove("color_active")});
        textColor[textColorIndex].classList.add("color_active");
        if (textColor[textColorIndex].classList.contains('text_color_black')) {
            bookContent.classList.remove('book_color-whitesmoke');
            bookContent.classList.remove('book_color-gray');
            bookContent.classList.add('book_color-black');
        } 
        if (textColor[textColorIndex].classList.contains('text_color_gray')) {
            bookContent.classList.remove('book_color-whitesmoke');
            bookContent.classList.remove('book_color-black');
            bookContent.classList.add('book_color-gray');
        }
        if (textColor[textColorIndex].classList.contains('text_color_whitesmoke')) {
            bookContent.classList.remove('book_color-black');
            bookContent.classList.remove('book_color-gray');
            bookContent.classList.add('book_color-whitesmoke')
        }
    })
})