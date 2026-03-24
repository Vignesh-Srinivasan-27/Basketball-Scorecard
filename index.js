let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let winnerCheck = document.getElementById("winner-status")

let scoreCard1 = document.querySelector(".score-card1");
let scoreCard2 = document.querySelector(".score-card2");

let home_score = 0;
let guest_score = 0;

function homeIncrease_1() {
  home_score += 1;
  homeScore.textContent = home_score;
  checkWinner();
}

function homeIncrease_2() {
  home_score += 2;
  homeScore.textContent = home_score;
  checkWinner();
}

function homeIncrease_3() {
  home_score += 3;
  homeScore.textContent = home_score;
  checkWinner();
}

function guestIncrease_1() {
  guest_score += 1;
  guestScore.textContent = guest_score;
  checkWinner();
}

function guestIncrease_2() {
  guest_score += 2;
  guestScore.textContent = guest_score;
  checkWinner();
}

function guestIncrease_3() {
  guest_score += 3;
  guestScore.textContent = guest_score;
  checkWinner()
}


function checkWinner() {
    if (home_score >= 15) {
        // 3 things to do here:
        scoreCard1.style.backgroundColor = "#00A86B";
        scoreCard2.style.backgroundColor = "#C0392B";
        winnerCheck.textContent = "Home Team Wins! 🏆"
    } else if (guest_score >= 15) {
        scoreCard2.style.backgroundColor = "#00A86B";
        scoreCard1.style.backgroundColor = "#C0392B";
        winnerCheck.textContent = "Guest Team Wins! 🏆"
    }
}