class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = document.getElementById("timer");
    this.randomWord = "";
    this.intervalId = null;

    this.reset();
    this.timerStart();

    this.registerEvents();
    this.intervalId;
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  

  registerEvents() {
      document.addEventListener('keyup', (event) => {
      let currentSymbol = this.currentSymbol.textContent;
      if (event.key === 'Control' || event.key === 'Alt' || event.key === 'Shift') {
        return;
      }

      event.key === currentSymbol ? this.success() : this.fail();
      });
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      this.reset();
      alert('Вы проиграли!');
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    this.timerStart();
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    this.randomWord = words[index];
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  timerStart() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    };

    this.timer.textContent = this.randomWord.length;

    this.intervalId = setInterval( () => {
      if (this.timer.textContent <= 0) {
        clearInterval(intervalId);
        alert('Вы проиграли!');
      } else {
        this.timer.textContent --;
      }
    }, 1000);
  }
}

new Game(document.getElementById('game'));

