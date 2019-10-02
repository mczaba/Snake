import { startGame, changeDirection, gamePause, gameRestart } from './game.js'

const controls = document.querySelector('#controls');

let gameOn = false;
let gamePaused = false;


function pauseAndStart() {
    if (!gameOn) {
        startGame();
        gameOn = true;
    }
    else {
        if (gamePaused) {
            gameRestart();
            gamePaused = false;
        }
        else {
            gamePause();
            gamePaused = true;
        }
    }
}

function keyPress(event) {
    let char = event.key;
    if (char === 'Enter') {
        pauseAndStart();
    }
    else {
        if (gameOn && !gamePaused) {
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

    }

}

function buttonClick(event) {
    const tar = event.target;
    let char = tar.id;
    if (!char) { char = tar.parentNode.id }
    console.log(char);
    if (char === 'start') {
        pauseAndStart();
    }
    else if (char === 'controls'){
        return
    }
    else {
        if (gameOn && !gamePaused) {
            changeDirection(char);
        }
    }
}

function lostGame() {
    gameOn = false;
}

function startEvents() {
    document.addEventListener('keydown', keyPress);
    controls.addEventListener('click', buttonClick);
}

export {startEvents, lostGame}