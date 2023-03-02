"use strict";
// VARIABLES
const navbarBtn = document.querySelector(".navbar__btn");
const navbar = document.querySelector(".navbar");
const allLinks = document.querySelectorAll("a:link");

// NAVBAR TOGGLER
function toggleMenu() {
  navbar.classList.toggle("navbar__nav-display");
}

navbarBtn.addEventListener("click", toggleMenu);

// ALL LINKS FUNCTIONALITY
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to target
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Close nav
    if (link.classList.contains("navbar__nav__link")) {
      toggleMenu();
    }
  });
});
