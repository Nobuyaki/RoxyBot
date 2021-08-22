const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "disconnect",
    description: "Mengeluarkan bot Dari Voice Channel",
    aliases: [ "dc", "leave", "outvc"],
    usage: `disconnect`,
    tags: "music",

    run: async (client, message, args) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "You must Join a voice channel before using this command!"
    );

  await channel.leave();

  return message.channel.send(
    new MessageEmbed()
      .setDescription("**Left the voice channel :white_check_mark: **")
      .setColor("BLUE")
  );
 } 
};
