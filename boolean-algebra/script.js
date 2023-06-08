window.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const cells = [];
    const rows = 10;
    const columns = 10;
    let nonClickableCells = [];
  
    // Create grid cells
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell clickable';
        cell.addEventListener('click', toggleCell);
        grid.appendChild(cell);
        cells.push(cell);
      }
    }
  
    // Generate non-clickable cells representing logical gates
    generateNonClickableCells();
  
    function toggleCell() {
      const isClickable = this.classList.contains('clickable');
  
      if (isClickable) {
        this.classList.toggle('on');
      } else {
        return; // Skip further processing for non-clickable cells
      }
  
      checkNonClickableCells();
  
      if (nonClickableCells.every(cell => cell.classList.contains('on'))) {
        alert('Congratulations! You completed the game successfully!');
      }
    }
  
    function getNeighbors(cell) {
      const cellIndex = cells.indexOf(cell);
      const rowIndex = Math.floor(cellIndex / columns);
      const colIndex = cellIndex % columns;
      const neighborIndices = [
        [rowIndex - 1, colIndex], // Top
        [rowIndex + 1, colIndex], // Bottom
        [rowIndex, colIndex - 1], // Left
        [rowIndex, colIndex + 1], // Right
      ];
  
      return neighborIndices
        .filter(([row, col]) => row >= 0 && row < rows && col >= 0 && col < columns)
        .map(([row, col]) => cells[row * columns + col]);
    }
  
    function generateNonClickableCells() {
      const nonClickableCount = Math.floor(cells.length / 5); // Adjust the ratio as needed
  
      for (let i = 0; i < nonClickableCount; i++) {
        const randomIndex = Math.floor(Math.random() * cells.length);
        const cell = cells[randomIndex];

        const gateType = getRandomGateType();

        if (cell.children.length == 0 &&
            !cell.classList.contains('on') &&
            ((gateType === 'and' && !hasAdjacentAndCells(cell) && !isEdgeCell(cell)) || gateType != 'and')) {
          
          const requiredOnCount = gateType === 'and' ? 4 : 1;
  
          cell.classList.remove('clickable');
          cell.dataset.gateType = gateType;
          cell.dataset.requiredOnCount = requiredOnCount;
          cell.appendChild(createTextboxElement(gateType));
  
          nonClickableCells.push(cell);
        } else {
          i--;
        }
      }
    }
  
    function getRandomGateType() {
      return Math.random() < 0.5 ? 'and' : 'or';
    }
  
    function createTextboxElement(text) {
      const textbox = document.createElement('input');
      textbox.className = 'textbox';
      textbox.type = 'text';
      textbox.value = text;
      textbox.readOnly = true;
      textbox.style.backgroundColor = '';
      return textbox;
    }
  
    function checkNonClickableCells() {
        for (let i = 0; i < cells.length; i++){
            for (const nonClickableCell of nonClickableCells) {
                const neighbors = getNeighbors(nonClickableCell);
                const requiredOnCount = Number(nonClickableCell.dataset.requiredOnCount);
                const neighborOnCount = neighbors.reduce((count, cell) => {
                    return count + (cell.classList.contains('on') ? 1 : 0);
                }, 0);
        
                if (neighborOnCount >= requiredOnCount) {
                    nonClickableCell.classList.add('on');
                    nonClickableCell.firstChild.style.backgroundColor = 'yellow';
                } else {
                    nonClickableCell.classList.remove('on');
                    nonClickableCell.firstChild.style.backgroundColor = '';
                }
            }
        }
    }

    function hasAdjacentAndCells(cell) {
        const cellIndex = cells.indexOf(cell);
        const rowIndex = Math.floor(cellIndex / columns);
        const colIndex = cellIndex % columns;

        const adjacentIndices = [
            [rowIndex - 1, colIndex], // Top
            [rowIndex + 1, colIndex], // Bottom
            [rowIndex, colIndex - 1], // Left
            [rowIndex, colIndex + 1], // Right
        ];

        for (const [row, col] of adjacentIndices) {
            if (row >= 0 && row < rows && col >= 0 && col < columns) {
                const adjacentCell = cells[row * columns + col];
                if (adjacentCell.dataset.gateType === 'and') {
                    return true;
                }
            }
        }

        return false;
    }

    function isEdgeCell(cell) {
        const cellIndex = cells.indexOf(cell);
        const rowIndex = Math.floor(cellIndex / columns);
        const colIndex = cellIndex % columns;

        return rowIndex === 0 || rowIndex === rows - 1 || colIndex === 0 || colIndex === columns - 1;
    }

    checkNonClickableCells();
  });
  