import { REST, Routes } from "discord.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commands = [];
const commandsPath = path.join(__dirname, "commands");
const files = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of files) {
  const filePath = path.join(commandsPath, file);
  const imported = await import(filePath);
  const command = imported.default;

  // ✅ CRITICAL GUARD
  if (!command || !command.data || typeof command.data.toJSON !== "function") {
    console.log(`⏭️  Skipping non-slash command file: ${file}`);
    continue;
  }

  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

try {
  await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: commands }
  );
  console.log("✅ Slash commands registered successfully.");
} catch (error) {
  console.error("❌ Failed to register commands:", error);
}
