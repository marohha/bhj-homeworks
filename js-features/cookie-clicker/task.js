const clickCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
const average = document.getElementById("clicker__average");
let lastClick = new Date().getTime();

image.onclick = function() {
    clickCounter.textContent++;

    if (image.width === 200) {
        image.width = 300;
    } else {
        image.width = 200;
    }

    average.textContent = ((clickCounter.textContent / (new Date().getTime() - lastClick))*1000).toFixed(2);
}






