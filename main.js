const choices = document.querySelectorAll("button");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");

const round = document.querySelector(".count");
const stars = document.querySelector(".stars");

function winRestart() {
  // Create a new div
  const div = document.createElement("div");

  // Add the class and styles to the div
  div.style.position = "fixed";
  div.style.top = "50%";
  div.style.left = "50%";
  div.style.transform = "translate(-50%, -50%)";
  div.style.width = "100vw";
  div.style.fontSize = "5em"; // Increase the font size
  div.style.textAlign = "center";

  // Add the text to the div
  div.textContent = "You Win";

  // Remove all existing children from the body
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

  // Append the div to the body
  document.body.appendChild(div);
}

function loseRestart() {
  // Create a new div
  const div = document.createElement("div");

  // Add the class and styles to the div
  div.style.position = "fixed";
  div.style.top = "50%";
  div.style.left = "50%";
  div.style.transform = "translate(-50%, -50%)";
  div.style.width = "100vw";
  div.style.fontSize = "5em"; // Increase the font size
  div.style.textAlign = "center";

  // Add the text to the div
  div.textContent = "You Lose";

  // Remove all existing children from the body
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

  // Append the div to the body
  document.body.appendChild(div);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

let roundCount = 1;

function playRound(player, computer) {
  if (
    (player === "rock" && computer === "rock") ||
    (player === "paper" && computer === "paper") ||
    (player === "scissors" && computer === "scissors")
  ) {
    roundCount++;
    round.textContent = roundCount;
    stars.innerHTML +=
      '<div class="star"><img src="images/star.svg" alt="computer-score" width="100px"></div>';
    result.textContent = "Tie!";
    return "tie";
  } else if (
    (player === "paper" && computer === "rock") ||
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper")
  ) {
    roundCount++;
    round.textContent = roundCount;
    stars.innerHTML +=
      '<div class="star"><img src="images/star.svg" alt="computer-score" width="100px"></div>';
    result.textContent = `You Win! ${player} beats ${computer}`;
    return "player";
  } else {
    roundCount++;
    round.textContent = roundCount;
    stars.innerHTML +=
      '<div class="star"><img src="images/star.svg" alt="computer-score" width="100px"></div>';
    result.textContent = `You Lose! ${computer} beats ${player}`;
    return "computer";
  }
}

choices.forEach((choice) =>
  choice.addEventListener("click", () => {
    let round = playRound(choice.classList.value, getComputerChoice());

    if (round == "player") playerScore++;
    else if (round == "computer") computerScore++;
    score.textContent =
      "Player " + playerScore + ":" + computerScore + " Computer";

    if (playerScore == 3) {
      winner.textContent = "You Win!";
      playerScore = computerScore = 0;
      winRestart();
      setTimeout(function () {
        location.reload();
      }, 5000);
    } else if (computerScore == 3) {
      winner.textContent = "Computer Win!";
      playerScore = computerScore = 0;
      loseRestart();
      setTimeout(function () {
        location.reload();
      }, 5000);
    }
  })
);
