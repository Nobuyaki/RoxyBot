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

const events = fs.readdirSync("./events/");
  for (let event of events) {
    let file = require(`../events/${event}`);
    client.on(event.split(".")[0], (...args) => file(client, ...args));
};

client.login(token) 
