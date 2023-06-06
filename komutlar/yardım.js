const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
exports.run = (client, message, args) => {
    const embed1 = new Discord.MessageEmbed()
    .setTitle("🔧 **Yardım Menüsü** 🔧")
    .setDescription(`${client.commands.map(theartist => `> :arrow_right: **${prefix}${theartist.help.name}**`).join('\n')}`)
    .setAuthor(`Botun toplamda ${client.commands.size} komutu bulunuyor.`)
    message.channel.send(embed1)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım komutu',
  usage: 'yardım'
};