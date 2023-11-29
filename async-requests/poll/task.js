const answers = document.getElementById('poll__answers');
const title = document.getElementById('poll__title');

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () =>{
    if (request.readyState === request.DONE){
        let data = JSON.parse(request.responseText);
        title.textContent = data.data.title;
        data.data.answers.forEach((el) => {
            answers.innerHTML +=
                `<button class="poll__answer">
                ${el}
                </button>`;
        })
        const answerBtn = Array.from(document.querySelectorAll('.poll__answer'));
        answerBtn.forEach((el) => {
            el.onclick = () => {alert('Спасибо Ваш голос учтён')};
        })
    }
})
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send();