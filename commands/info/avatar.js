const Discord = require('discord.js'); 

module.exports = {
    name: "avatar",
    description: "Menampilkan Avatar User",
    aliases: [ "" ],
    usage: `<prefix>avatar @user || id || nick`,
    tags: "info",

    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.member,
            user  = member.user;
        if (!member) {
            throw 'Member Tidak Di Temukan!';
        }

        let embed = new Discord.MessageEmbed().setColor('#7f5ce7')
        .setImage(member.displayAvatarURL({ size: 4096, format: 'png', dynamic: true }))
        .setTimestamp()
        .setDescription(`[\`link avatar\`](${member.displayAvatarURL({ size: 4096, format: 'png', dynamic: true })})`)
        .setFooter(`Avatar ${member.tag}`)
        message.channel.send(embed)
    }
}
