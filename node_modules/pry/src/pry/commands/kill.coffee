Command = require('../command')

class Kill extends Command

  name: 'kill!'
  aliases: ['kill', 'exit!', 'quit!', 'stop!', 'exit.p']
  definition: 'Exits from the entire script.'

  execute: (args, chain) ->
    chain.stop()
    process.exit()
    false

module.exports = Kill
