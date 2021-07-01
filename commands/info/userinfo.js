const Discord = require('discord.js'); 

module.exports = {
    name: "userinfo",
    description: "Menampilkan Info User",
    aliases: [ "infouser" ],
    usage: `<prefix>userinfo @user`,
    tags: "info",

    run: async (client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(`${args[0]}`) || message.member,
            user  = member.user;
        if (!member) {
            throw 'Member Tidak Di Temukan!';
        }

        let name = message.guild.member(member);
        let nick = name.nickname !== undefined && name.nickname !== null ? `|| ${name.nickname}` : "";
        let role = member.roles.cache.map(r => `<@&${r.id}>`)
        let high = role.length - 1

        let embed = new Discord.MessageEmbed().setColor('#7f5ce7')
        .setTitle("**USER INFORMATION**")
        .setThumbnail(user.avatarURL({ size: 4096 }))
        .setTimestamp()
        .addField(':beginner:|UserName', `${user.username}#${user.discriminator} ${nick}`)
        .addField(':pencil:|UserId', '') 
        .addField('|Status', `${user.presence.status[0].toUpperCase() + user.presence.status.slice(1)}`)
        .addField('🔺|Highest Roles', role.slice(0,-high), true)
        .addField('📁|All Roles', role.slice(0,-1).join(',\n'), true)
        message.channel.send(embed)
    }
}
