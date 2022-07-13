let firstCard = 11;
let secondCard = 10;
let hasBlackJack = false;
let sum = firstCard + secondCard;
let isAlive = true;
console.log(sum);
let message = "";

if (sum <= 20) {
  message = "Do you want to draw a new card?";
} else if (sum === 21) {
  message = "Congratulations you have won";
  hasBlackJack = true;
} else {
  message = "You have lost";
  isAlive = false;
}
console.log(isAlive);
console.log(hasBlackJack);
console.log(message);
