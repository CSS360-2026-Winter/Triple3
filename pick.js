const { SlashCommandBuilder } = require('discord.js');
const { userSessions } = require('../state');

const recipes = [
    "Veggie & Egg Fried Rice",
    "One-Pan Quesadilla (or wrap melt)",
    "Garlic Butter (or Olive Oil) Pasta",
    "Microwave Sweet Potato Bowl",
    "Quick Ramen"
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pick')
        .setDescription('Choose a recipe by number')
        .addIntegerOption(option =>
            option.setName('number')
                .setDescription('Recipe number (1–5)')
                .setRequired(true)
        ),

    async execute(interaction) {
        const num = interaction.options.getInteger('number');

        if (num < 1 || num > recipes.length) {
            return interaction.reply("Please choose a number between 1 and 5.");
        }

        const chosen = recipes[num - 1];

        // Save session data for this user
        userSessions.set(interaction.user.id, {
            chosenRecipe: chosen,
            timestamp: Date.now()
        });

        await interaction.reply(`Great choice! You picked **${chosen}**.`);
    }
};
