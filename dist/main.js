/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/*! exports provided: createGrid, renderBoard, renderIntro, renderLoss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGrid\", function() { return createGrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBoard\", function() { return renderBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderIntro\", function() { return renderIntro; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLoss\", function() { return renderLoss; });\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ \"./src/snake.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\nconst boardContainer = document.querySelector('#boardContainer')\n\nfunction clearBoard(){\n    while(boardContainer.firstChild){\n        boardContainer.removeChild(boardContainer.firstChild);\n    }\n}\n\nfunction renderIntro(){\n    let header = document.createElement('h1');\n    header.textContent = 'Snake';\n    let instructions = document.createElement('p');\n    instructions.textContent = 'press Enter or click start to play';\n    boardContainer.appendChild(header);\n    boardContainer.appendChild(instructions);\n}\n\nfunction renderLoss(){\n    clearBoard();\n    boardContainer.style.display = 'block'\n    let header = document.createElement('h1');\n    header.textContent = 'You lost, noob';\n    let instructions = document.createElement('p');\n    instructions.textContent = 'Press Enter to play again';\n    boardContainer.appendChild(header);\n    boardContainer.appendChild(instructions);\n}\n\nfunction createGrid(width) {\n    clearBoard();\n    let number = width * width;\n    for (let i = 0; i < number; i++) {\n        let newBox = document.createElement('div');\n        newBox.className = 'box';\n        boardContainer.appendChild(newBox);\n    }\n    boardContainer.style.display = 'grid';\n    let widthString = width.toString();\n    boardContainer.style.gridTemplateColumns = `repeat(${widthString}, auto)`;\n    boardContainer.style.gridTemplateRows = `repeat(${widthString}, auto)`;\n}\n\nfunction renderBoard() {\n    let boxes = document.querySelectorAll('.box');\n    boxes.forEach(element => {\n        element.style.backgroundColor = 'white';\n    });\n    _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].position.forEach(element => {\n        boxes[element].style.backgroundColor = 'black';\n    })\n    boxes[_game_js__WEBPACK_IMPORTED_MODULE_1__[\"food\"]].style.backgroundColor = 'red';\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/DOM.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: gameEvents, startEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameEvents\", function() { return gameEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startEvents\", function() { return startEvents; });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\nconst startButton = document.querySelector('#start');\nconst leftButton = document.querySelector('#left');\nconst rightButton = document.querySelector('#right');\nconst upButton = document.querySelector('#up');\nconst downButton = document.querySelector('#down');\n\n\nfunction checkStart(event) {\n    let char = event.key;\n    if (char === 'Enter') {\n        Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"startGame\"])();\n    }\n}\n\nfunction arrowPress(event) {\n    let char = event.key;\n    switch (char) {\n        case 'ArrowRight':\n            Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"changeDirection\"])('right');\n            break;\n        case 'ArrowLeft':\n            Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"changeDirection\"])('left');\n            break;\n        case 'ArrowDown':\n            Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"changeDirection\"])('down');\n            break;\n        case 'ArrowUp':\n            Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"changeDirection\"])('up');\n            break;\n    }\n}\n\nfunction buttonClick(event) {\n    const tar = event.target;\n    let char = tar.id;\n    if (!char){char = tar.parentNode.id }\n    Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"changeDirection\"])(char);\n}\n\nfunction gameEvents() {\n    document.addEventListener('keydown', arrowPress);\n    leftButton.addEventListener('click', buttonClick);\n    rightButton.addEventListener('click', buttonClick);\n    upButton.addEventListener('click', buttonClick);\n    downButton.addEventListener('click', buttonClick);\n\n    document.removeEventListener('keydown', checkStart);\n    startButton.removeEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_0__[\"startGame\"]);\n}\n\nfunction startEvents() {\n    document.addEventListener('keydown', checkStart);\n    document.removeEventListener('keydown', arrowPress);\n    startButton.addEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_0__[\"startGame\"]);\n}\n\n\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: startGame, food, changeDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGame\", function() { return startGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"food\", function() { return food; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeDirection\", function() { return changeDirection; });\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ \"./src/snake.js\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n\n\n\nlet food = 0;\nlet direction = 'down';\nlet timeout;\n\nfunction makeFood() {\n    let food = Math.floor((Math.random() * 2449));\n    while (_snake_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].position.includes(food)) {\n        food = Math.floor((Math.random() * 2449));\n    }\n    return food;\n}\n\nfunction changeDirection(string){\n    direction = string;\n}\n\nfunction gameFlow() {\n    _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].changeDirection(direction);\n    if (_snake_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].newHeadPosition() === food) {\n        _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].eat(food);\n        food = makeFood();\n    }\n    else { \n        let test = _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].move(); \n        if (!test){\n            clearInterval(timeout);\n            Object(_DOM_js__WEBPACK_IMPORTED_MODULE_1__[\"renderLoss\"])();\n            _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].reset();\n            Object(_events_js__WEBPACK_IMPORTED_MODULE_2__[\"startEvents\"])();\n        }\n        else {Object(_DOM_js__WEBPACK_IMPORTED_MODULE_1__[\"renderBoard\"])();}\n    }\n    \n}\n\n\n\nfunction startGame(){\n    Object(_DOM_js__WEBPACK_IMPORTED_MODULE_1__[\"createGrid\"])(50);\n    food = makeFood();\n    Object(_DOM_js__WEBPACK_IMPORTED_MODULE_1__[\"renderBoard\"])();\n    timeout = setInterval(gameFlow,100);\n    Object(_events_js__WEBPACK_IMPORTED_MODULE_2__[\"gameEvents\"])();\n}\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n\n\n\nObject(_DOM_js__WEBPACK_IMPORTED_MODULE_0__[\"renderIntro\"])();\nObject(_events_js__WEBPACK_IMPORTED_MODULE_1__[\"startEvents\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! exports provided: snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snake\", function() { return snake; });\nconst snake = (() => {\n    let length = 3;\n    let position = [125, 75, 25];\n    let direction = 'down';\n    const newHeadPosition = () => {\n        switch (direction) {\n            case 'up':\n                if (position[0] < 50) { return position[0] + 2450; }\n                else { return position[0] - 50; }\n            case 'down':\n                if (position[0] > 2449) { return position[0] - 2450; }\n                else { return position[0] + 50; }\n            case 'right':\n                if ((position[0] + 1) % 50 === 0) { return position[0] - 49; }\n                else { return position[0] + 1; }\n            case 'left':\n                if (position[0] % 50 === 0) { return position[0] + 49; }\n                else { return position[0] - 1; }\n        }\n    }\n    const move = () => {\n        let newPosition = newHeadPosition();\n        if (position.includes(newPosition)) {\n            return false;\n        }\n        else {\n            for (let i = 1; i < (length); i++) {\n                position[length - i] = position[length - i - 1];\n            }\n            position[0] = newPosition;\n            return true;\n        }\n    }\n\n    const reset = () => {\n        position.splice(0,length);\n        length = 3;\n        position.push(125);\n        position.push(75);\n        position.push(25);\n        direction = 'down'    \n    }\n\n    const eat = (number) => {\n        position.unshift(number);\n        length++;\n    }\n\n    const changeDirection = (string) => {\n        if ((direction === 'right' && string !== 'left') || (direction === 'left' && string !== 'right') || (direction === 'up' && string !== 'down') || (direction === 'down' && string !== 'up')) {\n            direction = string;\n        }\n    }\n\n    return {\n        position,\n        move,\n        changeDirection,\n        eat,\n        newHeadPosition,\n        reset,\n    };\n})();\n\n\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ })

/******/ });