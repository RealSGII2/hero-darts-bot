// Requirements
const discord = require('discord.js');
const Enmap = require('enmap');
const client = new discord.Client();
const chalk = require('chalk');
const fs = require('fs');
@@ -25,63 +26,66 @@
 };
 exports.logMessage = logMessage;
 
client.login(process.env.token);

 // Collections holding commands, aliases and categories for commands
 client.commands = new discord.Collection();
 client.aliases = new discord.Collection();
 client.categories = new discord.Collection();
 
 // Reads all files found in the commands folder and fills in the collections
 fs.readdir("./commands/", (error, categories) => {
     if (error) console.error(error);
     logMessage(`Found a total of ${categories.length} categories.`);
     categories.forEach(category => {
         fs.readdir(`./commands/${category}`, (error, files) => {
             let commands = new Array();
             files.forEach(file => {
                 let properties = require(`./commands/${category}/${file}`);
                 logMessage(`Loading Command: ${properties.help.name}.`);
                 let caseSensitiveName = `${properties.help.name}`;
                 let lowerCastName = caseSensitiveName.toLowerCase();
                 commands.push(lowerCastName);
                 client.commands.set(lowerCastName, properties);
                 properties.config.aliases.forEach(alias => {
                     client.aliases.set(alias, lowerCastName);
                 });
             });
             client.categories.set(category, commands);
         });
     });
 });
 
 // Has to be async, so that we can probably wait for the fetchMember function (?)
 client.getPermissionLevel = async function(message) {
     var permissionLevel = 0;
     // Assuming we only have one Guild for this Bot
     const guild = client.guilds.first();
 
     if(guild) {
         // Grab the member from the bot's guild
         const userID = message.author.id;
         const member = await guild.fetchMember(userID).catch(console.error);
 
         //const botRole = guild.roles.find('name', settings.roles.botRole);
         // if(botRole && member.roles.has(botRole.id)) {
         //     permissionLevel = 1;
         // }
 
         const modRole = guild.roles.find('name', client.settings.get(guild.id, "modRole"));
         if(modRole && member.roles.has(modRole.id)) {
             permissionLevel = 2;
         }
         const adminRole = guild.roles.find('name', client.settings.get(guild.id, "adminRole"));
         if(adminRole && member.roles.has(adminRole.id)) {
             permissionLevel = 3;
         }
         if(message.author.id === guild.ownerID) {
             permissionLevel = 4;
         }
     }
     return permissionLevel;
};
 // LOG DELETED MESSAGES
