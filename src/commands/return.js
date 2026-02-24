import { SlashCommandBuilder } from "discord.js";
import recipes from "../helpers/recipes.js";

export default {
  data: new SlashCommandBuilder()
    .setName("return")
    .setDescription("Go back to recipe list"),

  async execute(interaction) {
    let message = "Here are the recipes you can choose from:\n\n";

    // Loop through recipes object
    Object.entries(recipes).forEach(([id, recipe]) => {
      message += `${id}. ${recipe.name}\n`;
    });

    //message += "\n";

    await interaction.reply({
      content: message
    });
  }
};