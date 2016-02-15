const $      = require('jQuery');
const Board  = require('./board.js')
const Snake  = require('./snake.js')
const Food   = require('./food.js')
const canvas = document.getElementById("canvas");
const ctx    = canvas.getContext('2d');
const direction = 'down'

const options = { canvas: canvas, context: ctx, direction: direction}
let board    = new Board(options);
let snake    = new Snake(options);
let food     = new Food(options);

var startTime = -1;
var animationLength = 800000; // Animation length in milliseconds

$(document).ready(function (){
  keyDownListener();
  animate();
})

function animate(timestamp) {
  var progress = 0;
  if (startTime < 0) {
      startTime = timestamp;
  } else {
      progress = timestamp - startTime;
  }

  // Do animation ...
  requestAnimationFrame(function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.draw;
    snake.draw;
    snake.move;
    if (snake.wallDetection === true || snake.collidesWithSelf === true) {
      console.log("YOU CANT EAT YOURSELF")
    } else {
      snakeCollidesWithFood();
      requestAnimationFrame(setTimeout(gameLoop, 80));
    }
  })

};

function keyDownListener() {
  $(document).keydown(function(e) {
    if ((e.keyCode === 37 || e.keyCode === 72) && snake.direction !== "right") {
      snake.direction = "left";
    } else if ((e.keyCode === 38 || e.keyCode === 75)&& snake.direction !== "down") {
      snake.direction = "up"
    } else if ((e.keyCode === 39 || e.keyCode === 76) && snake.direction !== "left") {
      snake.direction = "right"
    } else if ((e.keyCode === 40 || e.keyCode === 74) && snake.direction !== "up") {
      snake.direction = "down"
    }
  })
}

function snakeCollidesWithFood() {
  if (food.x < snake.x + snake.width &&
     food.x + food.width > snake.x &&
     food.y < snake.y + snake.height &&
     food.height + food.y > snake.y) {
     // collision detected!
     food.eaten;
     food = new Food(options);
     snake.addNode;
     board.addPoints;
     board.increaseLevel;
  } else {
     // no collision
  }
};
