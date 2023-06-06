const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let wynex = message.mentions.members.first() || message.author;
  message.channel.send(`**İstediğiniz Kişinin ID Numarası:** **${wynex.id}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['id'],
  permlevel:0//kendi permlerinize göre ayarlayın
}

exports.help = {
  name : "id",
  description:"Birisinin İD Sini Alırsınız"
}