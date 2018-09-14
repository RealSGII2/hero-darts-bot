const Discord = require("discord.js");
const client = new Discord.Client();

const config = "./config.json"
                  
client.on("ready", () => {
 client.user.setActivity(`Ready!`)
}

// Start the bot
client.login(process.env.token);
