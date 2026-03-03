import { SlashCommandBuilder } from "discord.js";
import { getAllCuisines, getRecipesByCuisine } from "../helpers/cuisineHelper.js";

const cuisines = getAllCuisines();

export default {
  data: new SlashCommandBuilder()
    .setName("cuisine")
    .setDescription("Browse recipes by cuisine")
    .addStringOption(option =>
      option
        .setName("type")
        .setDescription("Select a cuisine")
        .setRequired(true)
        .addChoices(
          ...cuisines.map(c => ({
            name: c,
            value: c
          }))
        )
    ),

  async execute(interaction) {
    const selectedCuisine = interaction.options.getString("type");

    const recipes = getRecipesByCuisine(selectedCuisine);

    if (!recipes.length) {
      return interaction.reply({
        content: "No recipes found for that cuisine.",
        ephemeral: true
      });
    }

    let response = `🍜 **${selectedCuisine} Recipes:**\n\n`;

    recipes.forEach(({ id, recipe }) => {
      response += `**${id}. ${recipe.name}**\n`;
    });

    response +=
      "\nUse `/pick` and enter the recipe number to view instructions.";

    await interaction.reply(response);
  }
};