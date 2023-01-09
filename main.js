let randNum = +(Math.random() * 100).toFixed(0);
let guesses = 0;
const lower = "The number is lower than your guess";
const higher = "The number is higher than your guess";
let info = document.getElementById("info");

document.getElementById("submit").addEventListener("click", numGuessed);
document.getElementById("restart").addEventListener("click", restart);

function numGuessed() {
  let guess = +document.getElementById("guess").value;
  if (guess === randNum) {
    document.getElementById("output").innerHTML = "YOU WIN";
    guesses++;
    setTimeout(restart, 2000);
  } else if (guess > randNum) {
    document.getElementById("output").innerHTML =
      "The number is lower than your guess";
    document.getElementById("info").innerHTML += `<li>${lower}</li>`;
    guesses++;
    setTimeout(clearOutput, 2000);
  } else {
    document.getElementById("output").innerHTML =
      "The number is higher than your guess";
    document.getElementById("info").innerHTML += `<li>${higher}</li>`;
    guesses++;
    setTimeout(clearOutput, 2000);
  }

  if (guesses === 7 && guess !== randNum) {
    setTimeout(lost, 2500);
  }
  document.getElementById("amount").innerHTML = guesses;
}

function clearOutput() {
  document.getElementById("output").innerHTML = "";
}

function restart() {
  randNum = +(Math.random() * 100).toFixed(0);
  guesses = 0;
  document.getElementById("output").innerHTML = "";
  document.getElementById("guess").value = "";
  document.getElementById("amount").innerHTML = "";
  while (info.hasChildNodes()) {
    info.removeChild(info.firstChild);
  }
}

function lost() {
  document.getElementById("output").innerHTML = `The number was ${randNum}`;
  setTimeout(restart, 3000);
}
