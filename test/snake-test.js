// pry = require('pryjs')

var assert = require('chai').assert
var expect = require('chai').expect

var Snake = require('../lib/snake');

describe('snake', function() {

  it('should be an object', function() {
    const snake = new Snake
    assert.typeOf(snake, 'object');
  })

  it('should have correct attributes', function() {
    const snake = new Snake
    assert.equal(snake.x, 50)
    assert.equal(snake.y, 50)
    assert.equal(snake.width, 10)
    assert.equal(snake.height, 10)
  })

  it('should move up', function() {
    const snake = new Snake
    snake.moveUp
    assert.equal(snake.y, 51)
  })

  it('should move down', function() {
    const snake = new Snake
    snake.moveDown
    assert.equal(snake.y, 49)
  })

  it('should move left', function() {
    const snake = new Snake
    snake.moveLeft
    assert.equal(snake.x, 49)
  })

  it('should move right', function() {
    const snake = new Snake
    snake.moveRight
    assert.equal(snake.x, 51)
  })
})
// describe('snake', function()  {
//   it('exists')
// })
