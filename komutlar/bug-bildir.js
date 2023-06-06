const Discord = require("discord.js")
const db = require("quick.db")

exports.run = (client, message, args) => {

    const öneri = args.slice(0).join(' ');
    if(!öneri) return message.channel.send(":red_square: Bir Bug Belirtmelisin! ")
       
  const embed = new Discord.MessageEmbed()
//.setTitle("Bir Bug Bildirdiler:") //DarkSide Code
  .addField("Belirtilen Öneri:", öneri)
  .addField("Bug Belirten Kişi:", `Adı: **${message.author.tag}** - Etiketi: <@${message.author.id}> - ID: **${message.author.id}**`)
  //etColor("BLUE")
  .setFooter(client.user.username, client.user.avatarURL())
  .setThumbnail(message.author.avatarURL({format: "gif"}))
  message.channel.send(`:green_square: Bulduğunuz Bug Başarıyla İletildi!`)
  client.channels.cache.get("1061310042189611011").send(embed) //Mesajın Gönderileceği Kanal
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "bugbildir",
    description: "öneri bildirirsiniz",
    usage: "öneri <öneri>"
}