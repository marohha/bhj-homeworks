const rotator = Array.from(document.querySelectorAll('.rotator__case'));

let currentIndex = rotator.findIndex(item => item.classList.contains('rotator__case_active'));

const getNextIndex = () => currentIndex === rotator.length - 1 ? 0 : currentIndex + 1;

const toggleNextCase = () => {
    const currentCase = rotator[currentIndex];
    
    const nextIndex = getNextIndex();
    const nextCase = rotator[nextIndex];
    
    currentCase.classList.remove('rotator__case_active');
    nextCase.classList.add('rotator__case_active');
    nextCase.style.color = nextCase.dataset.color;
    
    currentIndex = nextIndex;
    
    scheduleCase(nextIndex);
  }
  
  const scheduleCase = index => {
    const item = rotator[index];
    
    const speed = +item.dataset.speed;
    setTimeout(toggleNextCase, speed);
  }
  
  scheduleCase(getNextIndex());


// rotator.forEach((item) => {
//     item.classList.remove('rotator__case_active');
//     if (nextElementSibling === null) {

//     }
//     item.nextElementSibling.classList.add('rotator__case_active');
// })