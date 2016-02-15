const $ = require('jquery');
'use strict'
require('./snake-test')
require('./board-test')
require('./food-test')

const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');

function animate() {
    requestAnimationFrame(animate);
  }

  animate();
