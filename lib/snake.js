'use strict'

class Snake {
  constructor(options) {
    this.x = 5
    this.y = 5
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
    this.nodes.push([this.x, this.y])
  }

  get move() {
    switch (this.direction) {
      case 'down':
        this.y ++;
        break;
      case 'up':
        this.y --;
        break;
      case 'right':
        this.x ++;
        break;
      case 'left':
        this.x --;
        break;
    }
  }

  get moveUp() {
    this.y -= 10;
    this.move(up);
  }

  get moveDown() {
    this.y ++
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

  get draw() {
    this.addNewCoordinates;
    this.nodes.forEach(function(node){
      this.context.fillRect(node[0], node[1], 10, 10);
    }.bind(this))
    this.nodes.pop()
  }

  get wallDetection() {
    if (this.x <= 0 ) {
      return true;
    } else if (this.x >= (canvas.width-10)) {
      return true;
    } else if (this.y <= 0) {
      return true
    } else if (this.y >= (canvas.height-10)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Snake;
