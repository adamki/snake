const $ = require('jquery');
const Board = require('./board.js')

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let board = new Board(canvas, ctx);

function animate() {
  board.draw(board);
  requestAnimationFrame(animate);
}

animate();
