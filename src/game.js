import { snake } from './snake.js'
import { renderBoard, createGrid, renderLoss } from './DOM.js'
import { lostGame} from './events.js';
let food = 0;
let direction = 'right';
let timeout;

function makeFood() {
    let food = Math.floor((Math.random() * 2449));
    while (snake.position.includes(food)) {
        food = Math.floor((Math.random() * 2449));
    }
    return food;
}

function changeDirection(string){
    direction = string;
}

function gameFlow() {
    snake.changeDirection(direction);
    if (snake.newHeadPosition() === food) {
        snake.eat(food);
        food = makeFood();
    }
    else { 
        let test = snake.move(); 
        if (!test){
            clearInterval(timeout);
            renderLoss();
            snake.reset();
            lostGame();
        }
        else {renderBoard();}
    }
    
}

function gamePause() {
    clearInterval(timeout);
    //pauseEvents();
}

function gameRestart() {
    timeout = setInterval(gameFlow, 100);
    //gameEvents();
}



function startGame(){
    console.log("cc");
    createGrid();
    food = makeFood();
    renderBoard();
    timeout = setInterval(gameFlow,100);
    //gameEvents();
}

export {startGame, food, changeDirection, gamePause, gameRestart}