/**
 * @file Default Bot Mention Command
 */

const {
  prefix
} = require( '../config.json' );

module.exports = {
  /**
   * @description Executes when the bot is pinged.
   * @param {import('discord.js').Message} message The Message Object of the command.
   */

  async execute( message ) {
    return message.channel.send(
      `Hi ${message.author}! My prefix is \`${prefix}\`, get help by \`${prefix}help\``
    );
  }
};
