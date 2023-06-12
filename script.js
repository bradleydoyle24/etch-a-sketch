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

let pixelWidth = getPixelWidth(16);
let pixelHeight = getPixelHeight(16);

pixel.style.cssText = 'width: 10px; height: 10px; border: solid 1px gray;';
pixel1.style.cssText = 'width: 10px; height: 10px; border: solid 1px gray;';


// pixel.style.height = '' + `${pixelHeight}`;

function getPixelWidth(pixelNumber) {
  let contWidth = container.offsetWidth;
  let pixelWidth = contWidth / pixelNumber;
  return pixelWidth;
}

function getPixelHeight(pixelNumber) {
  let contHeight = container.offsetHeight;
  let pixelHeight = contHeight / pixelNumber;
  return pixelHeight;
}

row.appendChild(pixel);
row.appendChild(pixel1);
row.style.display = 'flex';

container.appendChild(row);