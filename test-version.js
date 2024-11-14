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

let roundNumber = 1;

function checkWinner() {
  let computerChoice = getComputerChoice();

  //let playerChoice = "Paper";
  let playerChoice = prompt(
    "Make your choice: Rock, Paper or Scissors",
    "Paper"
  );

  console.log("Computer choice - " + computerChoice);
  console.log("Player choice - " + playerChoice);
  if (playerChoice === computerChoice) {
    humanScore++;
    computerScore++;
    return "Draw";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++;
    return "Player win";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
    return "Player win";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    humanScore++;
    return "Player win";
  } else {
    computerScore++;
    return "Computer win";
  }
}

function launchGame() {
  if (roundNumber <= 5) {
    console.log("=== Start of Round #" + roundNumber + " ===");

    console.log(checkWinner());

    console.log(
      "Score: Computer - " + computerScore + " : " + humanScore + " - Human"
    );
    console.log("=== End of Round #" + roundNumber + " ===");
    roundNumber++;
    launchGame();
  } else {
    if (computerScore > humanScore) {
      alert("Game over. Computer win.");
    } else if (computerScore < humanScore) {
      alert("Game over. You win.");
    } else {
      alert("Game over. Draw");
    }
  }
}

launchGame();
