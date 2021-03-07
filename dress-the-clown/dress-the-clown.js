  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

var headStr1 = './images/head';
var headIndex = 0;
var headStr2 = '.png';

function changeClownHead() {
  headIndex++;
  var headSrc = headStr1.concat(headIndex, headStr2);
  var headImg = document.getElementById("head");
  headImg.src = headSrc;
}

changeClownHead();

console.log(changeClownHead)
