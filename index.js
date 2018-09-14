const Discord = require("discord.js");
const client = new Discord.Client();

const config = "./config.json"

// Command Manager
client.on('message', message => {
  // Command filtering
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  
  // Argument setup
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === "ping") {
    message.channel.send("Pong!)
  }
  
});
                           
// Start the bot
client.login(process.env.token);
