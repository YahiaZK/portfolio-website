const burgerBtn = document.getElementById("burger-btn");
const navbar = document.getElementById("navbar");

burgerBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");

  burgerBtn.textContent = navbar.classList.contains("open") ? "close" : "menu";
});
