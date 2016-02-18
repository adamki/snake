// import { EventEmitter } from 'events';
var $        = require('jQuery');
var Snake    = require('../lib/snake');
var Food     = require('../lib/food');
var PowerUp  = require('../lib/powerup');

class Board {
  constructor(options){
    // super();
    this.canvas = options.canvas;
    this.ctx = options.context;
    this.snake = new Snake(options);
    this.food = new Food(options);
    this.powerup = new PowerUp(options);
    this.level = 1;
    this.score = 0;
    this.modes = {
      vim : false,
      walls: true,
      portals : false,
      speed : 80,
      powerup : false
    };
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

  get powerUpAble() {
    return this.level % 3 === 0
  }

  get enablePowerUp() {
    var modes = ["#vim", "#speed", "#toggle-walls", "#portal"]
    var power = _.sample(modes)
    $(power).click();
    setTimeout(function() {
      $(power).click();
    }, 5000)
  }
}

module.exports = Board;
