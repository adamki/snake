// import { EventEmitter } from 'events';
var Snake = require('../lib/snake');

class Board {
  constructor(canvas, ctx){
    // super();
    this.canvas = canvas;
    this.ctx = ctx;
    this.snake = new Snake(canvas);
  }
}

module.exports = Board;
