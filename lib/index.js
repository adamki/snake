const $ = require('jquery');
const Board = require('./board.js')
const Snake = require('./snake.js')
const Food = require('./food.js')

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let board = new Board(canvas, ctx);
let snake = new Snake('down');
let food = new Food();

keyDownListener();
snakeCollidesWithFood();

function animate() {
  requestAnimationFrame(function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw;
    food.draw; // will draw everything
    snake.move;
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

function snakeCollidesWithFood() {
  snake.bind("EnterFrame", function () {
    if (food.x < snake.x + snake.w &&
       food.x + food.w > snake.x &&
       food.y < snake.y + snake.h &&
       food.h + food.y > snake.y) {
       // collision detected!
       food.eaten;
    } else {
       // no collision
       this.color("blue");
    }
  }
)};
animate();
