const { MessageEmbed } = require("discord.js");
const createBar = require("string-progressbar");

module.exports = {
    name: "nowplaying",
    description: "Menampilkan Yang Sedang di Putar",
    aliases: [ "np" ],
    usage: `nowplaying`,
    tags: "music",

    run: async (client, message) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "You must Join a voice channel before using this command!"
    );
  let queue = message.client.queue.get(message.guild.id);
  const song = queue.song[0];
  const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
    const left = song.duration - seek;
  if (!queue)
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setDescription(":x: There are no songs playing in this server")
    );
  let nowPlaying = new MessageEmbed()
      .setAuthor(
        "Now Playing",
        "https://img.icons8.com/color/2x/audio-wave--v2.gif"
      )
      .setColor("BLUE")
      .setDescription(
        queue.queue[0].name +
          " Requested By: " +
          "<@" +
          queue.queue[0].requested +
          ">"
      )
      .setThumbnail(queue.queue[0].thumbnail)
      .setFooter("There are " + queue.queue.length + " songs in queue")

      if (song.duration > 0) {
      nowPlaying.addField(
        "\u200b",
        new Date(seek * 1000).toISOString().substr(11, 8) +
          "[" +
          createBar(song.duration == 0 ? seek : song.duration, seek, 20)[0] +
          "]" +
          (song.duration == 0 ? " ◉ LIVE" : new Date(song.duration * 1000).toISOString().substr(11, 8)),
        false
      );
      nowPlaying.setFooter("Time Remaining: " + new Date(left * 1000).toISOString().substr(11, 8));
    }

  message.channel.send(nowPlaying)
 }
};
