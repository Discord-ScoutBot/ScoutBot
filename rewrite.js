// im pretty sure a bot needs to login first...
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
    client.user.setPresence({ game: { name: 'scoutbot! rewritten! |help', type: 2 } });
    console.log(`Logged in as ${client.user.tag}!`);
  }); 
  client.login(config.token)
// no token for you, buddy!