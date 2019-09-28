import {pixHeight, pixWidth} from './DOM.js'

const snake = (() => {
    let length = 3;
    let position = [2, 1, 0];
    let direction = 'right';
    const newHeadPosition = () => {
        switch (direction) {
            case 'up':
                if (position[0] < pixWidth) { return position[0] + (pixWidth * pixHeight)-pixWidth; }
                else { return position[0] - pixWidth; }
            case 'down':
                if (position[0] > ((pixWidth * pixHeight)-pixWidth -1)) { return position[0] - ((pixWidth * pixHeight)-pixWidth); }
                else { return position[0] + pixWidth; }
            case 'right':
                if ((position[0] + 1) % pixWidth === 0) { return position[0] - (pixWidth - 1); }
                else { return position[0] + 1; }
            case 'left':
                if (position[0] % pixWidth === 0) { return position[0] + (pixWidth -1); }
                else { return position[0] - 1; }
        }
    }
    const move = () => {
        let newPosition = newHeadPosition();
        if (position.includes(newPosition)) {
            return false;
        }
        else {
            for (let i = 1; i < (length); i++) {
                position[length - i] = position[length - i - 1];
            }
            position[0] = newPosition;
            return true;
        }
    }

    const reset = () => {
        position.splice(0,length);
        length = 3;
        position.push(2);
        position.push(1);
        position.push(0);
        direction = 'right'    
    }

    const eat = (number) => {
        position.unshift(number);
        length++;
    }

    const changeDirection = (string) => {
        if ((direction === 'right' && string !== 'left') || (direction === 'left' && string !== 'right') || (direction === 'up' && string !== 'down') || (direction === 'down' && string !== 'up')) {
            direction = string;
        }
    }

    const getLength = () => {return length;}

    return {
        position,
        move,
        changeDirection,
        eat,
        newHeadPosition,
        reset,
        getLength,
    };
})();

export { snake }