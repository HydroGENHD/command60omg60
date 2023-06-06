const arez = require('discord.js');
module.exports.run = async(client, message, args) => {
let mesaj = args.slice(0).join(' ')
if(!mesaj) return message.channel.send(new arez.MessageEmbed().setColor('BLACK').setDescription('Embed yapmam için bir mesaj belirtmelisin?'))
message.delete();
const ales = new arez.MessageEmbed()
.setColor('BLACK')
.setTitle(message.author.username)
.setDescription(mesaj)
.setFooter(client.user.username)
message.channel.send(ales)
};
module.exports.conf = {aliases: ['embedyaz','yaz-embed','embed-yaz'], permLevel: 0};
module.exports.help = {name: "embed"};const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.channel.bulkDelete(1)
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 3
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
}; // DarkSide Code 