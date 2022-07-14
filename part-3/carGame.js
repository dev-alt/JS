let playerOneTime = 202;
let playerTwoTime = 107;

function getFastestRaceTime() {
  if (playerOneTime < playerTwoTime) {
    return playerOneTime;
  } else if (playerTwoTime < playerOneTime) {
    return playerTwoTime;
  } else {
    return playerOneTime;
  }
}
function getTotalRaceTime() {
  let total = playerOneTime + playerTwoTime;
  return total;
}
let getFastestRace = getFastestRaceTime();
let TotalRTime = getTotalRaceTime();
console.log(getFastestRace);
console.log("Total race time is: " + TotalRTime);
