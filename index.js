const express = require("express");
const app = express();
const prompt = require("prompt-sync")();
app.listen((ee) => console.log("Server started"));
app.use('/', (req, res) => {
  res.send(new Date());
});
const Discord = require("discord.js-self");
const client = new Discord.Client()
const db = require('quick.db');
const chalk = require('cli-color');

let e = `

██████╗░██████╗░░█████╗░███╗░░░███╗░█████╗░███╗░░██╗
██╔══██╗██╔══██╗██╔══██╗████╗░████║██╔══██╗████╗░██║
██████╔╝██████╔╝██║░░██║██╔████╔██║███████║██╔██╗██║
██╔═══╝░██╔══██╗██║░░██║██║╚██╔╝██║██╔══██║██║╚████║
██║░░░░░██║░░██║╚█████╔╝██║░╚═╝░██║██║░░██║██║░╚███║
╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝
`
console.log(chalk.green(e))

const token = prompt("What is your account token without \"\":");

const channelcopy = prompt("Where do the messages go? (channelId):");


if(!token||!channelcopy) new Error(`Eroor: `)

client.on('ready',async ()=>{
  console.log(`${client.user.username} is ready to use ; )`)
})
client.on('messageDelete',message =>{
  const server = client.channels.cache.get(channelcopy)
  server.send(`there is message deleted :\n\`${message}\`\nServer :\`${message.guild}\`\nsended by :\`${message.author.username}\`\nchannel name :\`${message.channel.name}\``)
})
client.login(`${token}`)
