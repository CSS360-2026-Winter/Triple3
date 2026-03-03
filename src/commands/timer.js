const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('voicetimer')
    .setDescription('Starts a timer and sends a pop-up image when it ends.')
    .addIntegerOption(option =>
      option
        .setName('minutes')
        .setDescription('Minutes for the timer')
        .setRequired(false)
    )
    .addIntegerOption(option =>
      option
        .setName('seconds')
        .setDescription('Seconds for the timer')
        .setRequired(false)
    ),

  async execute(interaction) {
    const minutes = interaction.options.getInteger('minutes') || 0;
    const seconds = interaction.options.getInteger('seconds') || 0;
    const totalMs = (minutes * 60 + seconds) * 1000;

    if (totalMs <= 0) {
      return interaction.reply('Please enter a valid time greater than 0.');
    }

    await interaction.reply(
      `⏳ Timer started for **${minutes}m ${seconds}s**! I’ll notify you when it ends.`
    );

    setTimeout(async () => {
      const embed = new EmbedBuilder()
        .setTitle('⏰ Time’s up!')
        .setDescription('Your timer has finished.')
        .setColor('#ff5555')
        .setImage('https://t3.ftcdn.net/jpg/01/65/34/94/360_F_165349495_rd5XqVXA2WxELvHD877X1L5r0SmBozBW.jpg'); // Replace with your new URL

      await interaction.followUp({ embeds: [embed] });
    }, totalMs);
  }
};