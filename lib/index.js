const $ = require('jquery');
const Board = require('./board.js')
const Snake = require('./snake.js')
const Food = require('./food.js')

let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let starting_direction = "down"

let board = new Board({canvas: canvas, context: context, direction: starting_direction} );
let snake = board.snake
let food = board.food

keyDownListener();

function animate() {
  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    food.draw; // will draw everything
    //snake.addNewCoordinates;
    snake.draw; // will draw everything
    snake.move;
    console.log(snake.nodes.length);
    if (snake.wallDetection === true) {

    } else {
      snakeCollidesWithFood();
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
animate();
