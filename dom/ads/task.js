const rotator = Array.from(document.querySelectorAll('.rotator__case'));


const intervaId = setInterval(() => {
    // rotator.forEach((item) => {
    //     // rotator.forEach((item) => item.classList.remove('rotator__case_active'));
    //     item.classList.remove('rotator__case_active');
    //     (item+1).classList.add('rotator__case_active');
    // })

    for (let i = 0; i < rotator.length; i++) {
        rotator[i].classList.remove('rotator__case_active');
        rotator[i + 1].classList.add('rotator__case_active');
    }
}, 1000)