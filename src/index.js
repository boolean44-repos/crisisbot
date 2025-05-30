
//all the packages you need (npm command in github README)

const { Client, Events, GatewayIntentBits, MessageFlags, EmbedBuilder } = require("discord.js");
const { token } = require('./config.json');

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

bot.on("ready", (c) => {
    console.log(`${c.user.tag} is running!`);
});

bot.on("interactionCreate", (interact) => {
    if(!interact.isChatInputCommand()) return;
const test = interact.options.getBoolean("ephemeral")
    if(interact.commandName === "test") {
        if(test === true) {

        const embeed = new EmbedBuilder()
        .setDescription("123")


interact.reply({ 
    
    embeds: [embeed],
    flags: MessageFlags.Ephemeral

 });
        }else if(test === false) {

              const embed = new EmbedBuilder() 
           // .setColor(0x0099ff)
               .setDescription('test')

            interact.reply({ embeds: [embed] })
        }
        
    }


}) 
bot.login(token); 