// CREATES PIXELS FOR CONTAINER
const container = document.querySelector('.container');

const row = document.createElement('div');
row.style.display = 'flex';
row.style.flexDirection = 'column';

let number = 3;

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
let width =  (contWidth / number) - (2 * pixelBorderWidth);
let height = (contHeight / number) - (2 * pixelBorderWidth);
console.log(`pixel width = ${width}`);
console.log(`pixel height = ${height}`);


// Create new empty row to add pixels to.
for (let j = 0; j < number; j++) {
  pixelRow[j] = document.createElement('div');
  pixelRow[j].style.display = 'flex'; 
  for (let i = 0; i < number; i++) {
    // Create 1 row's worth of pixels and append to row
    pixel[i] = document.createElement('div');
    pixel[i].style.cssText = `width: ${width}px; height: ${height}px; border: solid ${pixelBorderWidth}px gray;`;
    pixelRow[j].appendChild(pixel[i]);  
  } 
  row.appendChild(pixelRow[j]);
}

container.appendChild(row);

// ADJUST PIXEL COLOR WHEN MOUSE HOVERS OVER

/*
Create a class for each color gradient
Create listener event for each pixel
When pixel is hovered over, change color.
*/ 