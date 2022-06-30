const container = document.querySelector('#container');
let gridRow = document.createElement('div');
let gridDimensions = document.querySelector('#gridDimensions').value;
const resetButton = document.querySelector('#reset');
const slider = document.querySelector('input');
const display = document.querySelector('#display');
const createGrid = () => {
    for (let i = 0; i < gridDimensions; i++) {
        let gridRow = document.createElement('div');
        container.appendChild(gridRow);
        gridRow.classList.add('row');
        for (let j = 0; j < gridDimensions; j++) {
            let gridSquare = document.createElement('div');
            gridRow.appendChild(gridSquare);
            gridSquare.classList.add('square');
            gridSquare.style.backgroundColor = 'rgb(255, 255, 255)';
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
//shades darker until black
function drawBlack(square) {
    let c = square.style.backgroundColor;
    if (c.length === 18) {
        let r = parseInt(c.substr(4,3));
        let b = parseInt(c.substr(9,3));
        let g = parseInt(c.substr(14,3));
        square.style.backgroundColor = `rgb(${r-25}, ${g-25}, ${b-25})`;
    } else if (c.length === 15){
        let r = parseInt(c.substr(4,2));
        let b = parseInt(c.substr(8,2));
        let g = parseInt(c.substr(12,2));
        square.style.backgroundColor = `rgb(${r-25}, ${g-25}, ${b-25})`;
    } else square.style.backgroundColor = `rgb(0, 0, 0)`;
};

createGrid();

display.innerText = 'Dimensions: ' + gridDimensions + 'x' + gridDimensions;

//draws on mouseover
document.querySelectorAll('.square').forEach(square => 
    square.addEventListener('mouseover', () => drawBlack(square)));

//changes grid dimensions
slider.addEventListener('input', function () {
    gridDimensions = parseInt(document.querySelector('#gridDimensions').value);
    display.innerText = 'Dimensions: ' + gridDimensions + 'x' + gridDimensions;
    removeGrid();
    createGrid();
    document.querySelectorAll('.square').forEach(square =>
        square.addEventListener('mouseover', () => drawBlack(square)));
});

//resets drawing
resetButton.addEventListener('click', () => {
    gridDimensions = parseInt(document.querySelector('#gridDimensions').value);
    removeGrid();
    createGrid();
    document.querySelectorAll('.square').forEach(square => 
        square.addEventListener('mouseover', () => drawBlack(square)));
});