const discord = require('discord.js')
exports.run = async(client, message,args) => {
message.channel.bulkDelete(100)// 1
message.channel.bulkDelete(100)// 2
message.channel.bulkDelete(100)// 3
message.channel.bulkDelete(100)// 4
message.channel.bulkDelete(100)// 5
message.channel.bulkDelete(100)// 6
message.channel.bulkDelete(100)// 7
message.channel.bulkDelete(100)// 8
message.channel.bulkDelete(100)// 9
message.channel.bulkDelete(100)// 10

message.channel.send("Başarıyla 1K mesaj silindi")

};
exports.conf = {
aliases: []
};
exports.help = {
name: "1000-mesaj-sil"
};