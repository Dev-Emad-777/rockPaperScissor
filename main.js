function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getPlayerChoice() {
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
}

function playRound(player, computer) {
  if (
    (player === "rock" && computer === "rock") ||
    (player === "paper" && computer === "paper") ||
    (player === "scissors" && computer === "scissors")
  ) {
    console.log("Tie!");
    return;
  } else if (
    (player === "paper" && computer === "rock") ||
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper")
  ) {
    console.log(`You Win! ${player} beats ${computer}`);
    return "player";
  } else {
    console.log(`You Lose! ${computer} beats ${player}`);
    return "computer";
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerSelection = getComputerChoice();

    const round = playRound(playerChoice, computerSelection);

    if (round == "player") playerScore++;
    else if (round == "computer") computerScore++;
  }
  console.log(`*******************************`);

  if (playerScore == computerScore) {
    console.log("Tie!");
  } else if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (playerScore < computerScore) {
    console.log("You Lose! Computer Win");
  }
}

playGame();
