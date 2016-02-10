const $ = require('jquery');
const Board = require('./board.js')
const Snake = require('./snake.js')

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let board = new Board(canvas, ctx);
let snake = new Snake();

keyDownListener();

function animate() {
  requestAnimationFrame(function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw(); // will draw everything
    // snake.move(event.direction)
    if (snake.wallDetection === true) {

    } else {
      requestAnimationFrame(gameLoop);
    }
  }
)};

function keyDownListener() {
  $(document).keydown(function(e) {
    if (e.keyCode === 37) {
      // e.snakeDirectionChange(left)
      snake.moveLeft;
    } else if (e.keyCode === 38) {
      snake.moveUp;
    } else if (e.keyCode === 39) {
      snake.moveRight;
    } else if (e.keyCode === 40) {
      snake.moveDown;
    }
  })
}

animate();
