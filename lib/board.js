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
  
  checkLocation(portalSet, food, snake){
    debugger
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
}

function getRandomIntInclusive(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.round(random / 10) * 10;
}


module.exports = Board;
