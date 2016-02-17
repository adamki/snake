const $ = require('jquery');
'use strict'
require('./snake-test')
require('./board-test')
require('./food-test')

const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');

function animate() {
    requestAnimationFrame(animate);
  }

  animate();

describe('snake collides with food', function() {
  var Snake = require('../lib/snake');
  var Food = require('../lib/food');

  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  const options = { canvas: canvas, context: ctx }

  it('snake should eat when it collides with food', function() {
    const snake = new Snake(options)
    const food = new Food(options)
    food.x = 10;
    food.y = 20;
    snake.direction = "down"
    snake.move
    debugger
  })
})
