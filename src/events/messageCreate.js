// src/events/messageCreate.js
import handleRecipeSelection from "../commands/handleRecipeSelection.js";
import storeAllergens from "../commands/storeAllergens.js";

export default {
  name: "messageCreate",

  async execute(message) {
    if (message.author.bot) return;

    handleRecipeSelection.execute(message);
    storeAllergens.execute(message);
  }
};
