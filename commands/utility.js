exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
}

exports.config = {
    name = "ping",
    usage = "ping"
}
