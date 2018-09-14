const Discord = require("discord.js");
const client = new Discord.Client();
                  
client.on("ready", () => {
 client.user.setActivity(`Ready!`)
}

// Start the bot
client.login(process.env.token);
