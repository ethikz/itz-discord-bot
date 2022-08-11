/**
 * @file Sample play command with slash command.
 */

// Deconstructed the constants we need in this file.

const {
  EmbedBuilder,
  SlashCommandBuilder
} = require( 'discord.js' );

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
  // The data needed to register slash commands to Discord.

  data: new SlashCommandBuilder()
    .setName( 'play' )
    .setDescription(
      'Start a new music quiz'
    )
    .addStringOption( option => option
      .setName( 'url' )
      .setDescription( 'The URL of the Youtube/Soundcloud/Bandcamp/Spotify playlist, album, or artist to play!' )
      .setRequired( true ) )
    .addIntegerOption( option => option
      .setName( 'url' )
      .setDescription( 'The URL of the Youtube/Soundcloud/Bandcamp/Spotify playlist, album, or artist to play!' )
      .setRequired( true ) ),

  async execute( interaction ) {
    /**
     * @type {string}
     * @description The 'url' argument
     */
    let name = interaction.options.getString( 'url' );

    /**
     * @type {EmbedBuilder}
     * @description play command's embed
     */
    const playEmbed = new EmbedBuilder().setColor( 'Random' );

    if ( name ) {
      name = name.toLowerCase();

      // If a single command has been asked for, send only this command's play.

      playEmbed.setTitle( `play for \`${name}\` command` );

      if ( interaction.client.slashCommands.has( name ) ) {
        const command = interaction.client.slashCommands.get( name );

        if ( command.data.description ) {
          playEmbed.setDescription(
            `${command.data.description}\n\n**Parameters:**`
          );
        }
      } else {
        playEmbed
          .setDescription( `No slash command with the name \`${name}\` found.` )
          .setColor( 'Red' );
      }
    } else {
      // Give a list of all the commands

      playEmbed
        .setTitle( 'List of all my slash commands' )
        .setDescription(
          `\`${
            interaction.client.slashCommands
              .map( command => command.data.name )
              .join( '`, `' )
          }\``
        );
    }

    // Replies to the interaction!

    await interaction.reply({
      embeds: [playEmbed]
    });
  }
};
