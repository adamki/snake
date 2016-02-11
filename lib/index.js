const $ = require('jquery');
const Board = require('./board.js')
const Snake = require('./snake.js')

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let board = new Board(canvas, ctx);
let snake = new Snake('down');

keyDownListener();

function animate() {
  requestAnimationFrame(function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.addNewCoordinates;
    snake.draw; // will draw everything
    snake.move;
    // snake.clearTail;
    if (snake.wallDetection === true) {

    } else {
      requestAnimationFrame(gameLoop);
    }
  }
)};

function keyDownListener() {
  $(document).keydown(function(e) {
    if (e.keyCode === 37 && snake.direction !== "right") {
      snake.direction = "left";
    } else if (e.keyCode === 38 && snake.direction !== "down") {
      snake.direction = "up"
    } else if (e.keyCode === 39 && snake.direction !== "left") {
      snake.direction = "right"
    } else if (e.keyCode === 40 && snake.direction !== "up") {
      snake.direction = "down"
    }
  })
}

animate();
