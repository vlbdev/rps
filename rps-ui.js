const closeBtn = document.querySelector(".closeMessage");
const overlay = document.querySelector(".overlay");

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

const divHumanChoice = document.querySelector(".yourChoice");
const displayHumanChoice = document.querySelector(".displayHumanChoice img");
const displayComputerChoice = document.querySelector(
  ".displayComputerChoice img"
);
displayHumanChoice.style.display = "none";
displayComputerChoice.style.display = "none";
const unknownHumanChoice = document.querySelector(".displayHumanChoice p");
const unknownComputerChoice = document.querySelector(
  ".displayComputerChoice p"
);

let humanChoice = null;
let computerChoice = null;

function setComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    computerChoice = "rock";
  } else if (randomNumber <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  unknownComputerChoice.remove();
  displayComputerChoice.style.display = "block";
  displayComputerChoice.src = computerChoice + ".png";
}

divHumanChoice.addEventListener("click", (e) => {
  unknownHumanChoice.remove();
  displayHumanChoice.style.display = "block";
  displayHumanChoice.src = e.target.src;
  humanChoice = e.target.alt;
  setComputerChoice();
  compareChoices(computerChoice, humanChoice);
});

function compareChoices(comp, human) {
  if (human === comp) {
    console.log("Draw");
  } else if (human === "rock" && comp === "scissors") {
    console.log("You win");
  } else if (human === "paper" && comp === "rock") {
    console.log("You win");
  } else if (human === "scissors" && comp === "paper") {
    console.log("You win");
  } else {
    console.log("Computer win");
  }
}

/*
==>>The values are comparing

If the values are equal nothing happen except the draw message appears somewhere above the choices
If the winner is then it’s total score is incrementing
The fields of the round in the results table is paint in appropriate colors
Well it’s good to show the result of each round just like for draw case
Then it’s time to compare each total score with the number five
If someone gets five victories the overlay is open to show the message game over or with the congratulations
The player then can choose the option play again and in this case all the data is resets and result table becomes an empty.*/
