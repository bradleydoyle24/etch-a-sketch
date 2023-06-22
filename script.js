// CREATES PIXELS FOR CONTAINER
const container = document.querySelector('.container');

const row = document.createElement('div');
row.style.display = 'flex';
row.style.flexDirection = 'column';
row.classList.add('pixelRow');


let pixel = [];
let pixelRow = [];

let contWidth;
let contHeight;
let pixelWidth;
let pixelHeight;
let pixelBorderWidth = 1;

// Default size that page will start with.
buildEtch(50);

function buildEtch(pixelNumber) {
  // Builds a square of length/width 'pixelNumber'.
  // Will replace pixels if already present.
  if (limitEtchSize(pixelNumber) === true) {
    clearContainer(row);
    getContSize();
    getPixelSize(contWidth, contHeight, pixelNumber);
    buildContainer(pixelNumber);  
  } else return;
}

function clearContainer(parent) {
  // Remove old pixels so new pixels can take their place.
  let child = parent.lastElementChild;
  while (child) {
    parent.removeChild(child);
    child = parent.lastElementChild;
  }
}

function getContSize() {
  // Get width/height of container. clientWidth/height does not include the 
  // container border in calculations.
  contWidth = container.clientWidth;
  contHeight = container.clientHeight;
  console.log(`container width = ${contWidth}`);
  console.log(`container height = ${contHeight}`);
}

function getPixelSize(contWidth, contHeight, pixelNumber) {
  // Subtract (2 * pixelBorderWidth) as there is a border on each side.
  pixelWidth =  (contWidth / pixelNumber) - (2 * pixelBorderWidth);
  pixelHeight = (contHeight / pixelNumber) - (2 * pixelBorderWidth);
  console.log(`pixel width = ${pixelWidth}`);
  console.log(`pixel height = ${pixelHeight}`);
}

function buildContainer(pixelNumber) {
  // Create new empty row <div> to add pixels to.
  for (let j = 0; j < pixelNumber; j++) {
    pixelRow[j] = document.createElement('div');
    pixelRow[j].style.display = 'flex'; 
    for (let i = 0; i < pixelNumber; i++) {
      // Create 1 row's worth of pixels and append to row <div>
      pixel[i] = document.createElement('div');
      pixel[i].classList.add('pixel');
      pixel[i].style.cssText = `width: ${pixelWidth}px; height: ${pixelHeight}px;`;
      pixelRow[j].appendChild(pixel[i]);  
    } 
    row.appendChild(pixelRow[j]);
  }
  container.appendChild(row);
}

// ADJUST PIXEL COLOR WHEN MOUSE HOVERS OVER

// Create DOM list of divs with .pixel class
const pixels = document.querySelectorAll('.pixel');

// Iterates through list of pixels, adding an event listener to each one,
// with an anonymous function to change the pixel class to .pixelBlack.
function pixelBlack() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      pixel.style.backgroundColor = 'black';
    });
  });
};

// PIXEL COLOR CHANGING FUNCTIONS
function pixelRed() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      pixel.style.backgroundColor = 'rgb(238 22 22)';
    });
  });
};

function pixelBlue() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      pixel.style.backgroundColor = 'rgb(22 81 238)';
    });
  });
};

function pixelPink() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      pixel.style.backgroundColor = 'rgb(238 22 101)';
    });
  });
};

function pixelRandomColor() {
  // Gets a random value between 0 and 256 and assigns to RBG values for pixel background color;
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      let redRandom = getRandom();
      let greenRandom = getRandom();
      let blueRandom = getRandom();
      pixel.style.backgroundColor = `rgb(${redRandom} ${greenRandom} ${blueRandom})`
    });
  });
};

function getRandom() {
  return Math.floor(Math.random() * 256);
}

const pixelInputNumber = document.querySelector('#pixel-input');
const pixelInputButton = document.querySelector('#pixel-input-button');

pixelInputButton.addEventListener('click', () => {
  // Uses user input to build new etch with user defined width/height.
  let pixelNumber = pixelInputNumber.value;
  buildEtch(pixelNumber);
});

/*
Function to have a limit of 100 pixels
Function creates div underneath bottom row
Adds text saying pixel limit
Removes after 20 seconds.
*/

function limitEtchSize(pixelNumber) {
  if (pixelNumber <= 100) return true;
  else {
    let etchLimitMessage = document.createElement('div');
    etchLimitMessage.classList.add('etch-limit-message');
    etchLimitMessage.textContent = 'That\'s too high, enter a number lower than 100!';
    let etchHolder = document.querySelector('.etch-holder');
    etchHolder.appendChild(etchLimitMessage);
    return false;
  }
}