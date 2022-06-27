const container = document.querySelector('#container');
// let gridSquare = document.createElement('div')
// let gridRow = document.createElement('div');
const rows = document.querySelectorAll('.row');
// const squares = Array.from(document.querySelectorAll('.square'));
let gridDimensions = prompt("How many squares per side (2 - 100)?");

const createGrid = () => {
    for (let i = 0; i < gridDimensions; i++) {
        let gridRow = document.createElement('div');
        container.appendChild(gridRow);
        gridRow.classList.add('row');
        for (let j = 0; j < gridDimensions; j++) {
            let gridSquare = document.createElement('div');
            gridRow.appendChild(gridSquare);
            gridSquare.classList.add('square');
        }
    }
}
createGrid();

function drawBlack(square) {
    square.style.backgroundColor = 'black';
};

// draw black squares with mouse
document.querySelectorAll('.square').forEach(square => 
    square.addEventListener('mouseover', () => drawBlack(square)));

