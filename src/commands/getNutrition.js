import { SlashCommandBuilder } from "discord.js";
import nutrition from "../helpers/nutrition.js";

// Convert nutrition keys into dropdown choices
const recipeChoices = Object.keys(nutrition).map(key => ({
  name: key.replace(/_/g, " "), // prettier label
  value: key                    // actual lookup key
}));

export default {
  data: new SlashCommandBuilder()
    .setName("nutrition")
    .setDescription("Get nutrition info for a recipe")
    .addStringOption(option =>
      option
        .setName("recipe")
        .setDescription("Choose a recipe")
        .setRequired(true)
        .addChoices(...recipeChoices)
    ),

  async execute(interaction) {
    const key = interaction.options.getString("recipe");
    const info = nutrition[key];

    await interaction.reply(
      `**Nutrition for ${key.replace(/_/g, " ")}:**\n` +
      `Calories: ${info.calories}\n` +
      `Protein: ${info.protein}\n` +
      `Carbs: ${info.carbs}\n` +
      `Fat: ${info.fat}`
    );
  },
};
