$(document).on("keydown", function (event) {
  if (event.key === " ") {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    rollTheDice(randomNumber1, randomNumber2);
    displayWinner(randomNumber1, randomNumber2);
  }
});

function rollTheDice(dice1, dice2) {
  if (dice1 === 1) {
    $(".img1").attr("src", "./images/dice1.png");
  } else if (dice1 === 2) {
    $(".img1").attr("src", "./images/dice2.png");
  } else if (dice1 === 3) {
    $(".img1").attr("src", "./images/dice3.png");
  } else if (dice1 === 4) {
    $(".img1").attr("src", "./images/dice4.png");
  } else if (dice1 === 5) {
    $(".img1").attr("src", "./images/dice5.png");
  } else if (dice1 === 6) {
    $(".img1").attr("src", "./images/dice6.png");
  }
  if (dice2 === 1) {
    $(".img2").attr("src", "./images/dice1.png");
  } else if (dice2 === 2) {
    $(".img2").attr("src", "./images/dice2.png");
  } else if (dice2 === 3) {
    $(".img2").attr("src", "./images/dice3.png");
  } else if (dice2 === 4) {
    $(".img2").attr("src", "./images/dice4.png");
  } else if (dice2 === 5) {
    $(".img2").attr("src", "./images/dice5.png");
  } else if (dice2 === 6) {
    $(".img2").attr("src", "./images/dice6.png");
  }
}

function displayWinner(dice1, dice2) {
  if (dice1 > dice2) {
    $("#winner-display").text("🚩 Player 1 Wins!");
  } else if (dice1 < dice2) {
    $("#winner-display").text("Player 2 Wins! 🚩");
  } else if (dice1 === dice2) {
    $("#winner-display").text("Draw!");
  }
}
