const dropdown = document.querySelectorAll(".dropdown-links");
const menuIcon = document.querySelector(".menu");
const navList = document.querySelector(".navlinks");
const closeBtn = document.querySelector(".close-menu");
const classEl = navList.classList;
const overlay = document.querySelector(".overlay");

dropdown.forEach(function (btns) {
  btns.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("show-dropdown");
  });
});

menuIcon.addEventListener("click", () => {
  classEl.add("show-nav");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  classEl.remove("show-nav");
  overlay.classList.remove("show");
});
