import { SlashCommandBuilder } from "discord.js";
import recipesObj from "../helpers/recipes.js";
import { setUserRecipe } from "../state.js";

// Convert recipes into dropdown choices
const recipeChoices = Object.values(recipesObj).map((recipe, index) => ({
  name: recipe.name,   // what the user sees
  value: String(index + 1) // what we store internally
}));

export default {
  data: new SlashCommandBuilder()
    .setName("pick")
    .setDescription("Choose a recipe from the dropdown")
    .addStringOption(option =>
      option
        .setName("recipe")
        .setDescription("Select a recipe")
        .setRequired(true)
        .addChoices(...recipeChoices)
    ),

  async execute(interaction) {
    const choice = interaction.options.getString("recipe");
    const index = parseInt(choice, 10);

    const recipe = Object.values(recipesObj)[index - 1];

    if (!recipe) {
      return interaction.reply("❌ Invalid recipe selection.");
    }

    setUserRecipe(interaction.user.id, index);

    // Number instructions
    const numberedInstructions = recipe.instructions
      .map((step, i) => `${i + 1}. ${step}`)
      .join("\n");

    let response = `🍽 **${recipe.name}**\n\n`;

    response += `🌍 **Cuisine:** ${recipe.typeOfCuisine}\n`;
    response += `⏱ **Cook Time:** ${recipe.cookTime}\n`;
    response += `👤 **Servings:** ${recipe.servings}\n\n`;

    response += "**🧾 Ingredients:**\n";
    recipe.ingredients.forEach(i => {
      response += `• ${i}\n`;
    });

    response += `\n**👨‍🍳 Instructions:**\n${numberedInstructions}\n`;

    if (recipe.video) {
      response += `\n🎥 **Video Tutorial:**\n${recipe.video}\n`;
    }

    response += "\n⚠️ **If you have ONE of the following allergens:**\n";
    response += "**egg, dairy, gluten, soy**\n";
    response += "Use the `/allergen` command to receive an alternative recipe.";

    await interaction.reply({
      content: response,
      allowedMentions: { parse: [] },
      flags: 1 << 2
    });
  },
};
