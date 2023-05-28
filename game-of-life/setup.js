const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
// const canvas3 = document.getElementById('canvas3');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
// const ctx3 = canvas3.getContext('2d');
const size = 5;
const boardWidth = 100;
const boardHeight = 100;
const width = canvas1.width = canvas2.width = boardWidth * size;
const height = canvas1.height = canvas2.height = boardHeight * size;

function createEmptyBoard(rows, cols) {
    return new Array(rows).fill(null).map(() => new Array(cols).fill(false));
}

let board1 = setupRandomBoard();
let board2 = setupGliderGunBoardV2();
let board3 = setupStablePufferBoard(boardWidth, boardHeight);

function setupRandomBoard() {
    let board = createEmptyBoard(boardWidth, boardHeight);
    for (let i = 0; i < (boardWidth * boardHeight) / 2; i++) {
        let x = Math.floor(Math.random() * boardWidth);
        let y = Math.floor(Math.random() * boardHeight);
        board[x][y] = true;
    }
    return board;
}

function setupGliderGunBoardV2() {
    let board = createEmptyBoard(boardWidth, boardHeight);
  
   // lower-left square
  board[5][1] = true;
  board[5][2] = true;
  board[6][1] = true;
  board[6][2] = true;

  // lower-left glider
  board[3][13] = true;
  board[3][14] = true;
  board[4][12] = true;
  board[4][16] = true;
  board[5][11] = true;
  board[5][17] = true;
  board[6][11] = true;
  board[6][15] = true;
  board[6][17] = true;
  board[6][18] = true;
  board[7][11] = true;
  board[7][17] = true;
  board[8][12] = true;
  board[8][16] = true;
  board[9][13] = true;
  board[9][14] = true;

  // upper-left glider
  board[1][25] = true;
  board[2][23] = true;
  board[2][25] = true;
  board[3][21] = true;
  board[3][22] = true;
  board[4][21] = true;
  board[4][22] = true;
  board[5][21] = true;
  board[5][22] = true;
  board[6][23] = true;
  board[6][25] = true;
  board[7][25] = true;

  // upper-left square
  board[3][35] = true;
  board[3][36] = true;
  board[4][35] = true;
  board[4][36] = true;

  // upper-right glider gun
  board[5][boardWidth - 1] = true;
  board[5][boardWidth - 2] = true;
  board[6][boardWidth - 1] = true;
  board[6][boardWidth - 2] = true;

  // upper-right glider
  board[3][boardWidth - 13] = true;
  board[3][boardWidth - 14] = true;
  board[4][boardWidth - 12] = true;
  board[4][boardWidth - 16] = true;
  board[5][boardWidth - 11] = true;
  board[5][boardWidth - 17] = true;
  board[6][boardWidth - 11] = true;
  board[6][boardWidth - 15] = true;
  board[6][boardWidth - 17] = true;
  board[6][boardWidth - 18] = true;
  board[7][boardWidth - 11] = true;
  board[7][boardWidth - 17] = true;
  board[8][boardWidth - 12] = true;
  board[8][boardWidth - 16] = true;
  board[9][boardWidth - 13] = true;
  board[9][boardWidth - 14] = true;

  // lower-right glider
  board[1][boardWidth - 25] = true;
  board[2][boardWidth - 23] = true;
  board[2][boardWidth - 25] = true;
  board[3][boardWidth - 21] = true;
  board[3][boardWidth - 22] = true;
  board[4][boardWidth - 21] = true;
  board[4][boardWidth - 22] = true;
  board[5][boardWidth - 21] = true;
  board[5][boardWidth - 22] = true;
  board[6][boardWidth - 23] = true;
  board[6][boardWidth - 25] = true;
  board[7][boardWidth - 25] = true;

  // lower-right square
  board[3][boardWidth - 35] = true;
  board[3][boardWidth - 36] = true;
  board[4][boardWidth - 35] = true;
  board[4][boardWidth - 36] = true;
  
    return board;
  }

function setupGliderGunBoard() {
    let board = createEmptyBoard(boardWidth, boardHeight);

    // lower-left square
    board[5][1] = true;
    board[5][2] = true;
    board[6][1] = true;
    board[6][2] = true;

    // lower-left glider
    board[3][13] = true;
    board[3][14] = true;
    board[4][12] = true;
    board[4][16] = true;
    board[5][11] = true;
    board[5][17] = true;
    board[6][11] = true;
    board[6][15] = true;
    board[6][17] = true;
    board[6][18] = true;
    board[7][11] = true;
    board[7][17] = true;
    board[8][12] = true;
    board[8][16] = true;
    board[9][13] = true;
    board[9][14] = true;

    // upper-left glider
    board[1][25] = true;
    board[2][23] = true;
    board[2][25] = true;
    board[3][21] = true;
    board[3][22] = true;
    board[4][21] = true;
    board[4][22] = true;
    board[5][21] = true;
    board[5][22] = true;
    board[6][23] = true;
    board[6][25] = true;
    board[7][25] = true;

    // upper-left square
    board[3][35] = true;
    board[3][36] = true;
    board[4][35] = true;
    board[4][36] = true;

    return board;
}

function setupStablePufferBoard(boardWidth, boardHeight) {
    let board = createEmptyBoard(boardWidth, boardHeight);
  
    const pufferSize = 10;
    const startX = 10;
    const startY = 10;
  
    // Stable Puffer pattern
    board[startX + 1][startY + 2] = true;
    board[startX + 1][startY + 3] = true;
    board[startX + 2][startY + 1] = true;
    board[startX + 2][startY + 3] = true;
    board[startX + 3][startY + 1] = true;
    board[startX + 3][startY + 4] = true;
    board[startX + 4][startY + 2] = true;
    board[startX + 4][startY + 3] = true;
    board[startX + 5][startY + 3] = true;
    board[startX + 6][startY + 4] = true;
    board[startX + 6][startY + 6] = true;
    board[startX + 7][startY + 4] = true;
    board[startX + 7][startY + 6] = true;
    board[startX + 8][startY + 5] = true;
    board[startX + 9][startY + 2] = true;
    board[startX + 9][startY + 6] = true;
    board[startX + 10][startY + 2] = true;
    board[startX + 10][startY + 6] = true;
    board[startX + 11][startY + 2] = true;
    board[startX + 11][startY + 3] = true;
    board[startX + 11][startY + 4] = true;
    board[startX + 11][startY + 5] = true;
    board[startX + 12][startY + 1] = true;
    board[startX + 12][startY + 6] = true;
    board[startX + 13][startY + 2] = true;
    board[startX + 13][startY + 3] = true;
    board[startX + 13][startY + 4] = true;
    board[startX + 13][startY + 5] = true;
  
    return board;
  }

function setupBeehiveBoard(boardWidth, boardHeight) {
    let board = createEmptyBoard(boardWidth, boardHeight);
  
    const numBeehives = 50;
    const beehiveSize = 5;
  
    for (let i = 0; i < numBeehives; i++) {
      const startX = Math.floor(Math.random() * (boardWidth - beehiveSize));
      const startY = Math.floor(Math.random() * (boardHeight - beehiveSize));
  
      for (let x = 0; x < beehiveSize; x++) {
        for (let y = 0; y < beehiveSize; y++) {
          board[startX + x][startY + y] = true;
        }
      }
    }
  
    return board;
  }

function setupStablePufferBoard() {
    let matrix = createEmptyBoard(boardWidth, boardHeight);

    matrix[10][10] = true;
    matrix[10][11] = true;
    matrix[10][12] = true;
    matrix[11][10] = true;
    matrix[11][12] = true;
    matrix[12][10] = true;
    matrix[12][11] = true;
    matrix[12][12] = true;

    matrix[20][20] = true;
    matrix[21][20] = true;
    matrix[22][20] = true;
    matrix[23][20] = true;
    matrix[24][20] = true;

    matrix[30][30] = true;
    matrix[30][31] = true;
    matrix[30][32] = true;
    matrix[31][31] = true;
    matrix[32][30] = true;

    return matrix;

}

function setupOscillatorsBoard() {
    let board = createEmptyBoard(boardWidth, boardHeight);

    // Set up the blinker
    board[10][10] = true;
    board[10][11] = true;
    board[10][12] = true;

    // Set up the toad
    board[20][20] = true;
    board[20][21] = true;
    board[20][22] = true;
    board[21][19] = true;
    board[21][20] = true;
    board[21][21] = true;

    // Set up the beacon
    board[30][30] = true;
    board[30][31] = true;
    board[31][30] = true;
    board[32][33] = true;
    board[33][32] = true;
    board[33][33] = true;

    return board;
}
