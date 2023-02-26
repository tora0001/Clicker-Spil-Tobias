"use strict";
console.log("script.js is running");

window.addEventListener("load", start);

function start() {
  console.log("script.js is running");

  document.querySelector("#mink_1_container").classList.add("mink_1_move");

  document
    .querySelector("#mink_1_container")
    .addEventListener("mousedown", clickMink1);

  document.querySelector("#mink_2_container").classList.add("mink_2_move");

  document
    .querySelector("#mink_2_container")
    .addEventListener("mousedown", clickMink2);

  document.querySelector("#mink_3_container").classList.add("mink_3_move");

  document
    .querySelector("#mink_3_container")
    .addEventListener("mousedown", clickMink3);

  document.querySelector("#mink_4_container").classList.add("mink_4_move");

  document
    .querySelector("#mink_4_container")
    .addEventListener("mousedown", clickMink4);

  document.querySelector("#mink_5_container").classList.add("mink_5_move");

  document
    .querySelector("#mink_5_container")
    .addEventListener("mousedown", clickMink5);

  document.querySelector("#vote_1_container").classList.add("vote_1_move");

  document
    .querySelector("#vote_1_container")
    .addEventListener("mousedown", clickVote1);

  document.querySelector("#vote_2_container").classList.add("vote_2_move");

  document
    .querySelector("#vote_2_container")
    .addEventListener("mousedown", clickVote2);
}

function clickMink1() {
  document
    .querySelector("#mink_1_container")
    .removeEventListener("mousedown", clickMink1);

  document.querySelector("#mink_1_container").classList.add("paused");

  document.querySelector("#mink_1_sprite").classList.add("disapear");

  document
    .querySelector("#mink_1_container")
    .addEventListener("animationend", minkGone1);
}

function minkGone1() {
  document
    .querySelector("#mink_1_container")
    .removeEventListener("animationend", minkGone1);

  document.querySelector("#mink_1_sprite").classList.remove("disapear");

  document.querySelector("#mink_1_container").classList.remove("paused");

  document.querySelector("#mink_1_container").classList.remove("mink_1_move");
  document.querySelector("#mink_1_container").offsetWidth;
  document.querySelector("#mink_1_container").classList.add("mink_1_move");
  document
    .querySelector("#mink_1_container")
    .addEventListener("mousedown", clickMink1);
}

function clickMink2() {
  document
    .querySelector("#mink_2_container")
    .removeEventListener("mousedown", clickMink2);

  document.querySelector("#mink_2_container").classList.add("paused");

  document.querySelector("#mink_2_sprite").classList.add("disapear");

  document
    .querySelector("#mink_2_container")
    .addEventListener("animationend", minkGone2);
}

function minkGone2() {
  document
    .querySelector("#mink_2_container")
    .removeEventListener("animationend", minkGone2);

  document.querySelector("#mink_2_sprite").classList.remove("disapear");

  document.querySelector("#mink_2_container").classList.remove("paused");

  document.querySelector("#mink_2_container").classList.remove("mink_2_move");
  document.querySelector("#mink_2_container").offsetWidth;
  document.querySelector("#mink_2_container").classList.add("mink_2_move");
  document
    .querySelector("#mink_2_container")
    .addEventListener("mousedown", clickMink2);
}

function clickMink3() {
  document
    .querySelector("#mink_3_container")
    .removeEventListener("mousedown", clickMink3);

  document.querySelector("#mink_3_container").classList.add("paused");

  document.querySelector("#mink_3_sprite").classList.add("disapear");

  document
    .querySelector("#mink_3_container")
    .addEventListener("animationend", minkGone3);
}

function minkGone3() {
  document
    .querySelector("#mink_3_container")
    .removeEventListener("animationend", minkGone3);

  document.querySelector("#mink_3_sprite").classList.remove("disapear");

  document.querySelector("#mink_3_container").classList.remove("paused");

  document.querySelector("#mink_3_container").classList.remove("mink_3_move");
  document.querySelector("#mink_3_container").offsetWidth;
  document.querySelector("#mink_3_container").classList.add("mink_3_move");
  document
    .querySelector("#mink_3_container")
    .addEventListener("mousedown", clickMink3);
}

function clickMink4() {
  document
    .querySelector("#mink_4_container")
    .removeEventListener("mousedown", clickMink4);

  document.querySelector("#mink_4_container").classList.add("paused");

  document.querySelector("#mink_4_sprite").classList.add("disapear");

  document
    .querySelector("#mink_4_container")
    .addEventListener("animationend", minkGone4);
}

function minkGone4() {
  document
    .querySelector("#mink_4_container")
    .removeEventListener("animationend", minkGone4);

  document.querySelector("#mink_4_sprite").classList.remove("disapear");

  document.querySelector("#mink_4_container").classList.remove("paused");

  document.querySelector("#mink_4_container").classList.remove("mink_4_move");
  document.querySelector("#mink_4_container").offsetWidth;
  document.querySelector("#mink_4_container").classList.add("mink_4_move");
  document
    .querySelector("#mink_4_container")
    .addEventListener("mousedown", clickMink4);
}

function clickMink5() {
  document
    .querySelector("#mink_5_container")
    .removeEventListener("mousedown", clickMink5);

  document.querySelector("#mink_5_container").classList.add("paused");

  document.querySelector("#mink_5_sprite").classList.add("disapear");

  document
    .querySelector("#mink_5_container")
    .addEventListener("animationend", minkGone5);
}

function minkGone5() {
  document
    .querySelector("#mink_5_container")
    .removeEventListener("animationend", minkGone5);

  document.querySelector("#mink_5_sprite").classList.remove("disapear");

  document.querySelector("#mink_5_container").classList.remove("paused");

  document.querySelector("#mink_5_container").classList.remove("mink_5_move");
  document.querySelector("#mink_5_container").offsetWidth;
  document.querySelector("#mink_5_container").classList.add("mink_5_move");
  document
    .querySelector("#mink_5_container")
    .addEventListener("mousedown", clickMink5);
}

function clickVote1() {
  document
    .querySelector("#vote_1_container")
    .removeEventListener("mousedown", clickVote1);

  document.querySelector("#vote_1_container").classList.add("paused");

  document.querySelector("#vote_1_sprite").classList.add("disapear2");

  document
    .querySelector("#vote_1_container")
    .addEventListener("animationend", voteGone1);
}

function voteGone1() {
  document
    .querySelector("#vote_1_container")
    .removeEventListener("animationend", voteGone1);

  document.querySelector("#vote_1_sprite").classList.remove("disapear2");

  document.querySelector("#vote_1_container").classList.remove("paused");

  document.querySelector("#vote_1_container").classList.remove("vote_1_move");
  document.querySelector("#vote_1_container").offsetWidth;
  document.querySelector("#vote_1_container").classList.add("vote_1_move");
  document
    .querySelector("#vote_1_container")
    .addEventListener("mousedown", clickVote1);
}

function clickVote2() {
  document
    .querySelector("#vote_2_container")
    .removeEventListener("mousedown", clickVote2);

  document.querySelector("#vote_2_container").classList.add("paused");

  document.querySelector("#vote_2_sprite").classList.add("disapear2");

  document
    .querySelector("#vote_2_container")
    .addEventListener("enimationend", voteGone2);
}

function voteGone2() {
  document
    .querySelector("#vote_2_container")
    .removeEventListener("animationend", voteGone2);

  document.querySelector("#vote_2_sprite").classList.remove("disapear2");

  document.querySelector("#vote_2_container").classList.remove("paused");

  document.querySelector("#vote_2_container").classList.remove("vote_2_move");
  document.querySelector("#vote_2_container").offsetWidth;
  document.querySelector("#vote_2_container").classList.add("vote_2_move");
  document
    .querySelector("#vote_2_container")
    .addEventListener("mousedown", clickVote2);
}
