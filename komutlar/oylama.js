const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms')
 exports.run = (client, message, args) => {
   let oylama =  args.join(' ');
  if (!oylama) return message.reply('Oylama sorusunu belirtiniz')
   
   
 
  const Wynex = new Discord.MessageEmbed()
  .setDescription(`${oylama}`)
  .setFooter(`${message.author.tag} Tarafından`)
  return message.channel.send(Wynex).then(function(message) {

         message.react(':white_check_mark:');

         message.react(':x:');

  });

 };

     exports.conf = {
       enabled: true,
       guildOnly: false,
      aliases: ['oylama'],
  permLevel: 2
};

exports.help = {
  name: 'oylama'
};