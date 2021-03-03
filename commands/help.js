const Discord = require('discord.js')
const {PREFIX} = require('../config.json')
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    
    `
**» ?play <şarkı-adı> : Bir Şarkıyı Oynatır.
» ?skip : Sıradaki Şarkıyı atlar.
» ?loop : O Anki şarkıyı Hep tekrarlar.
» ?stop : O anki Şarkıyı Durdurur.
» ?resume : Duran Şarkıyı Devam Ettirir.
» ?sıra : O Anki Sırayı Gösterir.
» ?np : O Anki Oynatılan Şarkıyı Söyler.**



`)
                      )
}
}
