const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle("BOT AD | Ping")
  .setColor("RANDOM")
  .setDescription(`${client.ws.ping} ms`)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'pingpong',
 description: 'Botun Pingi',
 usage: 'ping'
}; //Darkside