const snake = (() => {
    let length = 3;
    let position = [125, 75, 25];
    let direction = 'down';
    const newHeadPosition = () => {
        switch (direction) {
            case 'up':
                if (position[0] < 50) { return position[0] + 2450; }
                else { return position[0] - 50; }
            case 'down':
                if (position[0] > 2449) { return position[0] - 2450; }
                else { return position[0] + 50; }
            case 'right':
                if ((position[0] + 1) % 50 === 0) { return position[0] - 49; }
                else { return position[0] + 1; }
            case 'left':
                if (position[0] % 50 === 0) { return position[0] + 49; }
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
        position.push(125);
        position.push(75);
        position.push(25);
        direction = 'down'    
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

    return {
        position,
        move,
        changeDirection,
        eat,
        newHeadPosition,
        reset,
    };
})();

export { snake }