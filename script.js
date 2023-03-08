"use strict";

window.addEventListener("load", ready);

let isGameRunning = false;
let points = 0;
let lives = 0;

function ready() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#btn_restart").addEventListener("click", showStartScreen);
  document.querySelector("#btn_replay").addEventListener("click", showStartScreen);
}

function showGameScreen() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function showStartScreen() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function resetLives() {
  lives = 3;
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
  points = 0;
  displayPoints();
}

function startGame() {
  isGameRunning = true;
  resetLives();
  resetPoints();
  showGameScreen();

  document.querySelector("#sound_background").play();
  startAnimationer();

  startTimer();

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
  document.querySelector("#mink_1_container").addEventListener("animationiteration", minkAttack);
  document.querySelector("#mink_2_container").addEventListener("animationiteration", minkAttack);
  document.querySelector("#mink_3_container").addEventListener("animationiteration", minkAttack);
  document.querySelector("#mink_4_container").addEventListener("animationiteration", minkAttack);
  document.querySelector("#mink_5_container").addEventListener("animationiteration", minkAttack);
  document.querySelector("#vote_1_container").addEventListener("animationiteration", voteRestart);
  document.querySelector("#vote_2_container").addEventListener("animationiteration", voteRestart);
}

function minkAttack() {
  console.log("mink attack");
  if (isGameRunning) {
    minkRestart.call(this);
  }
  decreaseLives();
}

function clickMink() {
  let mink = this;

  mink.removeEventListener("mousedown", clickMink);

  mink.classList.add("paused");

  mink.querySelector("img").classList.add("disapear");

  mink.addEventListener("animationend", minkGone);

  document.querySelector("#sound_mink").currentTime = 0;
  document.querySelector("#sound_mink").play();

  increasePoints();
}

function minkGone() {
  let mink = this;
  mink.removeEventListener("animationend", minkGone);

  mink.querySelector("img").classList.remove("disapear");

  mink.classList.remove("paused");
  if (isGameRunning) {
    minkRestart.call(this);
  }

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

  decreaseLives();
}

function voteGone() {
  let vote = this;
  vote.removeEventListener("animationend", voteGone);

  vote.querySelector("img").classList.remove("disapear2");

  vote.classList.remove("paused");

  if (isGameRunning) {
    voteRestart.call(this);
  }

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

function decreaseLives() {
  showDecreasedLives();
  if (lives <= 1) {
    gameOver();
  } else {
    showDecreasedLives();
  }
  document.querySelector("#sound_vote").currentTime = 0;
  document.querySelector("#sound_vote").play();
  lives--;
}

function showDecreasedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function gameOver() {
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#sound_gameOver").currentTime = 0;
  document.querySelector("#sound_gameOver").play();
  stopGame();
}

function levelComplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#sound_levelComplete").currentTime = 0;
  document.querySelector("#sound_levelComplete").play();
  stopGame();
}

function stopGame() {
  document.querySelector("#mink_1_container").classList.remove("minkMove1", "minkMove2", "minkMove3", "minkMove4", "minkMove5");
  document.querySelector("#mink_2_container").classList.remove("minkMove1", "minkMove2", "minkMove3", "minkMove4", "minkMove5");
  document.querySelector("#mink_3_container").classList.remove("minkMove1", "minkMove2", "minkMove3", "minkMove4", "minkMove5");
  document.querySelector("#mink_4_container").classList.remove("minkMove1", "minkMove2", "minkMove3", "minkMove4", "minkMove5");
  document.querySelector("#mink_5_container").classList.remove("minkMove1", "minkMove2", "minkMove3", "minkMove4", "minkMove5");
  document.querySelector("#vote_1_container").classList.remove("voteMove1", "voteMove2");
  document.querySelector("#vote_2_container").classList.remove("voteMove1", "voteMove2");

  document.querySelector("#mink_1_container").removeEventListener("mousedown", clickMink);
  document.querySelector("#mink_2_container").removeEventListener("mousedown", clickMink);
  document.querySelector("#mink_3_container").removeEventListener("mousedown", clickMink);
  document.querySelector("#mink_4_container").removeEventListener("mousedown", clickMink);
  document.querySelector("#mink_5_container").removeEventListener("mousedown", clickMink);
  document.querySelector("#vote_1_container").removeEventListener("mousedown", clickVote);
  document.querySelector("#vote_2_container").removeEventListener("mousedown", clickVote);

  document.querySelector("#time_sprite").classList.remove("shrink");

  document.querySelector("#sound_background").pause();
  document.querySelector("#sound_background").currentTime = 0;
  isGameRunning = false;
}

function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");
  document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  if (points >= 20) {
    levelComplete();
  } else {
    gameOver();
  }
}
