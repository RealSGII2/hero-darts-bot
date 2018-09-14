// Requirements
const discord = require('discord.js');
const Enmap = require('enmap');
const client = new discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');

require('./utilities/eventLoader.js')(client);

// Login the Bot to the Server
client.login(process.env.token);

// Function to manually reload a command file
exports.reload = async function(message, command) {
    const actualCommand = client.commands.get(command);
    const commandName = actualCommand.help.name;
    const category = actualCommand.config.category;
    delete require.cache[require.resolve(`./commands/${category}/${commandName}`)];
    let commandFile = require(`./commands/${category}/${commandName}`);
};

// General Logging Event
var logMessage = (message) => {
    console.log(chalk.green(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] ### ${message} ###`));
};
exports.logMessage = logMessage;

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
                    cl                    client.aliases.set(alias, lowerCastName);
                });
            });
            client.categories.s                    client.aliases.set(alias, lowerCastName);
                });
            });
            client.categories.set(category, commands);
        });
    });
});

// Has to be async, so that we can probably wait for the fetchMember function (?)
client.getPermissionLevel = async function(message) {
    var permissionLevel = 0;
    // Assuming                    client.aliases.set(alias, lowerCastName);
                });
            });
            client.categories.set(category, commands);
        });
    });
});

// Has to be async, so that we can probably wait for the fetchMember function (?)
client.getPermissionLevel = async function(message) {
    var permiss                    client.aliases.set(alias, lowerCastName);
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

        const modRole = guild.roles.find('name', settings.moderatorRole);
        if(modRole && member.roles.has(modRole.id)) {
            permissionLevel = 2;
        }
        const adminRole = guild.roles.find('name', client.settings.guild.id.adminRole);
        if(adminRole && member.roles.has(adminRole.id)) {
            permissionLevel = 3;
        }
        if(message.author.id === guild.ownerID) {
            permissionLevel = 4;
        }
    }
    return permissionLevel;
};

// LOG DELETED MESSAGESionLevel = 0;
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

        const modRole = guild.roles.find('name', settings.moderatorRole);
        if(modRole && member.roles.has(modRole.id)) {
            permissionLevel = 2;
        }
        const adminRole = guild.roles.find('name', client.settings.guild.id.adminRole);
        if(adminRole && member.roles.has(adminRole.id)) {
            permissionLevel = 3;
        }
        if(message.author.id === guild.ownerID) {
            permissionLevel = 4;
        }
    }
    return permissionLevel;
};

// LOG DELETED MESSAGES we only have one Guild for this Bot
    const guild = client.guilds.first();

    if(guild) {
        // Grab the member from the bot's guild
        const userID = message.author.id;
        const member = await guild.fetchMember(userID).catch(console.error);

        //const botRole = guild.roles.find('name', settings.roles.botRole);
        // if(botRole && member.roles.has(botRole.id)) {
        //     permissionLevel = 1;
        // }

        const modRole = guild.roles.find('name', settings.moderatorRole);
        if(modRole && member.roles.has(modRole.id)) {
            permissionLevel = 2;
        }
        const adminRole = guild.roles.find('name', client.settings.guild.id.adminRole);
        if(adminRole && member.roles.has(adminRole.id)) {
            permissionLevel = 3;
        }
        if(message.author.id === guild.ownerID) {
            permissionLevel = 4;
        }
    }
    return permissionLevel;
};

// LOG DELETED MESSAGESet(category, commands);
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

        const modRole = guild.roles.find('name', settings.moderatorRole);
        if(modRole && member.roles.has(modRole.id)) {
            permissionLevel = 2;
        }
        const adminRole = guild.roles.find('name', client.settings.guild.id.adminRole);
        if(adminRole && member.roles.has(adminRole.id)) {
            permissionLevel = 3;
        }
        if(message.author.id === guild.ownerID) {
            permissionLevel = 4;
        }
    }
    return permissionLevel;
};

// LOG DELETED MESSAGESient.aliases.set(alias, lowerCastName);
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

        const modRole = guild.roles.find('name', settings.moderatorRole);
        if(modRole && member.roles.has(modRole.id)) {
            permissionLevel = 2;
        }
        const adminRole = guild.roles.find('name', client.settings.guild.id.adminRole);
        if(adminRole && member.roles.has(adminRole.id)) {
            permissionLevel = 3;
        }
        if(message.author.id === guild.ownerID) {
            permissionLevel = 4;
        }
    }
    return permissionLevel;
};

// LOG DELETED MESSAGES!

// Settings Handler

client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});

const defaultSettings = {	
  prefix: "*",	
  modLogChannel: "mod-log",	
  modRole: "Moderator",	
  adminRole: "Administrator",	
}

client.on("guildDelete", guild => {
  // Removing an element uses `delete(key)`
  client.settings.delete(guild.id);
});

client.on("message", async (message) => {
  // This stops if it's not a guild (obviously), and we ignore all bots.
  if(!message.guild || message.author.bot) return;

  // We can use ensure() to actually grab the default value for settings,
  // if the key doesn't already exist. 
  const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
  
  // We also stop processing if the message does not start with our prefix.
  if(message.content.indexOf(guildConf.prefix) !== 0) return;

  //Then we use the config prefix to get our arguments and command:
  const args = message.content.split(/\s+/g);
  const command = args.shift().slice(guildConf.prefix.length).toLowerCase();
  const mode = args.shift()
  
  // Alright. Let's make a command! This one changes the value of any key
  // in the configuration.
  if (command === "settings") {
  if(mode === "edit") {
    // Command is admin only, let's grab the admin value: 
    const adminRole = message.guild.roles.find("name", guildConf.adminRole);
    if(!adminRole) return message.reply("Administrator Role Not Found");
    
    // Then we'll exit if the user is not admin
    if(!message.member.roles.has(adminRole.id)) {
      return message.reply("Only people with the administrator role can use this!");
    }
    
    // Let's get our key and value from the arguments. 
    // This is array destructuring, by the way. 
    const [prop, ...value] = args;
    // Example: 
    // prop: "prefix"
    // value: ["+"]
    // (yes it's an array, we join it further down!)
    
    // We can check that the key exists to avoid having multiple useless, 
    // unused keys in the config:
    if(!client.settings.has(message.guild.id, prop)) {
      return message.reply("This key is not in the configuration.");
    }
    
    // Now we can finally change the value. Here we only have strings for values 
    // so we won't bother trying to make sure it's the right type and such. 
    client.settings.set(message.guild.id, value.join(" "), prop);
    
    // We can confirm everything's done to the client.
    message.channel.send(`Guild configuration item ${prop} has been changed to:\n\`${value.join(" ")}\``);
  }
  
  // Now let's make another command that shows the configuration items.
  if (mode === "view") {
    let configProps = Object.keys(guildConf).map(prop => {
      return `${prop}  :  ${guildConf[prop]}\n`;
    });
    message.channel.send(`The following are the server's current configuration:
    \`\`\`${configProps}\`\`\``);
  }
  }
});
