// src/commands/storeAllergens.js
import { userSessions } from "../state.js";

const VALID_ALLERGENS = ["egg", "dairy", "gluten", "soy"];

export default {
  execute(message) {
    const session = userSessions.get(message.author.id);
    if (!session || session.allergies !== null) return;

    const input = message.content.trim().toLowerCase();

    // Must be exactly one valid allergen
    if (!VALID_ALLERGENS.includes(input)) {
      message.channel.send(
        "❌ Please enter **one** valid allergen: egg, dairy, gluten, or soy."
      );
      return;
    }

    session.allergies = input;
    userSessions.set(message.author.id, session);

    message.channel.send(
      `✅ Got it! I've saved your allergen: **${input}**`
    );
  }
};
