const closeBtn = document.querySelector(".closeMessage");
const overlay = document.querySelector(".overlay");

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
