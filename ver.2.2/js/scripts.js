const word = document.querySelector('.word');
const description = document.querySelector('.description');
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
  description.innerHTML = library[randomNumber].translation;
}

window.addEventListener('load', displayWord);
button.addEventListener('click', displayWord);
