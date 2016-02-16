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
    this.canCollide = false
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
      return  this.canCollide == true ?  true  : this.x = (canvas.width + 5) 
    } else if (this.x > (canvas.width - 5)) {
      return  this.canCollide == true ?  true  : this.x = 0 
    } else if (this.y < -5) {
      return  this.canCollide == true ?  true  : this.y = canvas.height + 5
    } else if (this.y > (canvas.height-5)) {
      return  this.canCollide == true ?  true  : this.y = 0
    }   
  };

  get collidesWithSelf() {
    if(_.some(this.nodes, [this.x, this.y]) === true) {
      return true;
    }
  }

  entersPortal(portalSet){
    var blue    = portalSet.entry; 
    var orange  = portalSet.exit; 

    if (blue.x < this.x + this.width && 
        blue.x + blue.width > this.x &&
        blue.y < this.y + this.height &&
        blue.height + blue.y > this.y) {
      this.clearPortal(orange);
    } 

    if(orange.x < this.x + this.width && 
       orange.x + orange.width > this.x &&
       orange.y < this.y + this.height && 
       orange.height + orange.y > this.y){
      this.clearPortal(blue);
    }
  }

  clearPortal(exit){
    switch (this.direction) {
      case 'down':
        this.x = exit.x;
        this.y = (exit.y + 20);
        break;
      case 'up':
        this.x = exit.x;
        this.y = (exit.y - 20);
        break;
      case 'right':
        this.y = exit.y;
        this.x = (exit.x + 20);
        break;
      case 'left':
        this.y = exit.y;
        this.x = (exit.x - 20);
        break;
    }
  }
}

module.exports = Snake;
