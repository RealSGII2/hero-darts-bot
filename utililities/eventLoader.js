// Requirements
const requireEvent = (event) => require(`../events/${event}`);

module.exports = client => {
    client.on('ready', () => requireEvent('onReady')(client));
    client.on('reconnecting', () => requireEvent('onReconnecting')(client));
    client.on('disconnect', () => requireEvent('onDisconnect')(client));
    client.on('message', requireEvent('onMessage'));
    client.on('messageDelete', requireEvent('onMessageDelete'));
    client.on('messageUpdate', requireEvent('onMessageUpdate'));
};
