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

  checkLocation(portalSet, food, snake){
    var nodes = snake.nodes
    var portals = portalSet

    nodes.push([portalSet.entry[0], portalSet.entry[1]])
    nodes.push([portalSet.exit[0], portalSet.exit[1]])

    if(_.some(nodes, [food.x, food.y]) === true) {
      food.x = getRandomIntInclusive(6, 400 - 10)
      food.y = getRandomIntInclusive(6, 400 - 10)
      this.checkLocation(portals, food, snake)
    }
  }

  get powerUpAble() {
    return true
    // return this.level % 3 == 0
  }

  get enablePowerUp() {
    var modes = ["speed", "toggle-walls", "portal"]
    var power = _.sample(modes)
    this.togglePowerUp(power);
    var that = this;
    setTimeout(function() { that.togglePowerUp(power)}, 5000);
  }
}

Board.prototype.togglePowerUp = function(power) {
  if (power === 'speed') {
      $('#speed').toggleClass('red').text(function(i, val){
         return val === 'Speed: Slow' ? 'Speed: Fast' : 'Speed: Slow'
      })
      return this.modes.speed === 80 ? this.modes.speed = 30 : this.modes.speed = 80
    } else if (power === 'toggle-walls') {
      this.snake.canCollide === true ? this.snake.canCollide = false : this.snake.canCollide = true
      $('#toggle-walls').toggleClass('red').text(function(i, val){
        return val === 'Walls: On' ? 'Walls: Off' : 'Walls: On'
      })
      $(canvas).toggleClass('solid-walls')
    } else if (power === 'portal') {
      this.modes.portals === true ? this.modes.portals = false : this.modes.portals = true
      $('#portal').toggleClass('red').text(function(i, val){
         return val === 'Portals: On' ? 'Portals: Off' : 'Portals: On'
      })
    }
  }

function getRandomIntInclusive(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.round(random / 10) * 10;
}

module.exports = Board;
