var assert = require('chai').assert
var expect = require('chai').expect

var Snake = require('../lib/snake');

const sinon = require('sinon/pkg/sinon');

describe('snake', function() {

  it('should be an object', function() {
    const snake = new Snake({})
    assert.typeOf(snake, 'object');
  })

  it('should have correct attributes', function() {
    const snake = new Snake({})
    assert.equal(snake.x, 50)
    assert.equal(snake.y, 50)
    assert.equal(snake.width, 10)
    assert.equal(snake.height, 10)
  })

  it('should move up', function() {
    const snake = new Snake({})
    snake.moveUp
    assert.equal(snake.y, 51)
  })

  it('should move down', function() {
    const snake = new Snake({})
    snake.moveDown
    assert.equal(snake.y, 49)
  })

  it('should move left', function() {
    const snake = new Snake({})
    snake.moveLeft
    assert.equal(snake.x, 49)
  })

  it('should move right', function() {
    const snake = new Snake({})
    snake.moveRight
    assert.equal(snake.x, 51)
  })
})

describe('draw()', function() {
  it('should draw itself on the canvas', function(){
    var canvas = { fillRect: function(){} };
    var spy = sinon.spy(canvas, "fillRect");

    var options = {canvas: canvas}

    var snake = new Snake(options);

    snake.draw()

    assert(spy.calledOnce, 'fillRect method was called on canvas context')
    assert(spy.calledWith(0, 0, 10, 20), 'fillRect method was called with unexpected args')
  });
});
// describe('snake', function()  {
//   it('exists')
// })
