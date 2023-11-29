const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
let div = document.createElement('div');
div.className = 'tooltip';
document.body.append(div);

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener('click', (el) => {
        el.preventDefault();
        if (div.textContent === hasTooltip[i].title && div.classList.contains('tooltip_active')) {
            div.classList.remove('tooltip_active'); 
        } else {
            let tip = el.target;
            let tipRect = tip.getBoundingClientRect();
            let x = tipRect.x;
            let y = tipRect.y;
            y = tipRect.y - div.offsetHeight + 50;
            x = tipRect.x - div.offsetHeight + 30;
            div.style.left = x + 'px';                  
            div.style.top = y + 'px';
            div.textContent = hasTooltip[i].title;
            div.classList.add('tooltip_active'); 
        }    
    })
}
