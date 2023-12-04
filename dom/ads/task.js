const rotator = Array.from(document.querySelectorAll('.rotator__case'));
const ppevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let currentIndex = rotator.findIndex(item => item.classList.contains('rotator__case_active'));

const getNextIndex = () => currentIndex === rotator.length - 1 ? 0 : currentIndex + 1;
const getPrevIndex = () => currentIndex === 0 ? rotator.length - 1 : currentIndex - 1;

const toggleNextCase = () => {
  const currentCase = rotator[currentIndex];
    
  const nextIndex = getNextIndex();
  const nextCase = rotator[nextIndex];
    
  currentCase.classList.remove('rotator__case_active');
  nextCase.classList.add('rotator__case_active');
  // nextCase.style.color = nextCase.dataset.color;
    
  currentIndex = nextIndex;
  
  // scheduleCase(nextIndex);
}

const togglePrevCase = () => {
  const currentCase = rotator[currentIndex];
    
  const prevIndex = getPrevIndex();
  const prevCase = rotator[prevIndex];

  currentCase.classList.remove('rotator__case_active');
  prevCase.classList.add('rotator__case_active');
  // nextCase.style.color = nextCase.dataset.color;

  currentIndex = prevIndex;

  // scheduleCase(prevIndex)
}

// setTimeout(toggleNextCase, 1000);
  
// const scheduleCase = index => {
//   const item = rotator[index];
    
//   // const speed = +item.dataset.speed;
//   setTimeout(toggleNextCase, 2000);
// }
  
// scheduleCase(getNextIndex());


ppevBtn.addEventListener('click', e => {
  e.preventDefault();
  toggleNextCase();
})

nextBtn.addEventListener('click', e => {
  e.preventDefault();
  togglePrevCase();
})