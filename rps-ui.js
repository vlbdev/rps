const closeBtn = document.querySelector(".closeMessage");
const overlay = document.querySelector(".overlay");

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

const divHumanChoice = document.querySelector(".yourChoice");
const displayHumanChoice = document.querySelector(".displayHumanChoice img");
displayHumanChoice.style.display = "none";
const unknownHumanChoice = document.querySelector(".displayHumanChoice p");

let humanChoice = null;

divHumanChoice.addEventListener("click", (e) => {
  unknownHumanChoice.remove();
  displayHumanChoice.style.display = "block";
  displayHumanChoice.src = e.target.src;
  humanChoice = e.target.alt;
  console.log(humanChoice);
});

/*
Computer choice will assign

Both of this choices will appear on the screen
The values are comparing
If the values are equal nothing happen except the draw message appears somewhere above the choices
If the winner is then it’s total score is incrementing
The fields of the round in the results table is paint in appropriate colors
Well it’s good to show the result of each round just like for draw case
Then it’s time to compare each total score with the number five
If someone gets five victories the overlay is open to show the message game over or with the congratulations
The player then can choose the option play again and in this case all the data is resets and result table becomes an empty.*/
