const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('timer')
    .setDescription('Start a timer with presets or manual time.')
    
    .addStringOption(option =>
      option
        .setName('mode')
        .setDescription('Choose a timer preset or manual timing')
        .setRequired(true)
        .addChoices(
          { name: '5 Minute Timer', value: '5' },
          { name: '10 Minute Timer', value: '10' },
          { name: '15 Minute Timer', value: '15' },
          { name: 'Manual Timing', value: 'manual' }
        )
    )

    .addIntegerOption(option =>
      option
        .setName('minutes')
        .setDescription('Minutes (only used for manual timing)')
        .setRequired(false)
    )

    .addIntegerOption(option =>
      option
        .setName('seconds')
        .setDescription('Seconds (only used for manual timing)')
        .setRequired(false)
    ),

  async execute(interaction) {

    const mode = interaction.options.getString('mode');

    let totalSeconds;

    if (mode === 'manual') {
      const minutes = interaction.options.getInteger('minutes') || 0;
      const seconds = interaction.options.getInteger('seconds') || 0;

      totalSeconds = minutes * 60 + seconds;

      if (totalSeconds <= 0) {
        return interaction.reply({
          content: 'Please provide minutes or seconds for manual timing.',
          ephemeral: true
        });
      }

    } else {
      totalSeconds = parseInt(mode) * 60;
    }

    const originalSeconds = totalSeconds;

    function formatTime(sec) {
      const mins = Math.floor(sec / 60);
      const secs = sec % 60;
      return `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    }

    function progressBar(current, total, size = 16) {
      const progress = Math.round(((total - current) / total) * size);
      const empty = size - progress;
      return '█'.repeat(progress) + '░'.repeat(empty);
    }

    await interaction.reply(
      `⏳ **${formatTime(totalSeconds)}**\n\`${progressBar(totalSeconds, originalSeconds)}\``
    );

    const interval = setInterval(async () => {
      totalSeconds--;

      if (totalSeconds <= 0) {
        clearInterval(interval);

        const embed = new EmbedBuilder()
          .setTitle('⏰ Time’s up!')
          .setDescription('Your timer has finished.')
          .setColor('#ff5555')
          .setImage('https://t3.ftcdn.net/jpg/01/65/34/94/360_F_165349495_rd5XqVXA2WxELvHD877X1L5r0SmBozBW.jpg');

        await interaction.editReply(`⏰ **00:00**\n\`${progressBar(0, originalSeconds)}\``);
        await interaction.followUp({ embeds: [embed] });
        return;
      }

      await interaction.editReply(
        `⏳ **${formatTime(totalSeconds)}**\n\`${progressBar(totalSeconds, originalSeconds)}\``
      );

    }, 1000);
  }
};