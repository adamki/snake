var assert = require('chai').assert;
var expect = require('chai').expect;
var Board  = require('../lib/board');
const sinon = require('sinon/pkg/sinon');

'use strict'

describe('board', function() {

  it('should be an object', function() {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    const options = { canvas: canvas, context: ctx }

    const board = new Board(options);

    assert.typeOf(board, 'object');
  });

  it('should have a canvas', function() {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas};
    var board  = new Board(options);
    assert.typeOf(board.canvas, 'object');
  });

  it('should have a snake', function() {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas};
    const board  = new Board(options);
    assert.typeOf(board.snake, 'object');
  });
});
