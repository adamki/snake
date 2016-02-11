'use strict'

class Snake {
  constructor(options) {
    this.x = 5
    this.y = 5
    this.width = 10
    this.height = 10
    this.direction = options
    this.length = 1
    this.nodes = []
  }

  get addNewCoordinates(){
    this.nodes.unshift([this.x, this.y])
  }

  get clearTail(){
    var tail = this.nodes[this.nodes.length - 1]
    console.log(tail);
    context.clearRect(tail[0], tail[1],  1, 1)
  }

  get popTail() {
    this.nodes.pop()
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
    var them = this;
    for (var i = 0; i < this.nodes.length - 1; i++) {
      context.fillRect(them.nodes[i][0], them.nodes[i][1], 10, 10);
    }
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
