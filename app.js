const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = ";";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!");
  } else
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "What does it do?",
    description: "Dart Bot is a moderation bot currently in early beta.",
    fields: [{
        name: "Commands",
        value: "Commands can be found by saying `" + prefix + "commands`."
      },
      {
        name: "Inviting the Bot or Need Support?",
        value: "You can join our support server or invite the bot by saying `" + prefix + "invite`."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Dart Bot | Requested"
    }
  }
});
  } else
  if (message.content.startsWith(prefix + "commands")) {
    message.channel.send("There are no commands to show! The bot is being developed. Nothing was DM'd to you.");
  } else
    
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("I DM'd you the invites!"
    message.author.send("I DM'd you this to help prevent invite links.")
    message.author.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Dart Bot",
    description: "A simple bot coded by SGII2 and Lxphere. Made for Dart.",
    fields: [{
        name: "Support Server",
        value: "Join our support server [here](https://discord.gg/zn4rbyn)."
      },
      {
        name: "Invite the Bot",
        value: "You can't invite the bot currently."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Dart Bot | Requested"
    }
  }
});
  }
});

client.login(process.env.token);
