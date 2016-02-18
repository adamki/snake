var assert = require('chai').assert
var expect = require('chai').expect
var PowerUp = require('../lib/powerup');
var Board = require('../lib/board');

describe('powerup', function() {
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  const options = { canvas: canvas, context: ctx }

  it('should be an object', function() {
    const powerup = new PowerUp(options)
    assert.typeOf(powerup, 'object');
  });

  it('should have correct attributes', function() {
    const powerup = new PowerUp(options)
    assert.typeOf(powerup.x, 'number')
    assert.typeOf(powerup.y, 'number')
    assert.equal(powerup.width, 10)
    assert.equal(powerup.height, 10)
  })

  it('should be added to board at random x, y', function() {
    const board = new Board(options);
    const powerup_one = new PowerUp(options);
    const powerup_two = new PowerUp(options);

    assert.notEqual(powerup_one.x, powerup_two.x);
    assert.notEqual(powerup_one.y, powerup_two.y);
  })

  it('can be eaten and replaced at new location', function() {
    const board = new Board(options);
    let powerup = new PowerUp(options);
    let location = [powerup.x, powerup.y]

    powerup.eaten
    powerup = new PowerUp(options);

    assert.notEqual(location, [powerup.x, powerup.y])
  })
});
