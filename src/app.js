import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";

import interactionCreate from "./events/interactionCreate.js";
import messageCreate from "./events/messageCreate.js";
import ready from "./events/ready.js";
import pickCommand from "./commands/pick.js";


import recipesCommand from "./commands/recipesCommand.js";

console.log("TOKEN exists:", !!process.env.TOKEN);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Map();

client.commands.set(recipesCommand.data.name, recipesCommand);
console.log("Loaded command:", recipesCommand.data.name);

client.commands.set(pickCommand.data.name, pickCommand);
console.log("Loaded command:", pickCommand.data.name);

// Events
client.once("ready", (...args) => ready.execute(...args));
client.on("interactionCreate", (interaction) =>
  interactionCreate.execute(interaction)
);
client.on("messageCreate", (message) =>
  messageCreate.execute(message)
);

client.login(process.env.TOKEN);
