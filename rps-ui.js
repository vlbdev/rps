const closeBtn = document.querySelector(".closeMessage");
const overlay = document.querySelector(".overlay");

overlay.style.display = "none";

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

let totalHumanScore = 0;
let totalComputerScore = 0;

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
const overlayMessage = document.querySelector(".message h2");
divHumanChoice.addEventListener("click", (e) => {
  unknownHumanChoice.remove();
  displayHumanChoice.style.display = "block";
  displayHumanChoice.src = e.target.src;
  humanChoice = e.target.alt;
  setComputerChoice();
  compareChoices(computerChoice, humanChoice);
  if (totalHumanScore >= 5) {
    overlay.style.display = "flex";
    overlayMessage.textContent = "You won the game";
  } else if (totalComputerScore >= 5) {
    overlay.style.display = "flex";
  }
});

const roundWinner = document.querySelector(".roundWinner");

function compareChoices(comp, human) {
  if (human === comp) {
    roundWinner.textContent = "Draw";
  } else if (human === "rock" && comp === "scissors") {
    painHumanResult(totalHumanScore + 2);
    totalHumanScore++;
    roundWinner.textContent =
      "You win the round #" + (totalHumanScore + totalComputerScore);
  } else if (human === "paper" && comp === "rock") {
    painHumanResult(totalHumanScore + 2);
    totalHumanScore++;
    roundWinner.textContent =
      "You win the round #" + (totalHumanScore + totalComputerScore);
  } else if (human === "scissors" && comp === "paper") {
    painHumanResult(totalHumanScore + 2);
    totalHumanScore++;
    roundWinner.textContent =
      "You win the round #" + (totalHumanScore + totalComputerScore);
  } else {
    painCompResult(totalComputerScore + 2);
    totalComputerScore++;
    roundWinner.textContent =
      "Computer win the round #" + (totalHumanScore + totalComputerScore);
  }
}

function painHumanResult(resultNum) {
  const humanCell = document.querySelector(
    `.yourResult > div:nth-child(${resultNum})`
  );
  humanCell.style.backgroundColor = "green";
}

function painCompResult(resultNum) {
  const compCell = document.querySelector(
    `.computerResult > div:nth-child(${resultNum})`
  );
  compCell.style.backgroundColor = "red";
}

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  totalHumanScore = 0;
  totalComputerScore = 0;
  document.querySelectorAll(".grid div").forEach((item) => {
    item.style.backgroundColor = "white";
  });
  roundWinner.textContent = "Who will win the round?";
});

/*
The player then can choose the option play again and in this case all the data is resets and result table becomes an empty.*/
