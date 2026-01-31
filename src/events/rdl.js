// events/messageCreate.js
import { Events } from "discord.js";

const riddles = [
  "I speak without a mouth and hear without ears. What am I?",
  "I’m tall when I’m young, and I’m short when I’m old. What am I?",
  "The more of me you take, the more you leave behind. What am I?",
  "What has keys but can’t open locks?",
  "I have branches, but no fruit, trunk or leaves. What am I?"
];

export default {
  name: Events.MessageCreate, // listens to all messages
  async execute(message) {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Check if the message starts with "riddle"
    if (message.content.toLowerCase().startsWith("riddle")) {
      const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
      await message.channel.send(randomRiddle);
    }
  },
};