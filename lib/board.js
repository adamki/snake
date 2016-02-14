// import { EventEmitter } from 'events';
var $     = require('jQuery');
var Snake = require('../lib/snake');
var Food  = require('../lib/food');

class Board {
  constructor(canvas, ctx){
    // super();
    this.canvas = canvas;
    this.ctx = ctx;
    this.snake = new Snake(canvas);
    this.food = new Food();
    this.level = 1;
    this.score = 0;
  }

  get addPoints() {
    this.score += 10 * this.level
    var score = this.score
    $("#current-score").text(this.score)
  }

  get increaseLevel() {
    if(this.score % 3 == 0 && this.score != 0) {
      this.level += 1
      $("#current-level").text(this.level)
    }
  }

}

module.exports = Board;
