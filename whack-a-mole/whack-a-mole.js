  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

//var gameBoard = document.getElementById("gameBoard")
//  // tests
//  // console.log(gameBoard)
//  //
//
//var row0 = gameBoard.getElementsByTagName("tr")[0]
//var row1 = gameBoard.getElementsByTagName("tr")[1]
//var row2 = gameBoard.getElementsByTagName("tr")[2]
//var row3 = gameBoard.getElementsByTagName("tr")[3]
//var row4 = gameBoard.getElementsByTagName("tr")[4]
//  // tests
//  // console.log(row0)
//  //
//
//var row0Cell = row0.getElementsByTagName("td")
//var row1Cell = row1.getElementsByTagName("td")
//var row2Cell = row2.getElementsByTagName("td")
//var row3Cell = row3.getElementsByTagName("td")
//var row4Cell = row4.getElementsByTagName("td")
//  // tests
//  // console.log(row0Cell[1])
//  //
//
//  // write a function to generate a random number for row (0-4)
//  // write a function to generate a random number for cells (0-4)
//  // insert the random numbers into rows/cells of gameboard
//
//function generateRow () {
//  var randomRow = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
//  var randomCell = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
//  var moleLocation = eval("row" + String(randomRow) + "Cell" + "[" + String(randomCell) + "]")
//  moleLocation.innerHTML = '<img id="mole" src="mole.PNG">';
//}
//
//document.onload = generateRow();
//
////var mole = generateRow();
//
////mole.addEventListener("click", function () {
////  generateRow();
////  mole.hidden = true;
////});
////


game = gameBoard.getElementsByTagName("td");

function randomNumber() {
  var x = Math.floor(Math.random() * (24 - 0 + 1)) + 0;
  return x;
}

var number = randomNumber();
var randomPlacement = game[number];

var mole = document.createElement('img');
mole.src = './mole.PNG';
mole.id = "mole";

randomPlacement.appendChild(mole); 

var audio = new Audio();
audio.src = "./whack-audio.wav";

function whackedMole() {
  number = randomNumber();
  randomPlacement = game[number];
  randomPlacement.appendChild(mole);
  audio.play();
}

mole.onclick = whackedMole;