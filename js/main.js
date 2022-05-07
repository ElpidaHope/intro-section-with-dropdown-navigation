const menu = document .querySelector(".menu");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector(".nav");

const dropDown = document.querySelectorAll(".drop-down > p")

menu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu)

function toggleMenu() {
  nav.classList.toggle("show")
}

dropDown.forEach(item => item.addEventListener("click", (e) => {
  e.target.classList.toggle("drop");
  e.target.nextElementSibling.classList.toggle("drop")
}))


