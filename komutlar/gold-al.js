const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {

  if (message.author.id !== '852537099722948628') return;
  let prex = args[0]
  if (!prex) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`prexgold${prex}`, 'gold')
  
  message.channel.send(`**${prex}** Adlı Kullanıcı Gold Üye Değil`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'gold-al',
  description: '[Admin Komutu]',
  usage: 'gold-al <ID>'
};