// Requirements
const embedSender = require('../../utilities/embedSender.js');

exports.run = async(client, message) => {
    embedSender.logBot(message, 'Ping', 'Pong!');
};

exports.config = {
    enabled: true,
    guildOnly: false,
    category: 'bot',
    aliases: [],
    permissionLevel: 2
};

exports.help = {
    name: 'ping',
    description: 'Pings the bot.',
    usage: 'ping'
};
