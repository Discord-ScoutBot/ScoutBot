// im pretty sure a bot needs to login first...
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
    client.user.setPresence({ game: { name: 'scoutbot! rewritten! |help', type: 2 } });
    console.log(`Logged in as ${client.user.tag}!`);
  }); 
  if (message.content === '|ping') {
    if (message.author.bot) return;
    console.log(`Someone requested a ping! Currently at ${msg.createdTimestamp - message.createdTimestamp}`)
    message.channel.send('Checking ping!...')
    .then(msg => {
        msg.edit(`Current Ping: ${msg.createdTimestamp - message.createdTimestamp}ms.`);
    });
}
  client.login(config.token)
// no token for you, buddy!