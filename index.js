const Discord = require('discord.js');
const { config } = require('dotenv');
const fs = require('fs');

const { token, prefix } = require("./data/config.json");
const client = new Discord.Client({
     disableEveryone: true
});

client.queue = new Map();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

config({
    path: __dirname + "/.env"
});

["command", "event"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(token) 
