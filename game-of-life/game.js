function getNextBoard(board) {
    const numRows = board.length;
    const numCols = board[0].length;
    const nextBoard = new Array(numRows).fill(null).map(() => new Array(numCols).fill(false));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const numNeighbors = getNumNeighbors(board, i, j);
            if (board[i][j]) {
                if (numNeighbors === 2 || numNeighbors === 3) {
                    nextBoard[i][j] = true;
                }
            } else {
                if (numNeighbors === 3) {
                    nextBoard[i][j] = true;
                }
            }
        }
    }

    return nextBoard;
}

function getNumNeighbors(board, row, col) {
    const numRows = board.length;
    const numCols = board[0].length;
    let numNeighbors = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const r = row + i;
            const c = col + j;
            if (r < 0 || r >= numRows || c < 0 || c >= numCols) continue;
            if (board[r][c]) numNeighbors++;
        }
    }

    return numNeighbors;
}

function startGame(board, ctx) {
    drawBoard(ctx, board);
    setInterval(() => {
        const nextBoard = getNextBoard(board);
        drawBoard(ctx, nextBoard);
        board = nextBoard;
    }, 100);
}

startGame(board1, ctx1);
startGame(board2, ctx2);
startGame(board3, ctx3);
