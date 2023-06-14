/* 
Create container div
  Create const for container
  each pixel is it's own div.
    hardcode width/height for now, change to dynamic later.
  each row is it's own div.
    Create a const for a pixel div
    Fill with pixel
    Create a const for a row div
    Append pixel to row 16x
    Append row to container div
  stack row a certain number of times (16 to start).


Use flexbox auto-sizing to make pixels fill the container?
*/

const container = document.querySelector('.container');

const row = document.createElement('div');
row.style.display = 'flex';
row.style.flexDirection = 'column';

let number = 4;

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

// Subtract 2 * pixelBorderWidth as there is a border on each side.
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


