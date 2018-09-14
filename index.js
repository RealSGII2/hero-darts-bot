const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  client.user.setActivity(`:help | Helping ${client.guilds.size} servers.`)
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); ;
});

client.on("guildCreate", guild => {
  client.user.setActivity(`:help | Helping ${client.guilds.size} servers.`)
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`:help | Helping ${client.guilds.size} servers.`)
});


client.login(process.env.token);


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "ping") {
    const m = await message.channel.send("Pinging...");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if (command === "help") {
    message.channel.send("You got mail!");
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
        value: "Run `" + config.prefix + "invite` to get the box invite."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Requested"
    }
  }
});
  }
});
