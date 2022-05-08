function rollDice(){
  var firstDice = Math.random();
  var valueOfDice1 = Math.floor(firstDice * 6);

  if (valueOfDice1 === 0){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
  } else if (valueOfDice1 === 1) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
  } else if (valueOfDice1 === 2) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
  } else if (valueOfDice1 === 3) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
  } else if (valueOfDice1 === 4) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
  } else {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
  }


  var secondDice = Math.random();
  var valueOfDice2 = Math.floor(secondDice * 6);

  if (valueOfDice2 === 0){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
  } else if (valueOfDice2 === 1) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
  } else if (valueOfDice2 === 2) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
  } else if (valueOfDice2 === 3) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
  } else if (valueOfDice2 === 4) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
  } else {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
  }

  if (valueOfDice1 > valueOfDice2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
  } else if (valueOfDice1 < valueOfDice2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Its a tie!";
  }
}

rollDice();
