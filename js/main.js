"use strict";

// NAVBAR TOGGLER
const navbarBtn = document.querySelector(".navbar__btn");
const navbar = document.querySelector(".navbar");

function toggleMenu() {
  navbar.classList.toggle("navbar__nav-display");
}

navbarBtn.addEventListener("click", toggleMenu);
