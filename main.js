const choices = document.querySelectorAll("button");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

/* function getPlayerChoice() {
  let playerChoice = prompt(
    "Choose Rock, Paper, or Scissors",
    "rock"
  ).toLowerCase();

  // * user input validation
  while (!["rock", "paper", "scissors"].includes(playerChoice)) {
    playerChoice = prompt(
      "Invalid choice. Please choose Rock, Paper, or Scissors",
      "rock"
    ).toLowerCase();
  }

  return playerChoice;
} */

function playRound(player, computer) {
  if (
    (player === "rock" && computer === "rock") ||
    (player === "paper" && computer === "paper") ||
    (player === "scissors" && computer === "scissors")
  ) {
    result.textContent = "Tie!";
    return "tie";
  } else if (
    (player === "paper" && computer === "rock") ||
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper")
  ) {
    result.textContent = `You Win! ${player} beats ${computer}`;
    return "player";
  } else {
    result.textContent = `You Lose! ${computer} beats ${player}`;
    return "computer";
  }
}

/* function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  const playerChoice = getPlayerChoice();
  const computerSelection = getComputerChoice();

  const round = playRound(playerChoice, computerSelection);

  if (round == "player") playerScore++;
  else if (round == "computer") computerScore++;

  console.log(`*******************************`);

  if (playerScore == computerScore) {
    console.log("Tie!");
  } else if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (playerScore < computerScore) {
    console.log("You Lose! Computer Win");
  }
} */

let playerScore = 0;
let computerScore = 0;

choices.forEach((choice) =>
  choice.addEventListener("click", () => {
    let round = playRound(choice.classList.value, getComputerChoice());

    if (round == "player") playerScore++;
    else if (round == "computer") computerScore++;
    score.textContent =
      "Player " + playerScore + ":" + computerScore + " Computer";

    if (playerScore == 5) {
      winner.textContent = "You Win!";
      playerScore = computerScore = 0;
    } else if (computerScore == 5) {
      winner.textContent = "Computer Win!";
      playerScore = computerScore = 0;
    }
  })
);
