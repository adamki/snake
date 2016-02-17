Compiler = require('./compiler')

class AutoComplete
  ACCESSOR  = /\s*([\@\w\.]+)(?:\.(\w*))$/
  THISPROP = /\s*(\@)(\w*)/
  SIMPLEVAR = /\s*(\w*)$/i

  KEYWORDS = [
    'undefined', 'then', 'unless', 'until', 'loop', 'of', 'by', 'when', 'require',
    'true', 'false', 'null', 'this', 'new', 'delete', 'typeof', 'in', 'instanceof',
    'return', 'throw', 'break', 'continue', 'if', 'else', 'switch', 'for', 'while',
    'do', 'try', 'catch', 'finally', 'class', 'extends', 'super',
    'whereami', 'kill!', 'exit', 'wtf', 'play', 'version', 'help' # commands
  ].concat(Object.getOwnPropertyNames(global))

  constructor: (@scope, @file) ->
    @localVars = @file.getLocalVariables()
    @compiler = new Compiler({@scope, isCoffee: true})

  autocomplete: (text) =>
    try
      @completeAttribute(text) or @completeVariable(text) or [[], text]
    catch e
      [[], []]

  completeAttribute: (text) ->
    if match = text.match(ACCESSOR) or text.match(THISPROP)
      [all, obj, prefix] = match
      try
        val = @compiler.execute obj
      catch error
        return [[], text]
      completions = @getCompletions prefix, @getPropertyNames val
      [completions, prefix or '']

  completeVariable: (text) ->
    if free = text.match(SIMPLEVAR)?[1]
      globalVars = (key for own key of global when KEYWORDS.indexOf(key) is -1)
      [@getCompletions(free, @localVars.concat(KEYWORDS, globalVars)), free]

  getCompletions: (prefix, candidates) ->
    if prefix
      (el for el in candidates when el.indexOf(prefix) is 0)
    else
      candidates

  getPropertyNames: (obj) ->
    props = (name for own name of obj)
    if typeof obj is 'string'
      props = props.concat Object.getOwnPropertyNames(String.prototype)
    else if obj instanceof Array
      props = props.concat Object.getOwnPropertyNames(Array.prototype)
    else if obj is Object
      props = props.concat Object.getOwnPropertyNames(Object)
    props


module.exports = AutoComplete
