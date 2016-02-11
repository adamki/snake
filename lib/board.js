// import { EventEmitter } from 'events';
var Snake = require('../lib/snake');
var Food = require('../lib/food');

class Board {
  constructor(canvas, ctx){
    // super();
    this.canvas = canvas;
    this.ctx = ctx;
    this.snake = new Snake(canvas);
    this.food = new Food();
  }

}

module.exports = Board;
