/**
 * @file Default Error Message On Error Button Interaction
 */

module.exports = {
  /**
   * @description Executes when the button interaction could not be fetched.
   * @param {import('discord.js').ButtonInteraction}
   * interaction The Interaction Object of the command.
   */

  async execute( interaction ) {
    await interaction.reply({
      content: 'There was an issue while fetching this button!',
      ephemeral: true
    });
  }
};
