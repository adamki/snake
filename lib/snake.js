'use strict'
class Snake {
  constructor() {
    this.x = 50
    this.y = 50
    this.width = 10
    this.height = 10
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
}

// d.moveLeft

module.exports = Snake;
