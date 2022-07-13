let firstCard = 10;
let secondCard = 10;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
// let sumEl = document.querySelector("#sum-el");

function startGame() {
  renderGame();
}

console.log(cardsEl);
console.log(sumEl);
function renderGame() {
  // cardsEl.innerText = "Cards: " + firstCard + " " + secondCard;
  cardsEl.innerText = "Cards: " + cards[0] + " " + cards[1];
  sumEl.innerText = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Congratulations you have won";
    hasBlackJack = true;
  } else {
    message = "You have lost";
    isAlive = false;
  }
  messageEl.innerText = message;
}
function newCard() {
  let newCard = 1;
  sum += newCard;
  startGame();
}
function restart() {
  sum = 0;
  cardsEl.innerText = "Cards: ";
  sumEl.innerText = "Sum: ";
  messageEl.innerText = "Want to play a round?";
}
