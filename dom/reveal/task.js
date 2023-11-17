const reveal = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener('scroll', () => {
    reveal.forEach((item) => {
        item.getBoundingClientRect().top && item.getBoundingClientRect().bottom < window.innerHeight ? item.classList.add('reveal_active') : false;
    })
})