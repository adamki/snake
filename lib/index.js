const $         = require('jQuery');
const Board     = require('./board.js')
const Snake     = require('./snake.js')
const Food      = require('./food.js')
const Portal    = require('./portal.js')
const PowerUp   = require('./powerup.js')
const canvas    = document.getElementById("canvas");
const ctx       = canvas.getContext('2d');
const direction = 'down'
const options   = { canvas: canvas, context: ctx, direction: direction}

let board    = new Board(options);
let snake    = new Snake(options);
let food     = new Food(options);
let powerup  = new PowerUp(options)

let portal_entry  = new Portal(options);
let portal_exit   = new Portal(options);
let portalSet     = {entry: portal_entry, exit: portal_exit}
let speed         = board.modes.speed

var startTime = -1;
var animationLength = 800000; // Animation length in milliseconds
var audio = new Audio('audio/snake.mp3');

$(document).ready(function (){
  audio.play();
  $('.game').hide();
  $('.game-over').hide()
})

$('.modal-start').on('click',function() {
  $('#modal1').hide();
  $('.game').show();
  keyDownListener();
  animate();
})

function animate() {
  requestAnimationFrame(gameLoop)
};

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  food.draw;
  snake.draw;
  snake.move;
  if(board.modes.portals === true ){
    portal_entry.draw("#7DD6F0"); //blue
    portal_exit.draw("#FFA500"); //orange
    snake.entersPortal(portalSet);
  }
  if(board.modes.powerup === true){
    powerup.draw
  }
  if (snake.wallDetection === true || snake.collidesWithSelf === true) {
    saveScore();
    gameOver();
  } else {
    snakeCollidesWithFood();
    snakeCollidesWithPowerUp();
    setTimeout(gameLoop, board.modes.speed);
  }
}

function gameOver() {
  $('.game').hide()
  $('.game-buttons').hide()
  $('.game-over').show()
  $('.high-scores').append(
    '<li>' + localStorage.getItem("highscore") + '</li>' +
    '<li>' + localStorage.getItem("midscore") + '</li>' +
    '<li>' + localStorage.getItem("lowscore") + '</li>'
  )
}

$("#vim").on('click', function(){
  board.modes.vim === true ? board.modes.vim = false : board.modes.vim = true
  $(this).toggleClass('red').text(function(i, val){
     return val === 'Directions: STD' ? 'Directions: VIM' : 'Directions: STD'
  })
  return keyDownListener();
})

$("#portal").on('click', function(){
  board.modes.portals === true ? board.modes.portals = false : board.modes.portals = true
  $(this).toggleClass('red').text(function(i, val){
     return val === 'Portals: On' ? 'Portals: Off' : 'Portals: On'
  })
})

$("#speed").on('click', function(){
  console.log(board.modes.speed);
  $(this).toggleClass('red').text(function(i, val){
     return val === 'Speed: Slow' ? 'Speed: Fast' : 'Speed: Slow'
  })
  return board.modes.speed === 80 ? board.modes.speed = 30 : board.modes.speed = 80
})

$("#toggle-walls").on('click', function(){
  snake.canCollide === true ? snake.canCollide = false : snake.canCollide = true
  $(this).toggleClass('red').text(function(i, val){
    return val === 'Walls: On' ? 'Walls: Off' : 'Walls: On'
  })
  $(canvas).toggleClass('solid-walls')
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
    if(board.modes.portals === true ){
      portal_entry.draw("#7DD6F0"); //blue
      portal_exit.draw("#FFA500"); //orange
      snake.entersPortal(portalSet);
    }
    if (snake.wallDetection === true || snake.collidesWithSelf === true) {
      saveScore();
      gameOver();
    } else {
      snakeCollidesWithFood();
      requestAnimationFrame(setTimeout(gameLoop, board.modes.speed));
    }
  })

};

function saveScore() {
  var highscore = localStorage.getItem("highscore");
  var midscore = localStorage.getItem("midscore");
  var lowscore = localStorage.getItem("lowscore");
  var gameScore = board.score
  if (highscore !== null) {
    if (gameScore > highscore) {
      localStorage.setItem( "highscore", gameScore );
    } else if (gameScore > midscore) {
      localStorage.setItem( "midscore", gameScore );
    } else if (gameScore > lowscore) {
      localStorage.setItem("lowscore", gameScore);
    }
  } else {
    localStorage.setItem( "highscore", gameScore );
  }
}

function keyDownListener() {
  if (board.modes.vim === false ) {
    $(document).off();
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
  if (board.modes.vim === true){
    $(document).off();
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
}

function snakeCollidesWithFood() {
  if (food.x < snake.x + snake.width &&
     food.x + food.width > snake.x &&
     food.y < snake.y + snake.height &&
     food.height + food.y > snake.y) {
     // collision detected!
     food.eaten;
     food = new Food(options);
     board.checkLocation(portalSet, food, snake);
     snake.addNode;
     board.addPoints;
     board.increaseLevel;
     if (board.powerUpAble === true ) {
       board.modes.powerup = true
     }
   }
};

function snakeCollidesWithPowerUp() {
  if (powerup.x < snake.x + snake.width &&
     powerup.x + powerup.width > snake.x &&
     powerup.y < snake.y + snake.height &&
     powerup.height + powerup.y > snake.y) {
     // collision detected!
     board.modes.powerup = false;
     board.enablePowerUp
  }
};
