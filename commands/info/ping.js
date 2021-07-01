module.exports = {
    name: "ping",
    description: "Menampilkan Ms bot",
    aliases: [ "" ],
    usage: `ping`,
    tags: "info",

    run: async (client, message, args) => {
        const m = await message.channel.send(`Pong!`);
        m.edit("ping Pong!")
        console.log(`> ${message.guild.name} || ${message.author.username} => ping`)
    }
}
