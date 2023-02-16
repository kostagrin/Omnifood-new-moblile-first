"use strict";

// NAVBAR TOGGLER
const navbarBtn = document.querySelector(".navbar__btn");
const burgerIcon = document.querySelector(".navbar__btn--burger");
const closeIcon = document.querySelector(".navbar__btn--close");
const navColumn = document.querySelector(".navbar__nav--column");
const navRow = document.querySelector(".navbar__nav--row");
const docWidth = document.querySelector("body");

function toggleMenu() {
  navColumn.classList.toggle("d-none");
  burgerIcon.classList.toggle("d-none");
  closeIcon.classList.toggle("d-none");
  console.log(navbarBtn.children);
}

navbarBtn.addEventListener("click", toggleMenu);
