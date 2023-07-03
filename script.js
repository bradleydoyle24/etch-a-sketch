// CREATES PIXELS FOR CONTAINER
const container = document.querySelector('.container');
const etchHolder = document.querySelector('.etch-holder');


const row = document.createElement('div');
row.style.display = 'flex';
row.style.flexDirection = 'column';
row.classList.add('pixelRow');


let pixel = [];
let pixelRow = [];
let pixelNumber;

let contWidth;
let contHeight;
let pixelWidth;
let pixelHeight;
let pixelBorderWidth = 1;
let pixelAltered;

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
  } else {
    // Builds 50 h/w etch if value > 100.
    pixelNumber = 50;
    clearContainer(row);
    getContSize();
    getPixelSize(contWidth, contHeight, pixelNumber);
    buildContainer(pixelNumber); 
  }
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
}


function getPixelSize(contWidth, contHeight, pixelNumber) {
  // Subtract (2 * pixelBorderWidth) as there is a border on each side.
  pixelWidth =  (contWidth / pixelNumber) - (2 * pixelBorderWidth);
  pixelHeight = (contHeight / pixelNumber) - (2 * pixelBorderWidth);
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
      pixel[i].style.cssText = `background-color: rgb(200 200 200); width: ${pixelWidth}px; height: ${pixelHeight}px;`;
      pixelRow[j].appendChild(pixel[i]);  
    } 
    row.appendChild(pixelRow[j]);
  }
  container.appendChild(row);
}

// ADJUST PIXEL COLOR WHEN MOUSE HOVERS OVER
const pixels = document.querySelectorAll('.pixel');

function pixelBlack() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      pixel.style.backgroundColor = 'black';
    });
  });
};

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

/*
function pixelDarken() {
  // Darkens pixels until pixel is black after 10 events.
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      pixelStyle = getComputedStyle(pixel);
      backgroundColor = pixelStyle.backgroundColor;
      console.log(pixel.backgroundColor);

      let rgbValues = backgroundColor.substring(4, backgroundColor.length - 1);
      let rgbArray = rgbValues.split(" ");
      let red = parseInt(rgbArray[0]);
      let green = parseInt(rgbArray[1]);
      let blue = parseInt(rgbArray[2]);

      // original rgb vlues are 200. 20 reduces by 10% each time.
      if (red >= 0 && green >= 0 && blue >= 0) {
        red -= 20;
        green -= 20;
        blue -= 20;
        pixel.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
      } else {
        red = 0;
        green = 0;
        blue = 0;
      }
    });
  });
}
*/


// CHANGES CLICKED BUTTON TO BLUE, NON-CLICKED TO DEFAULT COLOR
const colorButtons = document.querySelectorAll('.color-button')

colorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Returns buttons to default background color.
    clearButtons(colorButtons);
    // Changes clicked button background color to blue.
    button.style.backgroundColor = 'rgb(22 81 238)';
  });
});

function clearButtons(colorButtons) {
  colorButtons.forEach((button) => {
    button.style.backgroundColor = '';
  });
}

const pixelInputNumber = document.querySelector('#pixel-input');
const pixelInputButton = document.querySelector('#pixel-input-button');

pixelInputButton.addEventListener('click', () => {
  // Uses user input to build new etch with user defined width/height.
  pixelNumber = pixelInputNumber.value;
  buildEtch(pixelNumber);
  clearButtons(colorButtons);
});


function limitEtchSize(pixelNumber) {
  // Stops pixels > 100 and reveals message to user of pixel limit.
  let etchLimitMessage = document.querySelector('.etch-limit-message');
  // Clicking 'clear screen' with no user input returns pixelNumber as undefined,
  // this simply substitutes pixelNumber as '50' if that is the case.
  if (pixelNumber !== undefined) {
    if (pixelNumber <= 100) {
      etchLimitMessage.style.display = 'none';
      return true;
    }
    else {
      etchLimitMessage.style.display = '';
      return false;
    }
  } else {
    pixelNumber = 50;
    limitEtchSize(pixelNumber);
  }
}

// CLEAR SCREEN WITH BUTTON CLICK
const clearScreen = document.querySelector('#clear-screen');
clearScreen.addEventListener('click', () => {
  buildEtch(pixelNumber);
  clearButtons(colorButtons);
});