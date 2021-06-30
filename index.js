const Discord = require('discord.js');
const { config } = require('dotenv'):
const fs = require('fs');

const { token, prefix } = require("./data/config.json");

const client = new Discord.Client({
     disableEveryone: true
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
   console.log("ready!")
   client.user.setActivity(`${prefix} is My prefix`, {
       type: "LISTENING"
   });
});

client.on("message", async message => {
  
   if (message.author.bot) return;
   if (!message.guild) return;
   if (!message.content.startsWith(prefix)) return;
   if (!message.member) message.member = await message.guild.fetchMember(message);
  
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
   const cmd = args.shift().toLowerCase();
  
   if (cmd.length === 0) return;
  
   let command = client.commands.get(cmd);
   if (!command) command = client.commands.get(client.aliases.get(cmd));
  
   if(command)
      command.run(client, message, args);
});

client.login(token) 