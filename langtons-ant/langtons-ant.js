// set up the canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cellSize = 5;
const numRows = Math.floor(canvas.height / cellSize);
const numCols = Math.floor(canvas.width / cellSize);

// define the colors for each state of the cell
const colors = ['#fff', '#00f', '#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];

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
let antRow;
let antCol;
let antDirection;
let currentSpeed;
let currentNumStates;
let maxSpeed = 128;
let isRunning = false;

// set ant initial state
function setInitialState()
{
    antRow = Math.floor(numRows / 2);
    antCol = Math.floor(numCols / 2);
    antDirection = 0;

    currentSpeed = 1;
    updateSpeedText(currentSpeed);

    currentNumStates = 2;
    updateNumStates(currentNumStates);

    isRunning = false;
}

// update the ant's position and direction based on the color of the cell it's on
function updateAnt() {
    const numStates = currentNumStates;
    let state = grid[antRow][antCol];
    grid[antRow][antCol] = (state + 1) % numStates;
    antDirection = calculate_ant_direction(antDirection, state);
    switch (antDirection) {
        case 0: // up
            antRow = antRow == 0 ? numRows - 1 : antRow - 1;
            break;
        case 1: // right
            antCol = antCol == numCols - 1 ? 0 : antCol + 1;
            break;
        case 2: // down
            antRow = antRow == numRows - 1 ? 0 : antRow + 1;
            break;
        case 3: // left
            antCol = antCol == 0 ? numCols - 1 : antCol - 1;
            break;
    }
}

function calculate_ant_direction(currentAntDirection, state) {
    return (currentAntDirection + (state % 2 === 0 ? 1 : -1) + 4) % 4;
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
    isRunning = true;

    setInterval(() => {
        if (!isRunning) {
            return;
        }

        for (let i = 0; i < currentSpeed; i++)
            updateAnt();
        drawGrid();
    }, 10);
});

// set up the event listener for the randomize button
// const randomizeButton = document.getElementById('randomize');
// randomizeButton.addEventListener('click', () => {
//     randomizeGrid();
// });

// set up the event listener for the reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    setInitialState()
    clearGrid();
});

// set up the event listener for the stop button
const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => {
    isRunning = false;
});

// set up the event listener for the speedUp button
const speedUpButton = document.getElementById('speedUp');
speedUpButton.addEventListener('click', () => {
    if (currentSpeed < maxSpeed) {
        currentSpeed *= 2;
        updateSpeedText(currentSpeed);
    }
});

// set up the event listener for the slowDown button
const slowDownButton = document.getElementById('slowDown');
slowDownButton.addEventListener('click', () => {
    if (currentSpeed > 1) {
        currentSpeed /= 2;
        updateSpeedText(currentSpeed);
    }
});

// set up the event listener for the increaseStateCount button
const increaseStateCountButton = document.getElementById('increaseStateCount');
increaseStateCountButton.addEventListener('click', () => {
    if (currentNumStates < colors.length) {
        currentNumStates++;
        updateNumStates(currentNumStates);
    }
});

// set up the event listener for the decreaseStateCount button
const decreaseStateCountButton = document.getElementById('decreaseStateCount');
decreaseStateCountButton.addEventListener('click', () => {
    if (currentNumStates > 2) {
        currentNumStates--;
        updateNumStates(currentNumStates);
    }
});

// set up the function for the maxNumStates
function updateSpeedText(currentSpeed) {
    const currentSpeedText = document.getElementById('currentSpeed');
    currentSpeedText.textContent = "Speed: " + currentSpeed;
}

// set up the function for the maxNumStates
function updateNumStates(currentNumStates) {
    const maxNumStatesText = document.getElementById('maxNumStates');
    maxNumStatesText.textContent = "Number of States: " + currentNumStates;
}

// draw the initial grid
drawGrid();
setInitialState()
