'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const CurrentSc0 = document.querySelector('#current--0');
const CurrentSc1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currScore = 0;
let sumScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceRandom = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRandom}.png`;
    if (diceRandom !== 1) {
      currScore += diceRandom;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currScore;
    } else {
      //scores[activePlayer] += currScore;
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.remove('player--active');
      //document.getElementById(`score--${activePlayer}`).textContent =
      //   scores[activePlayer];
      currScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.add('player--active');
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      // scores[activePlayer] = 100;
      document.querySelector('.player--active').classList.add('player--winner');
      //  btnHold.removeEventListener('click');
      dice.classList.add('hidden');
      playing = false;
    } else {
      //   document
      //     .querySelector(`.player--${activePlayer}`)
      //     .classList.remove('player--active');
      currScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      //   document
      //     .querySelector(`.player--${activePlayer}`)
      //     .classList.add('player--active');
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  location.reload();
});
