const Discord = require("discord.js");
const token = process.env.token
 const client = new Discord.Client();
 
 const config = require("./config.json");
 
 client.on("ready", () => {
   client.user.setActivity(`*help | Helping ${client.guilds.size} servers.`)
   console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); ;
 });
 
 client.on("guildCreate", guild => {
   client.user.setActivity(`*help | Helping ${client.guilds.size} servers.`)
   console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
 });
 
 client.on("guildDelete", guild => {
   // this event triggers when the bot is removed from a guild.
   console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
   client.user.setActivity(`*help | Helping ${client.guilds.size} servers.`)
 });
 
 
 client.on("message", async message => {
   // This event will run on every single message received, from any channel or DM.
   
   // It's good practice to ignore other bots. This also makes your bot ignore itself
   // and not get into a spam loop (we call that "botception").
   if(message.author.bot) return;
   
   // Also good practice to ignore any message that does not start with our prefix, 
   // which is set in the configuration file.
   if(message.content.indexOf(config.prefix) !== 0) return;
   
   // Here we separate our "command" name, and our "arguments" for the command. 
   // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
   // command = say
   // args = ["Is", "this", "the", "real", "life?"]
   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();
   
   // Let's go with a few common example commands! Feel free to delete or change those.
   
   if(command === "ping") {
     // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
     // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     const m = await message.channel.send("Ping?");
     m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
   }
   
   if (command === "invite") {
     message.channel.send({embed: {
     color: 3447003,
     author: {
       name: client.user.username,
       icon_url: client.user.avatarURL
     },
     title: "Invite Dart Bot",
     description: "Dart Bot is currently a moderation bot. More to be added soon! ",
     fields: [{
         name: "Invite Bot",
         value: "You can invite **Dart Bot** [here](https://discordapp.com/api/oauth2/authorize?client_id=489353619842400266&permissions=8&scope=bot)."
       },
       {
         name: "Support Server",
         value: "Join our [support server](https://discord.gg/zn4rbyn)."
       },
     ],
     timestamp: new Date(),
     footer: {
       icon_url: client.user.avatarURL,
       text: "Requested today at "
     }
   }
 });
   }
   
   if(command === "say") {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  
  if (command === "ss") {
  if (command === "ss") { const allowedids = [395860451382001665,258706134850863106];
    if (allowedids.includes(message.author.id)) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{})
    client.user.setStatus(sayMessage); 
    message.channel.send(":ok_hand:");
    message.channel.send(":ok_hand:");} else {"This command is reserved for the bot developers only!"}
  }
  if (command === "resets") {
  if (command === "resets") { const allowedids = [395860451382001665,258706134850863106];
    if (allowedids.includes(message.author.id)) {
    client.user.setActivity(`*help | Helping ${client.guilds.size} servers.`); 
    message.delete().catch(O_o=>{})
    message.channel.send(":ok_hand:")
    message.channel.send(":ok_hand:")} else {"This command is reserved for the bot developers only!"}
  }
  
  if(command === "kick") {
       if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
       return message.reply("Sorry, you don't have permissions to use this!");
     
     // Let's first check if we have a member and if we can kick them!
     // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
     // We can also support getting the member by ID, which would be args[0]
     let member = message.mentions.members.first() || message.guild.members.get(args[0]);
     if(!member)
       return message.reply("Please mention a valid member of this server");
     if(!member.kickable) 
       return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
     
     // slice(1) removes the first part, which here should be the user mention or ID
     // join(' ') takes all the various parts to make it a single string.
     let reason = args.slice(1).join(' ');
     if(!reason) reason = "No reason provided";
     
     // Now, time for a swift kick in the nuts!
     await member.kick(reason)
       .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
     message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
 
   }
   
   if(command === "ban") {
     // Most of this command is identical to kick, except that here we'll only let admins do it.
     // In the real world mods could ban too, but this is just an example, right? ;)
     if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
       return message.reply("Sorry, you don't have permissions to use this!");
     
     let member = message.mentions.members.first();
     if(!member)
       return message.reply("Please mention a valid member of this server");
     if(!member.bannable) 
       return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
 
     let reason = args.slice(1).join(' ');
     if(!reason) reason = "No reason provided";
     
     await member.ban(reason)
       .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
     message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
   }
   
   if(command === "purge") {
     // This command removes all messages from all users in the channel, up to 100.
     
     // get the delete count, as an actual number.
     const deleteCount = parseInt(args[0], 10);
     
     // Ooooh nice, combined conditions. <3
     if(!deleteCount || deleteCount < 2 || deleteCount > 10000)
       return message.reply("Please provide a number between 2 and 10000 for the number of messages to delete");
     
     // So we get our messages, and delete them. Simple enough, right?
     const fetched = await message.channel.fetchMessages({limit: deleteCount});
     message.channel.bulkDelete(fetched)
       .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
   }
   if (command === "help") {
     message.channel.send("You got mail!")
     message.author.send({embed: {
     color: 3447003,
     author: {
       name: client.user.username,
       icon_url: client.user.avatarURL
     },
     title: "Commands",
     description: "Dart Bot Commands ",
     fields: [{
         name: "Prefix",
         value: "The prefix for the bot is: `" + config.prefix + "`"
       },
       {
         name: "Commands",
         value: "You may view the bot commands [here](https://github.com/RealSGII2/Dart-s-Assistant/wiki/Commands)."
       },
       {
         name: "Support Server",
         value: "Join our [support server](https://discord.gg/zn4rbyn) if you need help!"
       },
       {
         name: "Invite the bot!",
         value: "Run `*invite` to get the box invite."
       },
     ],
     timestamp: new Date(),
     footer: {
       icon_url: client.user.avatarURL,
       text: "Requested today at "
     }
   }
 });
   }
 });
 
 client.login(config);
