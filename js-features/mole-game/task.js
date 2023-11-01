const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const hole = Array.from(document.querySelectorAll(".hole"));

hole.forEach(item => {
    item.onclick = () => {
        if (dead.textContent === "10") {
            alert("Вы победили! )))");
            dead.textContent = 0;
            lost.textContent = 0;
        }
        if (lost.textContent === "5") {
            alert("Вы проиграли (((");
            dead.textContent = 0;
            lost.textContent = 0;
        } 

        item.classList.contains("hole_has-mole") ? dead.textContent++ : lost.textContent++
    }
})