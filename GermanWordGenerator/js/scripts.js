const library = [
  {
    word: 'die Katze',
    article: 1
  },
  {
    word: 'der Hund',
    article: 0
  },
  {
    word: 'das Ufer',
    article: 2
  },
  {
    word: 'der Wald',
    article: 0
  },
  {
    word: 'die Wiese',
    article: 1
  },
  {
    word: 'die Pflanze',
    article: 1
  },
  {
    word: 'das Dorf',
    article: 2
  },
  {
    word: 'der Vogel',
    article: 0
  },
  {
    word: 'der Frosch',
    article: 0
  },
  {
    word: 'das Meer',
    article: 2
  },
  {
    word: 'das Strand',
    article: 2
  },
  {
    word: 'der See',
    article: 0
  },
  {
    word: 'der Fluss',
    article: 0
  },
  {
    word: 'die Landschaft',
    article: 1
  },
  {
    word: 'der Berg',
    article: 0
  },
  {
    word: 'der Hügel',
    article: 0
  }
]; //0 = Maskuline, 1 = Feminine, 2 = Neutral

const word = document.querySelector('.word');
const answer = document.querySelector('.answer');
const button = document.querySelector('#button');
const background = document.querySelector('.jumbotron');

function displayWord() {
  const randomNumber = Math.floor(Math.random() * library.length);

  switch (library[randomNumber].article) {
    case 0:
      background.classList.remove('bgGreen', 'bgRed');
      background.classList.add('bgBlue');
      break;
    case 1:
      background.classList.remove('bgGreen','bgBlue');
      background.classList.add('bgRed');
      break;
    case 2:
      background.classList.remove('bgBlue', 'bgRed');
      background.classList.add('bgGreen');
      break;

  }

  word.innerHTML = library[randomNumber].word;
}

window.addEventListener('load', displayWord);
button.addEventListener('click', displayWord);
