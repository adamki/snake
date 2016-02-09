const $ = require('jquery');
const Game = require('./game.js')

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let game = new Game(canvas, ctx);

function animate() {
  game.draw(game);
  requestAnimationFrame(animate);
}

animate();
