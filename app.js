const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
    console.log('I\'m online\nI\'m online');
});

var prefix ="$"

client.on('message', message => {
    if (message.author === client.user) return;
    if (message.content.startsWith(prefix + 'ping')) {
          //(message.content === 'ping') will only respond to "ping" in chat
          //message.content.startsWith('ping') will reply to any message that starts with "ping"
    message.channel.sendMessage('pong');
    }
          //message.reply responds in channel with @username
          //message.channel.sendMessage responds in channel with regular message
    if (message.content.startsWith(prefix + 'brommi')) {
    message.channel.sendMessage('Wat ein noob!');
    }
    if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendMessage('Try the following commands: $ping and $brommi');
    }
});

client.login(settings.token);
