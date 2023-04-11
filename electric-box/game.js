// backend
// Define the game grid size
const numRows = 5;
const numCols = 5;

// Define the game board
const board = [];

// Create the game board
for (let row = 0; row < numRows; row++) {
  board[row] = [];
  for (let col = 0; col < numCols; col++) {
    board[row][col] = { type: "empty" };
  }
}

// Add some components to the board
board[0][0] = { type: "battery", orientation: "right" };
board[1][0] = { type: "wire", orientation: "right" };
board[2][0] = { type: "wire", orientation: "right" };
board[2][1] = { type: "wire", orientation: "right" };
board[2][2] = { type: "wire", orientation: "right" };
board[2][3] = { type: "wire", orientation: "right" };
board[2][4] = { type: "bulb", orientation: "left" };

// Render the game board
const gameContainer = document.getElementById("container");
for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numCols; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add(board[row][col].type);
    if (board[row][col].orientation) {
      cell.classList.add(board[row][col].orientation);
    }

    cell.setAttribute("data-row", row);
    cell.setAttribute("data-col", col);
    gameContainer.appendChild(cell);
  }
}

checkBulb();

// frontend

// Add event listeners to the wires
const wires = document.querySelectorAll(".wire");
wires.forEach(wire => {
  wire.addEventListener("click", () => {
    // Change the orientation of the wire
    if (wire.classList.contains("right")) {
      wire.classList.remove("right");
      wire.classList.add("down");
    } else if (wire.classList.contains("down")) {
      wire.classList.remove("down");
      wire.classList.add("left");
    } else if (wire.classList.contains("left")) {
      wire.classList.remove("left");
      wire.classList.add("up");
    } else if (wire.classList.contains("up")) {
      wire.classList.remove("up");
      wire.classList.add("right");
    }
    else {
        wire.classList.add("right");
    }

    // Update the board with the new orientation
    const row = parseInt(wire.dataset.row);
    const col = parseInt(wire.dataset.col);
    if (wire.classList.contains("right")) {
      board[row][col].orientation = "right";
    } else if (wire.classList.contains("down")) {
      board[row][col].orientation = "down";
    } else if (wire.classList.contains("left")) {
      board[row][col].orientation = "left";
    } else if (wire.classList.contains("up")) {
      board[row][col].orientation = "up";
    }

    checkBulb();
  });

  wire.addEventListener("contextmenu", () => {
    wire.className = "cell empty";
    const row = parseInt(wire.dataset.row);
    const col = parseInt(wire.dataset.col);
    board[row][col] = { type: "empty" };

    checkBulb();

    event.preventDefault();
  });
});

// Add event listener to the battery
const battery = document.querySelector(".battery");
battery.addEventListener("click", () => {
  // Change the orientation of the battery
  if (battery.classList.contains("right")) {
    battery.classList.remove("right");
    battery.classList.add("down");
  } else if (battery.classList.contains("down")) {
    battery.classList.remove("down");
    battery.classList.add("left");
  } else if (battery.classList.contains("left")) {
    battery.classList.remove("left");
    battery.classList.add("up");
  } else if (battery.classList.contains("up")) {
    battery.classList.remove("up");
    battery.classList.add("right");
  }

  // Update the board with the new orientation
  const row = parseInt(battery.dataset.row);
  const col = parseInt(battery.dataset.col);
  if (battery.classList.contains("right")) {
    board[row][col].orientation = "right";
  } else if (battery.classList.contains("down")) {
    board[row][col].orientation = "down";
  } else if (battery.classList.contains("left")) {
    board[row][col].orientation = "left";
  } else if (battery.classList.contains("up")) {
    board[row][col].orientation = "up";
  }

  checkBulb();
});


// Check if the bulb is lit up
function checkBulb() {
    const bulb = document.querySelector(".bulb");
    const row = parseInt(bulb.dataset.row);
    const col = parseInt(bulb.dataset.col);
    const inputCell = board[row][col - 1];
    if (inputCell.type === "wire" && inputCell.orientation === "right") {
      bulb.classList.add("lit");
    } else {
      bulb.classList.remove("lit");
    }
  }
