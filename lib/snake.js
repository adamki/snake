'use strict'

class Snake {
  constructor(options) {
    this.x = 50
    this.y = 50
    this.width = 10
    this.height = 10
    this.canvas = options.canvas || {}
  }

  get moveUp() {
    this.y ++
  }

  get moveDown() {
    this.y --
  }

  get moveLeft() {
    this.x --
  }

  get moveRight() {
    this.x ++
  }

  draw() {
    // this.canvas.fillStyle = "#FF0000";
    this.canvas.fillRect(this.x, this.y, this.width, this.height);
  }
}

module.exports = Snake;
