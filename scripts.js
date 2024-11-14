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

console.log(getComputerChoice());

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
