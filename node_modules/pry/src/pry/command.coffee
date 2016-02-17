Range = require('./range')

class Command

  # List of all initialized commands
  @commands = {}

  # The name of your command
  name: ''

  # Aliases of the command
  aliases: []

  # Standard definition of your command
  definition: ''

  # Additional help information and usage.
  help: ''

  # How many arguments you want. Number or range.
  args: new Range(0, 0)

  constructor: ({@scope, @output, @prompt, @app}) ->
    @constructor.commands[@constructor.name] = @

  command: (input) ->
    for name, command of @commands()
      return command if command.constructor.name.match(new RegExp(input, 'i'))

  commands: ->
    @constructor.commands

  typeahead: ->
    items = @aliases.slice(0)
    items.push(@name)
    items

  # Generates a regex based on the info given
  command_regex: ->
    subject = "^(?:#{@name}"
    if @aliases.length > 0
      subject += "|#{@aliases.join('|')}"
    subject += ")((?: (?:[^ ]+))#{@args.to_regex()})$"
    new RegExp(subject)

  match: (input) ->
    input.match(@command_regex())

  find_file: ->
    @app.find_file()


module.exports = Command
