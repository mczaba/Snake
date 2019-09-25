import { startGame, changeDirection } from './game.js'

const startButton = document.querySelector('#start');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const upButton = document.querySelector('#up');
const downButton = document.querySelector('#down');


function checkStart(event) {
    let char = event.key;
    if (char === 'Enter') {
        startGame();
    }
}

function arrowPress(event) {
    let char = event.key;
    switch (char) {
        case 'ArrowRight':
            changeDirection('right');
            break;
        case 'ArrowLeft':
            changeDirection('left');
            break;
        case 'ArrowDown':
            changeDirection('down');
            break;
        case 'ArrowUp':
            changeDirection('up');
            break;
    }
}

function buttonClick(event) {
    const tar = event.target;
    let char = tar.id;
    if (!char){char = tar.parentNode.id }
    changeDirection(char);
}

function gameEvents() {
    document.addEventListener('keydown', arrowPress);
    leftButton.addEventListener('click', buttonClick);
    rightButton.addEventListener('click', buttonClick);
    upButton.addEventListener('click', buttonClick);
    downButton.addEventListener('click', buttonClick);

    document.removeEventListener('keydown', checkStart);
    startButton.removeEventListener('click', startGame);
}

function startEvents() {
    document.addEventListener('keydown', checkStart);
    document.removeEventListener('keydown', arrowPress);
    startButton.addEventListener('click', startGame);
}

export { gameEvents, startEvents }