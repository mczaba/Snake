import { snake } from './snake.js'

boardContainer = document.querySelector('#boardContainer')
let food = Math.floor((Math.random() * 2449));

function createGrid(width) {
    let number = width * width;
    for (let i = 0; i < number; i++) {
        let newBox = document.createElement('div');
        newBox.className = 'box';
        boardContainer.appendChild(newBox);
    }
    let gridString = '';
    for (let i = 0; i < width; i++) {
        gridString += ' auto';
    }
    boardContainer.style.gridTemplateColumns = gridString;
    boardContainer.style.gridTemplateRows = gridString;
}

function renderBoard() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(element => {
        element.style.backgroundColor = 'white';
    });
    snake.position.forEach(element => {
        boxes[element].style.backgroundColor = 'black';
    })
    boxes[food].style.backgroundColor = 'red';
    //console.log(snake.position);
}


function gameOn(event) {
    if (event.key === 'Enter') {
        document.addEventListener('keydown', (event) => {
            let char = event.key;
            switch (char) {
                case 'ArrowRight':
                    snake.changeDirection('right');
                    break;
                case 'ArrowLeft':
                    snake.changeDirection('left');
                    break;
                case 'ArrowDown':
                    snake.changeDirection('down');
                    break;
                case 'ArrowUp':
                    snake.changeDirection('up');
                    break;
            }
        });
        setInterval(() => {
            if (snake.newHeadPosition() === food) {
                snake.eat(food);
                food = Math.floor((Math.random() * 2449));
            }
            else { snake.move(); }
            renderBoard();
        }, 100);
        document.removeEventListener('keydown', gameOn);
    }
}
function events() {
    document.addEventListener('keydown', gameOn);
   
}

export { createGrid, renderBoard, events };