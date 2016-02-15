'use strict'

class Food {
  constructor(options) {
    this.x = getRandomIntInclusive(6, options.canvas.width - 10)
    this.y = getRandomIntInclusive(6, options.canvas.height - 10)
    this.context = options.context
    this.height = 10
    this.width = 10
  }

  get draw() {
    this.context.fillStyle="#FF0000";
    this.context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  get eaten() {
    this.context.clearRect(this.x, this.y, this.width, this.height);
  }
}

function getRandomIntInclusive(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.round(random / 10) * 10;
  }
module.exports = Food;
