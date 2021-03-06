var assert = require('chai').assert
var expect = require('chai').expect
var Snake = require('../lib/snake');
const sinon = require('sinon/pkg/sinon');

describe('snake', function() {
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  const options = { canvas: canvas, context: ctx }

  it('should be an object', function() {
    const snake = new Snake(options)
    assert.typeOf(snake, 'object');
  })

  it('should have correct attributes', function() {
    const snake = new Snake(options)
    assert.equal(snake.x, 10)
    assert.equal(snake.y, 10)
    assert.equal(snake.width, 10)
    assert.equal(snake.height, 10)
  })

  it('should move up', function() {
    const snake = new Snake(options)
    snake.direction = "up"
    snake.move
    assert.equal(snake.y, 0)
  })

  it('should move down', function() {
    const snake = new Snake(options)
    snake.direction = "down"
    snake.move
    assert.equal(snake.y, 20)
  })

  it('should move left', function() {
    const snake = new Snake(options)
    snake.direction = "left"
    snake.move
    assert.equal(snake.x, 0)
  })

  it('should move right', function() {
    const snake = new Snake(options)
    snake.direction = "right"
    snake.move
    assert.equal(snake.x, 20)
  })

  it('can add a node', function() {
    const snake = new Snake(options)
    assert.equal(snake.nodes.length, 0)
    snake.addNode;
    assert.equal(snake.nodes.length, 5)
  })

  it('can collide with itself', function() {
    const snake = new Snake(options)
    snake.nodes = [[10, 20], [10, 30], [10, 40], [10, 50]]
    snake.x = 10;
    snake.y = 50;
    assert.equal(snake.collidesWithSelf, true)
   })
});
