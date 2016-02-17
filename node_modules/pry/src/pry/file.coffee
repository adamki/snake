fs = require 'fs'
SyncHighlight = require './sync_highlight'


class File

  constructor: (@name, @line) ->
    @line = parseInt(@line)

  type: ->
    if @name.match /coffee$/
      'coffee'
    else
      'js'

  by_lines: (start, end = start) ->
    @content().split('\n').slice(start - 1, end).join('\n')

  content: ->
    @_content ||= fs.readFileSync(@name).toString()

  formatted_content_by_line: (start, end = start, line = @line) ->
    start = (if start < 0 then 0 else start)
    new SyncHighlight(@content(), @type()).code_snippet(start, end, line)

  _getIndentLevel: (line) ->
    line.length - line.trimLeft().length

  getLocalVariables: ->
    lines = @content().split("\n")
    currentIndentLevel = @_getIndentLevel(lines[@line-1]) # eval pry.it
    vars = []
    for i in [@line-2..0] when i > 0
      line = lines[i]
      indentLevel = @_getIndentLevel(line)
      continue if indentLevel > currentIndentLevel
      currentIndentLevel = indentLevel
      match = line.match(/^\s*(?:\[|{)((?:\w+|\,|\s)+)(?:\]|})\s*\=|^\s*(\w+)\s*\=/)
      continue unless match?
      [_, multiple, single] = match
      if multiple?
        for localVar in multiple.split(",")
          vars.push(localVar.trim())
      if single?
        vars.push(single.trim())
    vars


module.exports = File
