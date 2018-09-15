const Discord = require("discord.js");
const client = new Discord.Client(); 
const prefix = ";";

client.login(process.env.token);

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "ss")) {
    message.channel.send("Check what I'm playing!");
    client.user.setStatus('idle')
  .then(console.log)
  .catch(console.error);
});
