const dropdown = document.querySelector(".dropdown");
const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
let dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));

dropdown.onclick = () => {
    if (dropdownList.classList.contains("dropdown__list_active")) {
        dropdownList.classList.remove("dropdown__list_active");
    } else {
        dropdownList.classList.add("dropdown__list_active");
    }
}

dropdownItem.forEach((item, index) => {
    item.onclick = () => {
    dropdownValue.textContent = dropdownItem[index].textContent;
    return false;
    }
}) 