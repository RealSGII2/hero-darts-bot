// Requirements


exports.run = async(client, message) => {
    message.channel.send("Pong!");
};

exports.config = {
    enabled: true,
    guildOnly: false,
    category: 'bot',
    aliases: [],
    permnode = 'READ_MESSAGES'
};

exports.help = {
    name: 'ping',
    description: 'Pings the bot.',
    usage: 'ping'
};
