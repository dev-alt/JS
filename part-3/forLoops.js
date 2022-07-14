let sentence = ["Hello", "my", "name", "is", "Andrew"];
let greetingEl = document.getElementById("greeting-el");

console.log(sentence);

for (let i = 0; i < sentence.length; i++) {
  greetingEl.innerText += sentence[i] + " ";
}
