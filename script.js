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
const row = document.createElement('div');

pixel.classList.add('pixel');

row.appendChild(pixel);
container.appendChild(row);