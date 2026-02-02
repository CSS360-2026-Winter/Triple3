import { SlashCommandBuilder } from "discord.js";
import recipesObj from "../helpers/recipes.js";
import { setUserRecipe } from "../state.js";

const recipesArray = [
  null,
  ...Object.values(recipesObj)
];

export default {
  data: new SlashCommandBuilder()
    .setName("pick")
    .setDescription("Select a recipe by number")
    .addIntegerOption(option =>
      option
        .setName("number")
        .setDescription("The recipe number from 1–5")
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(recipesArray.length - 1)
    ),

  async execute(interaction) {
    const choice = interaction.options.getInteger("number");
    const recipe = recipesArray[choice];

    if (!recipe) {
      return interaction.reply("❌ Invalid recipe number. Please pick 1–5.");
    }

    setUserRecipe(interaction.user.id, choice);

    let response = `🍽 **${recipe.name}**\n\n`;

    response += "**Ingredients:**\n";
    recipe.ingredients.forEach(i => {
      response += `• ${i}\n`;
    });

    response += "\n**Instructions:**\n";
    recipe.instructions.forEach((step, i) => {
      response += `${i + 1}. ${step}\n`;
    });

    response += "\n⚠️ **If you have ONE of the following allergens:**\n";
    response += "**egg, dairy, gluten, soy**\n";
    response += "Please enter one allergen using the /allergen command to receive an alternative recipe.";

    await interaction.reply(response);
  },
};