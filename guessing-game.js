let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let guessInput = document.getElementById("guess");
let bestRounds = [];

guessInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    guess();
  }
});

function guess() {
  let guess = Number(guessInput.value);
  if (guess >= 1 && guess <= 100) {
    guessCount++;
    if (guess == randomNumber) {
      document.getElementById("result").innerHTML = "Congratulations! You guessed the number in " + guessCount + " tries.";
      document.getElementById("result").style.color = "#4CAF50";
      guessInput.disabled = true;
      document.getElementById("submit").disabled = true;
      bestRounds.push(guessCount);
    } else if (guess < randomNumber) {
      document.getElementById("result").innerHTML = "Too low. Guess higher.";
      document.getElementById("result").style.color = "#f44336";
    } else {
      document.getElementById("result").innerHTML = "Too high. Guess lower.";
      document.getElementById("result").style.color = "#f44336";
    }
  } else {
    alert("Please enter a number between 1 and 100.");
  }
  guessInput.value = "";
  guessInput.focus();
}

function viewBestRounds() {
  bestRounds.sort(function(a, b) {
    return a - b;
  });

  let bestRoundsString = "";
  if (bestRounds.length === 0) {
    bestRoundsString = "You haven't won any rounds yet.";
  } else {
    for (let i = 0; i < bestRounds.length; i++) {
      bestRoundsString += "Round " + (i + 1) + ": " + bestRounds[i] + " guesses<br>";
    }
  }

  sessionStorage.setItem("bestRounds", bestRoundsString);
  location.href = "best-rounds.html";
}

function startOver() {
  location.reload();
}
