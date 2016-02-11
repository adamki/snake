'use strict'
// import { EventEmitter } from 'events';
var Snake = require('../lib/snake');
var Food = require('../lib/food');

class Board {
  constructor(options){
    // super();
    this.canvas = options.canvas;
    this.context = options.context;
    this.snake = new Snake(options);
    this.food = new Food(options);
  }

}

module.exports = Board;
