  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

const headStr1 = './images/head';
let headIndex = 0;
const headStr2 = '.png';

function changeClownHead() {
  if (headIndex < 5) {
    headIndex++;
    const headImg = document.getElementById("head");
    const headSrc = `${headStr1}${headIndex}${headStr2}`;
    headImg.src = headSrc;
  } else {
    headIndex = 0;
    }
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    // up arrow
  } else if (e.keyCode == '40') {
   // down arrow
  } else if (e.keyCode == '37') {
    // left arrow
  } else if (e.keyCode == '39') {
    // right arrow
    changeClownHead();
  }
}