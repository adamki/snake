// pry = require('pryjs')

var assert = require('chai').assert
var expect = require('chai').expect

var snake = require('../lib/snake');

describe('snake', function() {
  it('should be an object', function() {
    assert.typeOf(snake, 'object');
  })

  it('should have correct attributes', function() {
    expect(snake).to.have.all.keys('x', 'y', 'height', 'width');
  })
})
// describe('snake', function()  {
//   it('exists')
// })
