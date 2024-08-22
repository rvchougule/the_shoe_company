const hamburgerIcon = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".md-nav");
const cross = document.querySelector(".cross");
const link = document.querySelectorAll(".md-nav > a");

hamburgerIcon.addEventListener("click", () => {
  menu.style.display = "flex";
  hamburgerIcon.style.display = "none";
});

cross.addEventListener("click", () => {
  menu.style.display = "none";
  hamburgerIcon.style.display = "flex";
});

link.forEach((el) => {
  el.addEventListener("click", () => {
    menu.style.display = "none";
    hamburgerIcon.style.display = "flex";
  });
});

document.addEventListener("resize", () => {
  if (window.innerWidth > 770) {
    hamburgerIcon.style.display = "none";
  } else {
    hamburgerIcon.style.display = "none";
  }
});
