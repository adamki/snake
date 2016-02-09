const $ = require('jquery');
const Board = require('./board.js')
const Snake = require('./snake.js')

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let board = new Board(canvas, ctx);
let snake = new Snake();

function animate() {
  requestAnimationFrame(function gameLoop() {
    snake.draw()
    snake.moveUp;
    requestAnimationFrame(gameLoop);
  }
)}
animate();
