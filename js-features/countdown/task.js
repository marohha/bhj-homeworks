
const time = function() {
    const timer = document.getElementById("timer")
    if (timer.textContent <= 0) {
        window.location = "https://sun9-41.userapi.com/impg/Vyvy54AXrCTO2rUFQapgeG-5N9V-NyR4XVG4Yw/Yz1rLg_ef4c.jpg?size=807x583&quality=96&sign=3640bd4c3395196a1616cbea99ad1323&c_uniq_tag=x7mZ90BpzAwBQWKoSM2ECcukfoFg9GRo1oE1hKOy_Os&type=album";
        clearInterval(timer);
    } else {
        timer.textContent --;
    }
}

setInterval(time, 1000)