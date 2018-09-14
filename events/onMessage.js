const settings = require('../settings.json')
const index = require('../index.js')

module.exports = message => {
    if(!message.content.startsWith(settings.prefix)) return;
    if(message.author.bot) return;

    const client = message.client;
    
    let caseSenstiveCommand = message.content.split(" ")[0].slice(settings.prefix.length);
    const command = caseSenstiveCommand.toLowerCase();
    const args = message.content.split(" ").slice(1);
        let actualCommand;
        if (client.commands.has(command)) {
            actualCommand = client.commands.get(command);
        }
        else if (client.aliases.has(command)) {
            actualCommand = client.commands.get(client.aliases.get(command));
        }
        if (actualCommand) {
            if (message.author.hasPermission(actualCommand.config.permnode)) {
                if(actualCommand.config.enabled == true) {
                    actualCommand.run(client, message, args);
                }

                if(message.guild) {
                    message.delete(1500).catch(console.error);
                }
            }
    }).catch(error => {
        console.log(error.stack);
    });
};
