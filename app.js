const Discord = require("discord.js");
const client = new Discord.Client(); 
const prefix = ";";

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "hi")) {
    message.channel.send("bye");
  }
});

client.login(process.env.token);
