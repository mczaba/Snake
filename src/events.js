import { startGame, changeDirection, gamePause, gameRestart } from './game.js'

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

function checkPause(event) {
    let char = event.key;
    if (char === 'Enter'){
        gamePause();
    }
}

function checkRestart(event) {
    let char = event.key;
    if (char === 'Enter'){
        gameRestart();
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
    //Direction changes
    document.addEventListener('keydown', arrowPress);
    leftButton.addEventListener('click', buttonClick);
    rightButton.addEventListener('click', buttonClick);
    upButton.addEventListener('click', buttonClick);
    downButton.addEventListener('click', buttonClick);

    //Pause
    startButton.addEventListener('click', gamePause);
    document.addEventListener('keydown', checkPause);

    //Removing obsolete event listeners
    document.removeEventListener('keydown', checkStart);
    startButton.removeEventListener('click', startGame);
    startButton.removeEventListener('click', gameRestart);
    document.removeEventListener('keydown', checkRestart);

}

function pauseEvents(){
    //adding restart listeners
    startButton.addEventListener('click', gameRestart);
    document.addEventListener('keydown', checkRestart);

    //removing game listeners
    //direction changes
    document.removeEventListener('keydown', arrowPress);
    leftButton.removeEventListener('click', buttonClick);
    rightButton.removeEventListener('click', buttonClick);
    upButton.removeEventListener('click', buttonClick);
    downButton.removeEventListener('click', buttonClick);
    //pause
    startButton.removeEventListener('click', gamePause);
    document.removeEventListener('keydown', checkPause);
}

function startEvents() {
    document.addEventListener('keydown', checkStart);
    startButton.addEventListener('click', startGame);

    document.removeEventListener('keydown', arrowPress);
    leftButton.removeEventListener('click', buttonClick);
    rightButton.removeEventListener('click', buttonClick);
    upButton.removeEventListener('click', buttonClick);
    downButton.removeEventListener('click', buttonClick);
}

export { gameEvents, startEvents, pauseEvents }