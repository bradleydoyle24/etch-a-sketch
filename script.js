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
*/

const container = document.querySelector('.container');
const pixel = document.createElement('div');
const pixel1 = document.createElement('div');

const row = document.createElement('div');
const column = document.createElement('div');

let number = 4;

let pixelRowArray = [];
let pixelColumnArray = [];

// Create 'number' amount of rows
for (let j = 0; j < number; j++) {
  pixelColumnArray[j] = document.createElement('div');
  // Create 1 row's worth of pixels and append to row
  for (let i = 0; i < number; i++) {
    pixelRowArray[i] = document.createElement('div');
    pixelRowArray[i].style.cssText = 'width: 10px; height: 10px; border: solid 1px gray;';

    pixelColumnArray[j].appendChild(pixelRowArray[i]);  
    pixelColumnArray[j].style.display = 'flex'; 
  } 
  column.appendChild(pixelColumnArray[j]);
}

column.style.display = 'flex';
column.style.flexDirection = 'column';

 container.appendChild(column);


