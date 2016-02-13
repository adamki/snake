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

var startTime = -1;
var animationLength = 800000; // Animation length in milliseconds

function animate(timestamp) {
  // Calculate animation progress
  var progress = 0;

  if (startTime < 0) {
      startTime = timestamp;
  } else {
      progress = timestamp - startTime;
  }

  // Do animation ...
  requestAnimationFrame(function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.draw; // will draw everything
    //snake.addNewCoordinates;
    snake.draw; // will draw everything
    snake.move;
    // console.log(snake.nodes.length);
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
  if (food.x < snake.x + snake.width &&
     food.x + food.width > snake.x &&
     food.y < snake.y + snake.height &&
     food.height + food.y > snake.y) {
     // collision detected!
     food.eaten;
     food = new Food();
     snake.addNode;
  } else {
     // no collision
  }
};

requestAnimationFrame(animate);
