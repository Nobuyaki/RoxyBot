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

const handlers = fs.readdirSync("./handlers/");
  for (let handler of handlers) {
    let file = require(`../handlers/${handler}`);
    client.on(event.split(".")[0], (...args) => file(client, ...args));
};

client.login(token) 
