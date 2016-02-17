{inspect} = require '../../libs/better_inspect'

class LocalOutput

  output: []

  send: console.log.bind(console)

  prettySend: ->
    fullOutput = (inspect(arg, false, 2, true) for arg in arguments).join("\n")
    lines = fullOutput.split("\n")
    if lines.length > process.stdout.rows - 2
      console.log lines.slice(0, process.stdout.rows - 3).concat(["more lines here..."]).join("\n")
    else
      console.log fullOutput

  add: (args...) ->
    @output.push args.join(' ')

  sendAll: ->
    @send(@output.join('\n'))
    @output = []


module.exports = LocalOutput
