var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", randomNumber(randomNumber1));
document.querySelector(".img2").setAttribute("src", randomNumber(randomNumber2));
function randomNumber(num) {
  switch (num) {
    case 1:
      return "images/dice1.png";
    case 2:
      return "images/dice2.png";
    case 3:
      return "images/dice3.png";
    case 4:
      return "images/dice4.png";
    case 5:
      return "images/dice5.png";
    case 6:
      return "images/dice6.png";
    default:
      return "images/dice1.png"; 
  }
}
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}   



