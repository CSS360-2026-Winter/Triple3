// src/commands/handleRecipeSelection.js
import recipes from "../recipes.js";
import { userSessions } from "../state.js";

export default {
  execute(message) {
    const choice = message.content.trim();
    if (!recipes[choice]) return;

    const recipe = recipes[choice];

    userSessions.set(message.author.id, {
      recipeId: choice,
      allergies: null
    });

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
    response += "Please type just one.";

    message.channel.send(response);
  }
};
