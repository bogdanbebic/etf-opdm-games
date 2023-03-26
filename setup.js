const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');
const size = 10;
const width = canvas1.width = canvas2.width = canvas3.width = 50 * size;
const height = canvas1.height = canvas2.height = canvas3.height = 50 * size;

function createEmptyBoard(rows, cols) {
    return new Array(rows).fill(null).map(() => new Array(cols).fill(false));
}

function createBoard() {
    let board = createEmptyBoard(50, 50);
    for (let i = 0; i < 1000; i++) {
        let x = Math.floor(Math.random() * 50);
        let y = Math.floor(Math.random() * 50);
        board[x][y] = true;
    }
    return board;
}

let board1 = createBoard();

let board2 = createBoard();
setupGliderGun(board2);

let board3 = createBoard();
setupOscillators(board3);

function drawBoard(ctx, board) {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j]) {
                ctx.fillRect(j * size, i * size, size, size);
            }
        }
    }
}

function setupGliderGun(board) {
    // Clear the board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = 0;
        }
    }

    // Set up the glider gun
    board[5][1] = 1;
    board[5][2] = 1;
    board[6][1] = 1;
    board[6][2] = 1;

    board[3][13] = 1;
    board[3][14] = 1;
    board[4][12] = 1;
    board[4][16] = 1;
    board[5][11] = 1;
    board[5][17] = 1;
    board[6][11] = 1;
    board[6][15] = 1;
    board[6][17] = 1;
    board[6][18] = 1;
    board[7][11] = 1;
    board[7][17] = 1;
    board[8][12] = 1;
    board[8][16] = 1;
    board[9][13] = 1;
    board[9][14] = 1;

    board[1][25] = 1;
    board[2][23] = 1;
    board[2][25] = 1;
    board[3][21] = 1;
    board[3][22] = 1;
    board[4][21] = 1;
    board[4][22] = 1;
    board[5][21] = 1;
    board[5][22] = 1;
    board[6][23] = 1;
    board[6][25] = 1;
    board[7][25] = 1;

    board[3][35] = 1;
    board[3][36] = 1;
    board[4][35] = 1;
    board[4][36] = 1;
}

function setupOscillators(board) {
    // Clear the board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = 0;
        }
    }

    // Set up the blinker
    board[10][10] = 1;
    board[10][11] = 1;
    board[10][12] = 1;

    // Set up the toad
    board[20][20] = 1;
    board[20][21] = 1;
    board[20][22] = 1;
    board[21][19] = 1;
    board[21][20] = 1;
    board[21][21] = 1;

    // Set up the beacon
    board[30][30] = 1;
    board[30][31] = 1;
    board[31][30] = 1;
    board[32][33] = 1;
    board[33][32] = 1;
    board[33][33] = 1;
}
