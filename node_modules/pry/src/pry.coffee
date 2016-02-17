#!/usr/bin/env node
App = require('./pry/app')

class Pry

  constructor: ({@isStandAlone} = {}) ->
    @it = "(#{@_pry.toString()}).call(this)"

  _pry: ->
    _ = null
    pry.open ((input) ->
      _ = eval(input)
    ).bind(@)

  open: (scope) ->
    app = new App(scope, @isStandAlone)
    app.open()


module.exports = new Pry


if require.main is module
  eval (pry = new Pry(isStandAlone: true)).it
