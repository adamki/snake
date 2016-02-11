var assert = require('chai').assert
var expect = require('chai').expect
var Food = require('../lib/food');
'use strict'

describe('food', function() {
  it('should be an object', function() {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas.getContext('2d')};
    const food = new Food({});
    assert.typeOf(food, 'object')
  });

  // it.skip('should get eaten', function() {
  //   var canvas = {fillRect: function(){}};
  //   var options = {canvas: canvas.getContext('2d')};
  //   const food = new Food();
  //   original_location = [food.x, food.y]
  //   food.eaten;
  //   const newFood = new Food();
  //   refute.equal original_location, [newFood.x, newFood.y]
  // });
})
