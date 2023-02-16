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

// Reset media queries
function recurse() {}
window.addEventListener("resize", (e) => {
  const bp = e.currentTarget.innerWidth;
  if (bp === 1024) {
    // if (navColumn.classList.contains("d-none")) return;
    // navColumn.classList.add("d-none");
    console.log(bp);
  }
});

window.onresize = (e) => {
  const bp = e.currentTarget.innerWidth;
  if (bp === 1024) {
    // if (navColumn.classList.contains("d-none")) return;
    // navColumn.classList.add("d-none");
    console.log(bp);
  }
};

function getWindowDims() {
  let docs = document,
    win = window;
  let docsEl =
    docs.compatMode && docs.compatMode === "CSS1Compat"
      ? docs.documentElement
      : docs.body;
  let width = docsEl.clientWidth;
  let height = docsEl.clientHeight;
  if (win.innerWidth && width > win.innerWidth) {
    width = win.innerWidth;
    height = win.innerHeight;
  }
  return {
    width: width,
    height: height,
  };
}

let win = getWindowDims();
console.log(win);

navbarBtn.addEventListener("click", toggleMenu);
