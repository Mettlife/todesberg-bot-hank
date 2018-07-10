const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const giphy = new Giphy('dc6zaTOxFJmzC');
const Giphy = require('giphy.js');

client.on('ready',() => {
    console.log('I\'m online\nI\'m online');
});

var prefix ="$"
var giphy = require('giphy-api')('dc6zaTOxFJmzC');

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
});

/*
giphy.random({
  rating: 'r',
  fmt: 'json',
  tag: 'trump'
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
*/

client.login(settings.token);
