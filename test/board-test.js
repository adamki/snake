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

  it('should have food', function () {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas};
    const board  = new Board(options);
    assert.typeOf(board.food, 'object');
  });

  it('should have a score', function() {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas};
    const board  = new Board(options);
    assert.equal(board.score, 0);
  });

  it('should have a level', function() {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas};
    const board  = new Board(options);
    assert.equal(board.level, 1);
  });

  it('can add points', function() {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas};
    const board  = new Board(options);
    assert.equal(board.score, 0);

    board.addPoints;
    assert.equal(board.score, 10);
  });

  it('can increase the level', function() {
    var canvas = {fillRect: function(){}};
    var options = {canvas: canvas};
    const board  = new Board(options);
    assert.equal(board.score, 0);
    assert.equal(board.level, 1);

    board.addPoints;
    board.increaseLevel;
    assert.equal(board.score, 10);
    assert.equal(board.level, 1);

    board.addPoints;
    board.increaseLevel;
    assert.equal(board.score, 20);
    assert.equal(board.level, 1);

    board.addPoints;
    board.increaseLevel;
    assert.equal(board.score, 30);
    assert.equal(board.level, 2);
  })
});
