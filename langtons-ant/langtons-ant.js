// set up the canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cellSize = 5;
const numRows = Math.floor(canvas.height / cellSize);
const numCols = Math.floor(canvas.width / cellSize);

// define the colors for each state of the cell
const colors = ['#fff', '#000', '#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];

// create the grid
let grid = [];
for (let i = 0; i < numRows; i++) {
  const row = [];
  for (let j = 0; j < numCols; j++) {
    row.push(0);
  }
  grid.push(row);
}

// set up the ant
let antRow = Math.floor(numRows / 2);
let antCol = Math.floor(numCols / 2);
let antDirection = 0;

// update the ant's position and direction based on the color of the cell it's on
function updateAnt() {
  const numStates = colors.length;
  let state = grid[antRow][antCol];
  grid[antRow][antCol] = (state + 1) % numStates;
  antDirection = (antDirection + (state % 2 === 0 ? 1 : -1) + 4) % 4;
  switch (antDirection) {
    case 0: // up
      antRow--;
      break;
    case 1: // right
      antCol++;
      break;
    case 2: // down
      antRow++;
      break;
    case 3: // left
      antCol--;
      break;
  }
}

// draw the grid on the canvas
function drawGrid() {
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const state = grid[i][j];
      ctx.fillStyle = colors[state];
      ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
    }
  }
}

// initialize the grid with random cells
function randomizeGrid() {
  grid = grid.map(row => row.map(() => Math.floor(Math.random() * colors.length)));
  drawGrid();
}

// clear the grid
function clearGrid() {
  grid = grid.map(row => row.map(() => 0));
  drawGrid();
}

// set up the event listener for the start button
const startButton = document.getElementById('start');
startButton.addEventListener('click', () => {
  setInterval(() => {
    updateAnt();
    drawGrid();
  }, 10);
});

// set up the event listener for the randomize button
const randomizeButton = document.getElementById('randomize');
randomizeButton.addEventListener('click', () => {
  randomizeGrid();
});

// set up the event listener for the reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  clearGrid();
});

// draw the initial grid
drawGrid();
