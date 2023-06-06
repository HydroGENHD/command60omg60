const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var degisenOynuyor = [
    
    "Wynex Code  https://discord.gg/vdwBwbYZnQ",
    "Kanala Abone Ol! OĞUZ! Wynex Code https://discord.gg/vdwBwbYZnQ"
    
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 30000);
  
  client.user.setStatus("idle"); //dnd, idle, online, offline
  
}