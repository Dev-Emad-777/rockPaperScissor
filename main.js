function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  const playerChoice = prompt("chose Rock, Paper or Scissors", "rock");
  return playerChoice.toLowerCase();
}

function playRound(player, computer) {
  if (
    (player == "rock" && computer == "rock") ||
    (player == "paper" && computer == "paper") ||
    (player == "scissors" && computer == "scissors")
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
