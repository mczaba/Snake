import { snake } from './snake.js'
import {food} from './game.js'

const boardContainer = document.querySelector('#boardContainer')

function clearBoard(){
    while(boardContainer.firstChild){
        boardContainer.removeChild(boardContainer.firstChild);
    }
}

function renderIntro(){
    let header = document.createElement('h1');
    header.textContent = 'Snake';
    let instructions = document.createElement('p');
    instructions.textContent = 'press Enter or click start to play';
    boardContainer.appendChild(header);
    boardContainer.appendChild(instructions);
}

function renderLoss(){
    clearBoard();
    boardContainer.style.display = 'block'
    let header = document.createElement('h1');
    header.textContent = 'You lost, noob';
    let instructions = document.createElement('p');
    instructions.textContent = 'Press Enter to play again';
    boardContainer.appendChild(header);
    boardContainer.appendChild(instructions);
}

function createGrid(width) {
    clearBoard();
    let number = width * width;
    for (let i = 0; i < number; i++) {
        let newBox = document.createElement('div');
        newBox.className = 'box';
        boardContainer.appendChild(newBox);
    }
    boardContainer.style.display = 'grid';
    let widthString = width.toString();
    boardContainer.style.gridTemplateColumns = `repeat(${widthString}, auto)`;
    boardContainer.style.gridTemplateRows = `repeat(${widthString}, auto)`;
}

function renderBoard() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(element => {
        element.style.backgroundColor = 'white';
    });
    snake.position.forEach(element => {
        boxes[element].style.backgroundColor = 'black';
    })
    boxes[food].style.backgroundColor = 'red';
}



export { createGrid, renderBoard, renderIntro, renderLoss};