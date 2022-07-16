let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sort() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "apple") {
      appleShelf.textContent += "🍎";
    } else if (fruit[i] === "orange");
    {
      orangeShelf.textContent += "🍊";
    }
  }
}
