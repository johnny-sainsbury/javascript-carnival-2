  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

const headStr1 = './images/head';
const bodyStr1 = './images/body';
const shoeStr1 = './images/shoes';
let headIndex = 0;
let bodyIndex = 0;
let shoeIndex = 0;
let clothingIndex = 0;
// 0 = head
// 1 = body
// 2 = shoes 

function clothingIndexUp() {
  if (clothingIndex < 2) {
    clothingIndex++;
  } else {
    clothingIndex = 0;
  }
}

function clothingIndexDown() {
  if (clothingIndex <= 0) {
    clothingIndex = 2;
  } else if (clothingIndex <= 2) {
    clothingIndex--;
  }
}

function changeClothingRight() {
  if (clothingIndex == 0) {
    const headImg = document.getElementById("head");
    const headSrc = `${headStr1}${headIndex}.png`;
    headImg.src = headSrc;
    if (headIndex < 5) {
      headIndex++;
    } else {
      headIndex = 0;
      }
  } else if (clothingIndex == 1) {
    const bodyImg = document.getElementById("body");
    const bodySrc = `${bodyStr1}${bodyIndex}.png`;
    bodyImg.src = bodySrc;
    if (bodyIndex < 5) {
      bodyIndex++;
    } else {
      bodyIndex = 0;
      }
  } else if (clothingIndex == 2) {
    const shoeImg = document.getElementById("shoe");
    const shoeSrc = `${shoeStr1}${shoeIndex}.png`;
    shoeImg.src = shoeSrc;
    if (shoeIndex < 5) {
      shoeIndex++;
    } else {
      shoeIndex = 0;
      }
  }
}

function changeClothingLeft() {
  if (clothingIndex == 0) {
    const headImg = document.getElementById("head");
    const headSrc = `${headStr1}${headIndex}.png`;
    headImg.src = headSrc;
    if (headIndex <= 0) {
      headIndex = 5;
    } else if (headIndex <= 5) {
      headIndex--;
      }
  } else if (clothingIndex == 1) {
    const bodyImg = document.getElementById("body");
    const bodySrc = `${bodyStr1}${bodyIndex}.png`;
    bodyImg.src = bodySrc;
    if (bodyIndex <= 0) {
      bodyIndex = 5;
    } else if (bodyIndex <= 5) {
      bodyIndex--;
      }
  } else if (clothingIndex == 2) {
    const shoeImg = document.getElementById("shoe");
    const shoeSrc = `${shoeStr1}${shoeIndex}.png`;
    shoeImg.src = shoeSrc;
    if (shoeIndex <= 0) {
      shoeIndex = 5;
    } else if (shoeIndex <= 5) {
      shoeIndex--;
      }
  }
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    // up arrow
    clothingIndexUp();
  } else if (e.keyCode == '40') {
   // down arrow
   clothingIndexDown();
  } else if (e.keyCode == '37') {
    // left arrow
    changeClothingLeft();
  } else if (e.keyCode == '39') {
    // right arrow
    changeClothingRight();
  }
}