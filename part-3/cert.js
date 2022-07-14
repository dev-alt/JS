let hasCompletedCourse = true;
let givesCertificate = false;

if (hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate();
}

function generateCertificate() {
  //   if ((hasCompletedCourse === true) & (givesCertificate === true)) {
  console.log("Generating certificate...");
  //   } else {
  //     console.log("no CERT");
  //   }
}

let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
}

function showSolution() {
  console.log("Showing solution");
}
