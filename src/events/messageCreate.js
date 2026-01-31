import storeAllergens from "../commands/storeAllergens.js";

export default {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;

    storeAllergens.execute(message);
  },
};
