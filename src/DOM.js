import { snake } from './snake.js'
import {food} from './game.js'

const boardContainer = document.querySelector('#boardContainer')
const overlay = document.querySelector('#overlay');
let pixWidth; //number of columns in the screen grid
let pixHeight; //number of rows in the screen grid

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

function createGrid() { //makes the snake screen into a grid of square div
    clearBoard();
    const width = boardContainer.clientWidth;
    const height = boardContainer.clientHeight;
    const pixSize = Math.min(width, height) / 50;
    pixWidth = Math.floor(width / pixSize);
    pixHeight = Math.floor(height / pixSize);
    const area = pixWidth * pixHeight;
    for (let i = 0; i < area; i++) {
        let newBox = document.createElement('div');
        newBox.className = 'box';
        boardContainer.appendChild(newBox);
    }
    boardContainer.style.display = 'grid';
    const widthString = pixWidth.toString();
    const heightString = pixHeight.toString();
    boardContainer.style.gridTemplateColumns = `repeat(${widthString}, auto)`;
    boardContainer.style.gridTemplateRows = `repeat(${heightString}, auto)`;
}

function renderBoard() {
    let length = snake.getLength();
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(element => {
        element.style.backgroundColor = 'white';
    });
    snake.position.forEach(element => {
        boxes[element].style.backgroundColor = 'black';
    })
    boxes[food].style.backgroundColor = 'red';
    if ((length-3) > 35) {length += 30;}
    let overlayLeft = (length - 3).toString() + '%';
    overlay.style.right = overlayLeft;

}



export { createGrid, renderBoard, renderIntro, renderLoss, pixWidth, pixHeight};