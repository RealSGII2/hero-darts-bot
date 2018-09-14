const discord = require('discord.js');
const settings = require('../settings.json');

exports.sendMessageToUser = function (user, eventTitle, eventMessage) {
    const title = `--- Event: ${eventTitle} ---`;
    const description = `${eventMessage}`;
    var embed = new discord.RichEmbed()
    .setTitle(title)
    .setColor(settings.messageColors.colorWarning)
    .setDescription(description);
    user.send(embed);
};

exports.sendMessageToAuthor = function(message, eventTitle, eventMessage) {
    const author = message.author;
    const title = `--- Event: ${eventTitle} ---`;
    const description = `${eventMessage}`;
    var embed = new discord.RichEmbed()
    .setTitle(title)
    .setColor(settings.messageColors.colorWarning)
    .setDescription(description);
    author.send(embed);
};

exports.sendInlineListToAuthor = function(message, listName, listFooter, listProperties) {
    const author = message.author;
    var embed = new discord.RichEmbed()
    .setTitle(`--- ${listName} ---`)
    .setColor(settings.messageColors.colorWarning);
    if(listFooter) {
        embed.setFooter(listFooter);
    }

    listProperties.map(property => {
        embed.addField(property.propertyKey, property.propertyVal, true);
    });
    author.send(embed);
};

exports.sendListToAuthor = function(message, listName, listFooter, listProperties) {
    const author = message.author;
    var embed = new discord.RichEmbed()
    .setTitle(`--- ${listName} ---`)
    .setColor(settings.messageColors.colorWarning);
    if(listFooter) {
        embed.setFooter(listFooter);
    }

    listProperties.map(property => {
        embed.addField(property.propertyKey, property.propertyVal);
    });
    author.send(embed);
};

exports.logModeratorAsBot = function (client, eventName, eventMessage) {
    const moderatorLog = client.channels.find('name', settings.logChannels.moderator);
    if(moderatorLog) {
        const title = `--- Event: ${eventName} ---`;
        const description = eventMessage;
        const embed = new discord.RichEmbed()
        .setTimestamp()
        .setColor(settings.messageColors.colorWarning)
        .setTitle(title)
        .setDescription(description);
        moderatorLog.send(embed);
    }
};

exports.logModerator = function(message, eventName, eventMessage) {
    const moderatorLog = message.client.channels.find('name', settings.logChannels.moderator);
    if(moderatorLog) {
        const title = `--- Event: ${eventName} ---`;
        const description = `__Moderator__: <@${message.author.id}>\n` + eventMessage;
        const embed = new discord.RichEmbed()
        .setTimestamp()
        .setColor(settings.messageColors.colorWarning)
        .setTitle(title)
        .setDescription(description);
        moderatorLog.send(embed);
    }
};

exports.logBot = function(message, eventName, eventMessage) {
    const botLog = message.client.channels.find('name', settings.logChannels.bot);
    if(botLog) {
        const title = `--- Event: ${eventName} ---`;
        const description = `__Moderator__: <@${message.author.id}>\n` + eventMessage;
        const embed = new discord.RichEmbed()
        .setTimestamp()
        .setColor(settings.messageColors.colorWarning)
        .setTitle(title)
        .setDescription(description);
        botLog.send(embed);
    }
};

exports.logMessage = function(message, eventName, eventMessage) {
    const messageLog = message.client.channels.find('name', settings.logChannels.message);
    if(messageLog) {
        const title = `--- Event: ${eventName} ---`;
        const description = eventMessage;
        const embed = new discord.RichEmbed()
        .setTimestamp()
        .setColor(settings.messageColors.colorWarning)
        .setTitle(title)
        .setDescription(description);
        messageLog.send(embed);
    }
};
