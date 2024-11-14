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
