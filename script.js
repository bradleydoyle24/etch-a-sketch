// Create a 16 x 16 square of divs

// Create variable for container
// Create variable for new div
  // Modify CSS stylings for new div?
// Create row/column of divs
// Append to new div
// Append to container

// Number is number of pixels required.  Divide container width (currently not specified)
// by number of pixels to get pixel width.  Return as an array to have 2 return values.
// Compensate for floating-point errors, or rounding??
const container = document.querySelector('.container');
const styles = document.styleSheets

const newDiv = document.createElement('div');

let contWidth = container.offsetWidth;
let contHeight = container.offsetHeight;

function makeSquare() {
  newDiv.style.border = 'solid 1px gray';
  let width = getWidth(contWidth, 16);
  let height = getHeight(contHeight, 16);
  newDiv.style.width = width;
  newDiv.style.height = height;
  container.appendChild(newDiv);
}

function getWidth(contWidth, pixelNumber) {
  let width = contWidth / pixelNumber;
  return width;
}

function getHeight(contHeight, pixelNumber) {
  let height = contHeight / pixelNumber;
  return height;
}



makeSquare();




// Adjust CSS classes to make square div that can be appended to container.

// Container will need flexbox values to control location of divs.

// Create a square div
  // Height and width are ==.
  // Must match width/height of container
    // Width / 16 = length of 1 container
    // Height / 16 = length of 1 container

// Repeat 16x for row
  // iterate through loop
// Then repeat 16x for columns.