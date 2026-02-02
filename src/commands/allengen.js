import { SlashCommandBuilder } from "discord.js";
import { getAllergen } from "../helpers/allergen.js";
import { getUserRecipe } from "../state.js";

export default {
  data: new SlashCommandBuilder()
    .setName("allergen")
    .setDescription("Get allergen alternative")
    .addStringOption(option =>
    option.setName("name")
      .setDescription("Allergen (egg, dairy, gluten, soy)")
      .setRequired(true)
  ),

async execute(interaction) {
    const allergen = interaction.options.getString("name");
    const recipeNumber = getUserRecipe(interaction.user.id);
    //const recipeNumber = 1; // Temporary fix until state management is implemented

    const response = await getAllergen(recipeNumber, allergen);

    await interaction.reply({
      content: response ?? "Sorry — I don't have a substitution for that allergen yet!"
    });
},
};