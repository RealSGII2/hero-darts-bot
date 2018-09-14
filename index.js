// start discord.js init
const Discord = require("discord.js");
const client = new Discord.Client();
// end discord.js init

client.login(process.env.token)
