'use strict'

class Food {
  constructor(options) {
    this.x = getRandomIntInclusive(0, canvas.width - 10)
    this.y = getRandomIntInclusive(0, canvas.height - 10)
    this.height = 10
    this.width = 10
    this.canvas = options.canvas
    this.context = options.context
  }

  get draw() {
    this.context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  get eaten() {
    this.context.clearRect(this.x, this.y, this.width, this.height);
  }
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
module.exports = Food;
