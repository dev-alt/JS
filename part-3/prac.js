let hands = ["Rock", "Paper", "Scissors"];

function result() {
  let gameResult = Math.floor(Math.random() * 3);
  if (gameResult === 3) {
    return hands[0];
  } else if (gameResult === 2) {
    return hands[1];
  } else {
    return hands[2];
  }
}

function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

for (let i = 0; i < 5; i++) {
  console.log("Your hand is " + getHand() + " and their hand is " + result());
}
