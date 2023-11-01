const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));

tab.forEach(index => {
    index.addEventListener('click', event => {
        let tabIndex = tab.indexOf(event.target);
        tab.forEach(item => {item.classList.remove("tab_active")});
        tab[tabIndex].classList.add("tab_active");
        tabContent.forEach(item => {item.classList.remove("tab__content_active")});
        tabContent[tabIndex].classList.add("tab__content_active");
    })
})


