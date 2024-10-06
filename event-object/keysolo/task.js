class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.timer');
    this.timerId = null;

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.setNewWord();
    // if (this.timerId) {clearInterval(this.timerId);}
  }

  
  startUpTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    };
    let q = parseInt(this.timerElement.textContent);
    // let m=q*1000;
    this.timerId = setInterval(() => {
        q=q-1;
        this.timerElement.textContent=q;
        if (q<1) {
          this.fail();
          clearInterval(this.timerId);
          this.timerId = null;
        }
    }, 1000);
    
    // setTimeout(() => {clearInterval(this.timerId);},m);
  }
  
  registerEvents() {
    let thisPrev=this;
    document.addEventListener('keyup', function(event) {
      let s=thisPrev.currentSymbol.innerHTML.toLowerCase();
       if (event.key.toLowerCase()==s) {
        thisPrev.success();
        } else {
        thisPrev.fail();
      }
    })
    
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
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
  

    if (++this.winsElement.textContent === 3) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
    
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.startUpTimer();
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

    return words[index];
  }

  renderWord(word) {
    let n = [...word].length;
    // console.log(n);
    this.timerElement.textContent = n;
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    
  }
}
new Game(document.getElementById('game'))

