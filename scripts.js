function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "Rock";
  } else if (randomNumber <= 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  return prompt("Make your choice: Rock, Paper or Scissors", "Paper");
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    return "Draw";
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++;
    return "You win! Rock beats Scissors";
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    return "You win! Paper beats Rock";
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore++;
    return "You win! Scissors beats Paper";
  } else {
    computerScore++;
    return "You lose!";
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
//console.log(computerSelection);
//console.log(playRound(humanSelection, computerSelection));

function playGame() {
  console.log(playRound(humanSelection, computerSelection));

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));
  if (computerScore > humanScore) {
    alert("Game over. Computer win.");
  } else if (computerScore < humanScore) {
    alert("Game over. You win.");
  } else {
    alert("Game over. Draw");
  }
}

playGame();
