'use strict'
var _ = require('lodash');

class Snake {
  constructor(options) {
    this.x = 10
    this.y = 10
    this.width = 10
    this.height = 10
    this.direction = options.direction
    this.length = 2
    this.nodes = []
    this.context = options.context
  }

  get addNewCoordinates(){
    this.nodes.unshift([this.x, this.y])
  }

  get addNode(){
    for (var i = 0; i < 5; i++) {
    this.nodes.push([this.x, this.y])
    }
  }

  get move() {
    switch (this.direction) {
      case 'down':
        this.y += 10;
        break;
      case 'up':
        this.y -= 10;
        break;
      case 'right':
        this.x += 10;
        break;
      case 'left':
        this.x -= 10;
        break;
    }
  }

  get draw() {
    this.addNewCoordinates;
    this.nodes.forEach(function(node){
      this.context.fillStyle="#00ff00";
      this.context.fillRect(node[0], node[1], 10, 10);
    }.bind(this))
    this.nodes.pop()
  }

  get wallDetection() {
    if (this.x < -5 ) {
      return true;
    } else if (this.x > (canvas.width-5)) {
      return true;
    } else if (this.y < -5) {
      return true
    } else if (this.y > (canvas.height-5)) {
      return true;
    } else {
      return false;
    }
  };

  get collidesWithSelf() {
    if(_.some(this.nodes, [this.x, this.y]) === true) {
      return true;
    }
  }
}

module.exports = Snake;
