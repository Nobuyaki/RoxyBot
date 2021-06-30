module.exports = {
    name: "ping",
    description: "Menampilkan Ms bot",
    aliases: [ "menu" ],
   
    run: async (client, message, args) => {
        const m = await message.channel.send(`Pong!`);
        m.edit("ping Pong!")
    }
}
