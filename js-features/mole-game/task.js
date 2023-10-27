const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
getHole = index => document.getElementById(`hole${index}`);
const hole1 = document.getElementById("hole1");

for (i = 1; i = 10; i++) {
    // index[i].onclick
    getHole[i].onclick = () => {
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
        if (getHole(index).classList.contains("hole_has-mole")) {
            dead.textContent++;   
        } else {
            lost.textContent++;     
        }
    }
}



// for (Index = 1; Index = 10; index++) {
//     let hole = getHole(index);
//     hole.onclick = () => {
//         if (hole.classList.contains("hole_has-mole")) {
//             dead.textContent++;   
//         } else {
//             lost.textContent++;     
//         }

//         if (dead.textContent === 10) {
//             alert("Вы победили! )))");
//             dead.textContent = 0;
//             lost.textContent = 0;
//         }
//         if (lost.textContent === 5) {
//             alert("Вы проиграли (((");
//             dead.textContent = 0;
//             lost.textContent = 0;
//         }
//     }
// }