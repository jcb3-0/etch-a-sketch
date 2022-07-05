const container = document.querySelector('#container');
let gridRow = document.createElement('div');
let gridDimensions = document.querySelector('#gridDimensions').value;
const resetButton = document.querySelector('#reset');
const slider = document.querySelector('input');
const display = document.querySelector('#display');
let black = document.querySelector('#black');
let eraser = document.querySelector('#eraser');

function createGrid() {
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
    draw();
};
function removeGrid() {
    document.querySelectorAll('.row').forEach(row => {
        row.remove();
    });
    document.querySelectorAll('square').forEach(square => {
        square.remove();
    });
};
function toggle(button) {
    if (button.value == 'on') {
        button.value = 'off';
        button.style.backgroundColor = '';
    } else {
        button.style.backgroundColor = 'yellow';
        button.value = 'on';
    }
};
function draw() {
    document.querySelectorAll('.square').forEach(square => 
        square.addEventListener('mouseover', () => {
        if (eraser.value == 'on') {
            square.style.backgroundColor = 'rgb(255, 255, 255)';
        } else if (black.value == 'on') {
            square.style.backgroundColor = `rgb(0, 0, 0)`;
        } else shadeGray(square);
    })
    )
};
function shadeGray(square) {
    let c = square.style.backgroundColor;
    console.log(c);
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

//Event Listeners
slider.addEventListener('input', () => {
    gridDimensions = document.querySelector('#gridDimensions').value;
    display.innerText = 'Dimensions: ' + gridDimensions + 'x' + gridDimensions;
    removeGrid();
    createGrid();
});
resetButton.addEventListener('click', () => {
    gridDimensions = document.querySelector('#gridDimensions').value;
    removeGrid();
    createGrid();
});
black.addEventListener('click', () => toggle(black));
eraser.addEventListener('click', () => toggle(eraser));