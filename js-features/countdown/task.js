const container = document.querySelector("#timer");

const second = 1;
const minute = 60 * second;
const hour = 60 * minute;

const parseTimer = value => {
    const data = value.split(":");

    return data[0] * hour + data[1] * minute + data[2] * second;
};

const getTime = seconds => {
    const s = seconds % minute;
    const m = ((seconds - s) % hour) / 60; 
    const h = (seconds - s - m * minute) / hour;

    const ss = String(s).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    const hh = String(h).padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
};

const displayTimer = seconds => {
    const time = getTime(seconds);

    container.textContent = time;
};

let time = parseTimer(container.textContent);

function next() {
    displayTimer(time);
    const intervalId = setTimeout(next, 1000);

    if (!time--) {
        alert("You are WIN!");
        clearInterval(intervalId);
    }
}

next();



// const time = function() {
//     const timer = document.getElementById("timer")
//     if (timer.textContent <= 0) {
//         // window.location = "https://sun9-41.userapi.com/impg/Vyvy54AXrCTO2rUFQapgeG-5N9V-NyR4XVG4Yw/Yz1rLg_ef4c.jpg?size=807x583&quality=96&sign=3640bd4c3395196a1616cbea99ad1323&c_uniq_tag=x7mZ90BpzAwBQWKoSM2ECcukfoFg9GRo1oE1hKOy_Os&type=album";
        
//         clearInterval(intervalId);
//     } else {
//         timer.textContent --;
//     }
// };

// const intervalId = setInterval(time, 1000)

