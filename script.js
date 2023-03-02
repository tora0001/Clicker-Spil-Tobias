"use strict";

window.addEventListener("load", start);

let points = 0;

function start() {
  points = 0;

  startAnimationer();

  registrerClicks();

  animationRestart();
}

function startAnimationer() {
  document.querySelector("#mink_1_container").classList.add("minkMove1");
  document.querySelector("#mink_2_container").classList.add("minkMove2");
  document.querySelector("#mink_3_container").classList.add("minkMove3");
  document.querySelector("#mink_4_container").classList.add("minkMove4");
  document.querySelector("#mink_5_container").classList.add("minkMove5");
  document.querySelector("#vote_1_container").classList.add("voteMove1");
  document.querySelector("#vote_2_container").classList.add("voteMove2");
}

function registrerClicks() {
  document.querySelector("#mink_1_container").addEventListener("mousedown", clickMink);
  document.querySelector("#mink_2_container").addEventListener("mousedown", clickMink);
  document.querySelector("#mink_3_container").addEventListener("mousedown", clickMink);
  document.querySelector("#mink_4_container").addEventListener("mousedown", clickMink);
  document.querySelector("#mink_5_container").addEventListener("mousedown", clickMink);
  document.querySelector("#vote_1_container").addEventListener("mousedown", clickVote);
  document.querySelector("#vote_2_container").addEventListener("mousedown", clickVote);
}

function animationRestart() {
  document.querySelector("#mink_1_container").addEventListener("animationiteration", minkRestart);
  document.querySelector("#mink_2_container").addEventListener("animationiteration", minkRestart);
  document.querySelector("#mink_3_container").addEventListener("animationiteration", minkRestart);
  document.querySelector("#mink_4_container").addEventListener("animationiteration", minkRestart);
  document.querySelector("#mink_5_container").addEventListener("animationiteration", minkRestart);
  document.querySelector("#vote_1_container").addEventListener("animationiteration", voteRestart);
  document.querySelector("#vote_2_container").addEventListener("animationiteration", voteRestart);
}

function clickMink() {
  let mink = this;

  mink.removeEventListener("mousedown", clickMink);

  mink.classList.add("paused");

  mink.querySelector("img").classList.add("disapear");

  mink.addEventListener("animationend", minkGone);

  increasePoints();
}

function minkGone() {
  let mink = this;
  mink.removeEventListener("animationend", minkGone);

  mink.querySelector("img").classList.remove("disapear");

  mink.classList.remove("paused");

  minkRestart.call(this);

  mink.addEventListener("mousedown", clickMink);
}

function minkRestart() {
  let mink = this;
  mink.classList.remove("minkMove1", "minkMove2", "minkMove3", "minkMove4", "minkMove5");
  mink.offsetWidth;

  let ani = Math.floor(Math.random() * 5) + 1;
  mink.classList.add("minkMove" + ani);
}

function clickVote() {
  let vote = this;

  vote.removeEventListener("mousedown", clickVote);

  vote.classList.add("paused");

  vote.querySelector("img").classList.add("disapear2");

  vote.addEventListener("animationend", voteGone);
}

function voteGone() {
  let vote = this;
  vote.removeEventListener("animationend", voteGone);

  vote.querySelector("img").classList.remove("disapear2");

  vote.classList.remove("paused");

  voteRestart.call(this);

  vote.addEventListener("mousedown", clickVote);
}

function voteRestart() {
  let vote = this;
  vote.classList.remove("voteMove1", "voteMove2");
  vote.offsetWidth;

  let ani = Math.floor(Math.random() * 2) + 1;
  vote.classList.add("voteMove" + ani);
}

function increasePoints() {
  points++;
  displayPoints();
  if (points == 20) {
    levelComplete();
  }
}

function displayPoints() {
  document.querySelector("#points").textContent = points;
}
