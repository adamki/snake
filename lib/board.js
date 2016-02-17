// import { EventEmitter } from 'events';
var $     = require('jQuery');
var Snake = require('../lib/snake');
var Food  = require('../lib/food');

class Board {
  constructor(options){
    // super();
    this.canvas = options.canvas;
    this.ctx = options.context;
    this.snake = new Snake(options);
    this.food = new Food(options);
    this.level = 1;
    this.score = 0;
    this.modes = {
      vim : false,
      walls: true, 
      portals : false,
      speed : 80
    } 
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
