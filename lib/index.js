const $ = require('jquery');
const Board = require('./board.js')
const Snake = require('./snake.js')

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let board = new Board(canvas, ctx);
let snake = new Snake();

function animate() {
  requestAnimationFrame(function gameLoop() {
    keyDownListener();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw();
    // snake.moveDown;
    if (snake.wallDetection === true) {
    } else {
      requestAnimationFrame(gameLoop);
    }
  }
)};

function keyDownListener() {
  $(document).keydown(function(e) {
    if (e.keyCode === 37) {
      console.log("Left")
      snake.moveLeft;
    } else if (e.keyCode == 38) {
      console.log("Up")
      snake.moveUp;
    } else if (e.keyCode == 39) {
      console.log("Right")
      snake.moveRight;
    } else if (e.keyCode = 40) {
      console.log("Down")
      snake.moveDown;
    }
  })
}

animate();
