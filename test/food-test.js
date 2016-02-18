var assert = require('chai').assert
var expect = require('chai').expect
var Food = require('../lib/food');
var Board = require('../lib/board');
var Snake = require('../lib/snake');

describe('food', function() {
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  const options = { canvas: canvas, context: ctx }

  it('should be an object', function() {
    var food = new Food(options)
    assert.typeOf(food, 'object');
  })

  it('should be added to board at random x, y', function() {
    const board = new Board(options);
    const food_one = new Food(options);
    const food_two = new Food(options);

    assert.notEqual(food_one.x, food_two.x);
    assert.notEqual(food_one.y, food_two.y);
  })

  it('can be eaten and replaced at new location', function() {
    const board = new Board(options);
    let food = new Food(options);
    let location = [food.x, food.y]

    food.eaten
    food = new Food(options);

    assert.notEqual(location, [food.x, food.y])
  })
});
