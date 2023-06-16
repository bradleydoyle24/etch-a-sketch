// CREATES PIXELS FOR CONTAINER
const container = document.querySelector('.container');

const row = document.createElement('div');
row.style.display = 'flex';
row.style.flexDirection = 'column';

let number = 50;
let pixel = [];
let pixelRow = [];

// Get width/height of container. clientWidth/height does not include the 
// container border in calculations.
let contWidth = container.clientWidth;
let contHeight = container.clientHeight;
console.log(`container width = ${contWidth}`);
console.log(`container height = ${contHeight}`);

// Allows for variable border widths for each pixel.
let pixelBorderWidth = 1;

// Subtract (2 * pixelBorderWidth) as there is a border on each side.
let pixelWidth =  (contWidth / number) - (2 * pixelBorderWidth);
let pixelHeight = (contHeight / number) - (2 * pixelBorderWidth);
console.log(`pixel width = ${pixelWidth}`);
console.log(`pixel height = ${pixelHeight}`);


// Create new empty row <div> to add pixels to.
for (let j = 0; j < number; j++) {
  pixelRow[j] = document.createElement('div');
  pixelRow[j].style.display = 'flex'; 
  for (let i = 0; i < number; i++) {
    // Create 1 row's worth of pixels and append to row <div>
    pixel[i] = document.createElement('div');
    pixel[i].classList.add('pixel');
    pixel[i].style.cssText = `width: ${pixelWidth}px; height: ${pixelHeight}px;`;
    pixelRow[j].appendChild(pixel[i]);  
  } 
  row.appendChild(pixelRow[j]);
}

container.appendChild(row);

// ADJUST PIXEL COLOR WHEN MOUSE HOVERS OVER

// Create DOM list of divs with .pixel class
const pixels = document.querySelectorAll('.pixel');

// Iterates through list of pixels, adding an event listener to each one,
// with an anonymous function to change the pixel class to .pixelBlack.
function pixelBlack() {
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      pixel.style.backgroundColor = 'black';
    });
  });
};

function pixelRed() {
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      pixel.style.backgroundColor = 'rgb(238 22 22)';
    });
  });
};

function pixelBlue() {
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      pixel.style.backgroundColor = 'rgb(22 81 238)';
    });
  });
};

function pixelPink() {
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', ()=> {
      pixel.style.backgroundColor = 'rgb(238 22 101)';
    });
  });
};

// Gets a random value between 0 and 256 and assigns to RBG values for pixel background color;
function pixelRandomColor() {
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
Prompt user for pixel amount
Change color for buttons
Adjust stylesheet
*/


/* 
CHANGE COLOR FOR BUTTONS

Create a listener for each button selection
When clicked, clear all color select functions
Erase board?
Set new color function
*/
