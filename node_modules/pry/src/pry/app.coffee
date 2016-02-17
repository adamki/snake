SyncPrompt = require('./sync_prompt')
Output = require('./output/local_output')
commands = require('./commands')
AutoComplete = require('./completion')
File = require('./file')


class App

  _commands: []

  constructor: (@scope, @isStandAlone) ->
    @output = new Output()
    @stack = new Error().stack
    @prompt = new SyncPrompt(typeahead: new AutoComplete(@scope, @find_file()).autocomplete, mode: @find_file().type())
    @prompt.on('data', @find_command)

  commands: ->
    if @_commands.length is 0
      @_commands.push new command({@output, @scope, @prompt, app: @}) for _, command of commands
    @_commands

  find_command: (input, chain) =>
    for command in @commands()
      if match = command.match(input.trim())
        args = String(match[1]).trim().split(' ')
        return command.execute.call command, args, chain
    false

  open: ->
    @prompt.type('whereami') unless @isStandAlone
    @prompt.open()

  find_file: =>
    @file or= do =>
      foundCall = false
      for item in @stack.split('\n')
        if foundCall
          [_, file, line] = item.match(/([^ (:]+):(\d+):\d+/)
          return new File(file, line) if file isnt '<anonymous>'
        else if item.match /Pry\.open/
          foundCall = true
      new File(__filename, 1)


module.exports = App
