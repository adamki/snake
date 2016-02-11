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
    assert.equal(snake.x, 5)
    assert.equal(snake.y, 5)
    assert.equal(snake.width, 10)
    assert.equal(snake.height, 10)
  })

  it('should move up', function() {
    const snake = new Snake({})
    snake.direction = "up"
    snake.move
    assert.equal(snake.y, 4)
  })

  it('should move down', function() {
    const snake = new Snake({})
    snake.direction = "down"
    snake.move
    assert.equal(snake.y, 6)
  })

  it('should move left', function() {
    const snake = new Snake({})
    snake.direction = "left"
    snake.move
    assert.equal(snake.x, 4)
  })

  it('should move right', function() {
    const snake = new Snake({})
    snake.direction = "right"
    snake.move
    assert.equal(snake.x, 6)
  })
})

describe('draw()', function() {
  it('should draw itself on the canvas', function(){
    var canvas = { fillRect: function(){} };
    var spy = sinon.spy(canvas, "fillRect");
    var options = {canvas: canvas, x: 0, y: 0, height: 20, width: 10}
    var snake = new Snake(options);

    snake.draw()

    assert(spy.calledOnce, 'fillRect method was called on canvas context')
    assert(spy.calledWith(5, 5, 10, 10), 'fillRect method was called with unexpected args')
  });
});
