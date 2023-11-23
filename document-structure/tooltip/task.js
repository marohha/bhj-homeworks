const showTip = (el) => {
    let tar = el.target;
    let tarRect = tar.getBoundingClientRect(); 
    let x, y;                                  
    x = tarRect.x;      
    y = tarRect.y; 
   
    let div = document.createElement("div");
    div.className = "tooltip";               
    y = tarRect.y - div.offsetHeight + 20;
    x = tarRect.x - div.offsetHeight + 100;
    div.style.left = x + 'px';                  
    div.style.top = y + 'px';               
   
    document.body.append(div);             
         
    if (Array.from(tar.classList).includes('has-tooltip')){
        div.textContent = tar.title;          
        div.classList.add('tooltip_active');
    }
    el.preventDefault();
}

const hideTip = () => {
    let tooltip = document.querySelectorAll('.tooltip');
    for ( let i of (Array.from(tooltip))){
        if (i != null) { 
           i.classList.remove('tooltip_active');
        }   
    }  
}

document.addEventListener("click", showTip);
document.addEventListener("mouseout", hideTip);