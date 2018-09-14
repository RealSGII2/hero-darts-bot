const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = ":"

client.on("ready", () => {
  client.user.setActivity(`Helping ${client.guilds.size} servers.`)
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); ;
});

client.on("guildCreate", guild => {
  client.user.setActivity(`Helping ${client.guilds.size} servers.`)
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Helping ${client.guilds.size} servers.`)
});


client.login(process.env.token);


client.on("message", async message => {
  // Command filtering
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Commands
  
  if (command === "ping") {message.channel.send("Pong!"}
  
});
