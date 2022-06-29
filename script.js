const container = document.querySelector('#container');
// let gridSquare = document.createElement('div')
let gridRow = document.createElement('div');
// const rows = document.querySelectorAll('.row');
// const squares = document.querySelectorAll('.square');
let gridDimensions = document.querySelector('#gridDimensions').value;
const resetButton = document.querySelector('#reset');
const slider = document.querySelector('input');
const display = document.querySelector('#display');

display.innerText = 'Dimensions: ' + gridDimensions + 'x' + gridDimensions;

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

const removeGrid = () => {
    document.querySelectorAll('.row').forEach(row => {
        row.remove();
    });
    document.querySelectorAll('square').forEach(square => {
        square.remove();
    });
}

resetButton.addEventListener('click', () => {
    gridDimensions = parseInt(document.querySelector('#gridDimensions').value);
    removeGrid();
    createGrid();
    document.querySelectorAll('.square').forEach(square => 
        square.addEventListener('mouseover', () => drawBlack(square)));
    return;
});

createGrid();
slider.addEventListener ('input', function() {
    gridDimensions = parseInt(document.querySelector('#gridDimensions').value);
    display.innerText = 'Dimensions: ' + gridDimensions + 'x' + gridDimensions;
    removeGrid();
    createGrid();
    document.querySelectorAll('.square').forEach(square => 
        square.addEventListener('mouseover', () => drawBlack(square)));
    //return;
});

// slider.oninput = function() {
//     display.innerText = 'Dimensions: ' + gridDimensions + 'x' + gridDimensions;
// };


// draw black squares with mouse
function drawBlack(square) {
    square.style.backgroundColor = 'black';
};
document.querySelectorAll('.square').forEach(square => 
    square.addEventListener('mouseover', () => drawBlack(square)));



