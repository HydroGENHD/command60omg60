const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if (reason.length < 1) return message.reply('Sunucudan atma sebebini Yaz!');
  if (message.mentions.users.size < 1) return message.reply('Lütfen Atacağım Kişiyi Etiketle').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('Bir Yetkiliyiyi Atamam');
  message.guild.member(user).kick();

  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kickle'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick'
};