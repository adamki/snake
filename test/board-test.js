var assert = require('chai').assert;
var expect = require('chai').expect;
var Board  = require('../lib/board');
'use strict'

describe('board', function() {
  it('should be an object', function() {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas};
    const board = new Board(options);
    assert.typeOf(board, 'object');
  });

  it('should have a canvas', function() {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas};
    const board  = new Board(options);
    assert.typeOf(board.canvas, 'object');
  });

  it('should have a snake', function() {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas};
    const board  = new Board(options);
    assert.typeOf(board.snake, 'object');
  });
});
