'use strict';

// Number range between 1-20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  // when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }

    // guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
