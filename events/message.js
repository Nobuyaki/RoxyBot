const { prefix } = require("../data/config.json")
const jsoning = require("jsoning");
const database = new jsoning("../data/database.json");

module.exports = async (client, message) => {
    Gprefix = database.get() || prefix;
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(Gprefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(Gprefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
}
