'use strict'

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

class Food {
  constructor() {
    this.x = getRandomIntInclusive(0, canvas.width - 10)
    this.y = getRandomIntInclusive(0, canvas.height - 10)
    this.height = 10
    this.width = 10
  }

  get draw() {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  get eaten() {
    context.clearRect(this.x, this.y, this.width, this.height);
  }
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
module.exports = Food;
