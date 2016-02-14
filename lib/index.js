const $      = require('jQuery');
const Board  = require('./board.js')
const Snake  = require('./snake.js')
const Food   = require('./food.js')
const Portal = require('./portal.js')
const canvas = document.getElementById("canvas");
const ctx    = canvas.getContext('2d');
             
let board    = new Board(canvas, ctx);
let snake    = new Snake('down');
let food     = new Food();
let portal_entry  = new Portal(canvas, ctx);
let portal_exit   = new Portal(canvas, ctx);
let portalSet    = {entry: portal_entry, exit: portal_exit}

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
    portal_entry.draw("blue");
    portal_exit.draw("orange");
    if (snake.wallDetection === true || snake.collidesWithSelf === true) {
      console.log("YOU CANT EAT YOURSELF")
    } else {
      snake.entersPortal(portalSet)
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
     food = new Food();
     snake.addNode;
     board.addPoints;
     board.increaseLevel;
  }
};


