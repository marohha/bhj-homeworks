const reveal = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener('scroll', () => {
    reveal.forEach((item) => {
        item.getBoundingClientRect().top && item.getBoundingClientRect().bottom < window.innerHeight ? item.classList.add('reveal_active') : false;
    })
})


// const intervslId = setInterval(() => {
//     reveal.forEach((item) => {
//         const revealTop = item.getBoundingClientRect().top;
//         const revealBot = item.getBoundingClientRect().bottom;
//         if(revealTop < window.innerHeight &&  revealBot < window.innerHeight) {
//             item.classList.add('reveal_active');
//         }
//     })
// } ,1000)