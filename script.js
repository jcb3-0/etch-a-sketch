const container = document.querySelector('#container');
// let gridSquare = document.createElement('div')
let gridRow = document.createElement('div');
// const rows = document.querySelectorAll('.row');
// const squares = document.querySelectorAll('.square');
let gridDimensions = 0;
const gridButton = document.querySelector('#createGrid')

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

gridButton.addEventListener('click', () => {
    gridDimensions = parseInt(document.querySelector('#gridDimensions').value);
    removeGrid();
    createGrid();
    document.querySelectorAll('.square').forEach(square => 
        square.addEventListener('mouseover', () => drawBlack(square)));
    return;
});

//createGrid();

function drawBlack(square) {
    square.style.backgroundColor = 'black';
};

// draw black squares with mouse
document.querySelectorAll('.square').forEach(square => 
    square.addEventListener('mouseover', () => drawBlack(square)));



