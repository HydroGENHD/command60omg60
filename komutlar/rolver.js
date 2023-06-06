exports.run = async(client, message, args) => {
if(!message.member.permissions.has("MANAGE_ROLES")) return;
var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!user){
console.error("Rol ver komutunda kişi belirtilmedi.")
return;
};
var rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
if(!rol){
console.error("Rol ver komutunda rol belirtilmedi.")
return;
};
user.roles.add(rol.id)
return message.channel.send("Başarılı")
};
exports.conf = {
aliases: [],
permLevel: 0
};
exports.help = {
name: "rolver"
};