const Discord = require('discord.js'); 

module.exports = {
    name: "avatar",
    description: "Menampilkan Avatar User",
    aliases: [ "" ],
    usage: `<prefix>avatar @user || id || nick`,
    tags: "info",

    run: async (client, message, args) => {
        let mention = message.mentions.users.first() || message.author;

        let embed = new Discord.MessageEmbed().setColor('#7f5ce7')
        .setImage(mention.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
        .setTimestamp()
        .setDescription(`[\`link avatar\`](${mention.displayAvatarURL({ size: 4096, format: 'png', dynamic: true })})`)
        .setFooter(`Avatar of ${mention.tag}`)
        message.channel.send(embed)
    }
}
