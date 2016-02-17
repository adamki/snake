const $         = require('jQuery');
const Board     = require('./board.js')
const Snake     = require('./snake.js')
const Food      = require('./food.js')
const Portal    = require('./portal.js')
const canvas    = document.getElementById("canvas");
const ctx       = canvas.getContext('2d');
const direction = 'down'
const options   = { canvas: canvas, context: ctx, direction: direction}

let board    =   new Board(options);
let snake    =   new Snake(options);
let food     =   new Food(options);

let portal_entry  = new Portal(options);
let portal_exit   = new Portal(options);
let portalSet     = {entry: portal_entry, exit: portal_exit}

let speed = 80;

var startTime = -1;
var animationLength = 800000; // Animation length in milliseconds

$(document).ready(function (){
  $('.game').hide();
})

$('.modal-start').on('click',function() {
  $('#modal1').hide();
  $('.game').show();
  keyDownListener();
  animate();
})

$("#vim").on('click', function(){
  if (board.modes.vim === true){
    keyDownListener();
    board.modes.vim = false
  } else{
    vimKeyListener();
    board.modes.vim = true
  }
})

$("#portal").on('click', function(){
  board.modes.portal = true
})

$("#speed").on('click', function(){
  speed = 30
})


$("#toggle-walls").on('click', function(){
  snake.canCollide === true ? snake.canCollide = false : snake.canCollide = true
  $(this).toggleClass('red').text(function(i, val){
     return val === 'Walls: On' ? 'Walls: Off' : 'Walls: On'
  })
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
    if(board.modes.portal === true ){
      portal_entry.draw("blue");
      portal_exit.draw("orange");
      snake.entersPortal(portalSet);
    }
    if (snake.wallDetection === true || snake.collidesWithSelf === true) {
      console.log("YOU CANT EAT YOURSELF")
    } else {
      snakeCollidesWithFood();
      requestAnimationFrame(setTimeout(gameLoop, speed));
    }
  })

};

function keyDownListener() {
  $(document).keydown(function(e) {
    if ((e.keyCode === 37) && snake.direction !== "right") {
      snake.direction = "left";
    } else if ((e.keyCode === 38)&& snake.direction !== "down") {
      snake.direction = "up"
    } else if ((e.keyCode === 39) && snake.direction !== "left") {
      snake.direction = "right"
    } else if ((e.keyCode === 40) && snake.direction !== "up") {
      snake.direction = "down"
    }
  })
}

function vimKeyListener(){
  $(document).keydown(function(e) {
    if ((e.keyCode === 72) && snake.direction !== "right") {
      snake.direction = "left";
    } else if ((e.keyCode === 75)&& snake.direction !== "down") {
      snake.direction = "up"
    } else if ((e.keyCode === 76) && snake.direction !== "left") {
      snake.direction = "right"
    } else if ((e.keyCode === 74) && snake.direction !== "up") {
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
  }
};
