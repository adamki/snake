'use strict'


class Snake {
  constructor(options) {
    this.x = 50
    this.y = 50
    this.width = 10
    this.height = 10
    //this.canvas = options.canvas || {}
  }

  get moveUp() {
    this.y ++
    return this;
  }

  get moveDown() {
    this.y --
    return this;
  }

  get moveLeft() {
    this.x --
    return this;
  }

  get moveRight() {
    this.x ++
    return this;
  }
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

Snake.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
}

module.exports = Snake;
