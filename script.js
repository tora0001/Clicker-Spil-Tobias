"use strict";
console.log("script.js is running");

window.addEventListener("load", start);

function start() {
  console.log("script.js is running");

  document.querySelector("#mink_1_container").classList.add("mink_1_move");

  document
    .querySelector("#mink_1_container")
    .addEventListener("mousedown", clickMink1);
}

function clickMink1() {
  document
    .querySelector("#mink_1_container")
    .removeEventListener("mousedown", clickMink1);

  document.querySelector("#mink_1_container").classList.add("paused");

  document.querySelector("#mink_1_sprite").classList.add("disapear");

  document
    .querySelector("#mink_1_container")
    .addEventListener("disapear", minkGone);
}

function minkGone() {
  document
    .querySelector("#mink_1_container")
    .removeEventListener("animationend", minkGone);

  document.querySelector("#mink_1_sprite").classList.remove("disapear");

  document.querySelector("#mink_1_container").classList.remove("paused");
}
