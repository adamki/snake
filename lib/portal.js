'use strict'

class Portal{
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.context= ctx;
    this.x = getRandomIntInclusive(6, canvas.width - 10);
    this.y = getRandomIntInclusive(6, canvas.height - 10);
    this.height = 20;
    this.width  = 20;
  }

  draw(color) {
    this.context.beginPath();
    this.context.arc(this.x, this.y, 20, 0, 2 * Math.PI, false);
    this.context.fillStyle = "rgba(255, 255, 255, 0.2)";
    this.context.fill();
    this.context.lineWidth = 5;
    this.context.strokeStyle = color;
    this.context.stroke();
    return this;
  }
}

function getRandomIntInclusive(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.round(random / 10) * 10;
}

module.exports = Portal;
