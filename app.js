const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const api = 'qPcMqnjC9YxHgog5G8VBSW1FQW9gSbLf';

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
});

client.on('message', message => {
  if (message.author === client.user) return;
  if(message.content.startsWith(config.prefix)) {
    let tag = 'trump'
    if giphy.random('gifs', {tag})
        .then((res) => {
          // console.log(res);
          message.channel.send(res.data.url);
        })
  }
});

client.login(settings.token);
