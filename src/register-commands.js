const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const { guild_id, client_id, token } = require("./config.json")
const commands = [

{
    name: "test",
    description: "test",
    options: [
        {
        name: "ephemeral",
        description: "Ephemeral",
        type: ApplicationCommandOptionType.Boolean,
      
        required: true
        }
    ]
}

];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        client_id,
        guild_id
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();