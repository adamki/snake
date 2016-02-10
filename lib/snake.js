'use strict'

class Snake {
  constructor(options) {
    this.x = 50
    this.y = 50
    this.width = 10
    this.height = 10
    this.direction = options
    //this.canvas = options.canvas || {}
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
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
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

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

module.exports = Snake;
