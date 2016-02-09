function Game(canvas, ctx){
  this.canvas = canvas;
  this.ctx = ctx;
  this.snake = new Snake(canvas);
};

module.exports = Game;
