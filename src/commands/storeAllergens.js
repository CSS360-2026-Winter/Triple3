import { getUserRecipe } from "../state.js";

const VALID_ALLERGENS = ["egg", "dairy", "gluten", "soy"];

export default {
  execute(message) {
    // If user hasn't picked a recipe yet, ignore
    const recipeChoice = getUserRecipe(message.author.id);
    if (!recipeChoice) return;

    const input = message.content.trim().toLowerCase();

    // Ignore numeric messages (recipe selection)
    if (/^\d+$/.test(input)) return;

    // Validate allergen
    if (!VALID_ALLERGENS.includes(input)) {
      message.channel.send(
        "❌ Please enter **one** valid allergen: egg, dairy, gluten, or soy."
      );
      return;
    }

    // Just acknowledge for now — teammate 3 handles alternatives
    message.channel.send(
      `✅ Got it! Here's an alternative recipe option for **${input}**.`
    );
  },
};
