const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
    client.user.setPresence({ game: { name: 'scoutbot - reborn |help', type: 2 } });
    console.log(`Logged in as ${client.user.tag}!`);
  }); 
  client.on("message", message => {

  if (message.content === '|ping') {
    if (message.author.bot) return;
    console.log(`Someone requested a ping!`)
    message.channel.send('Checking ping!...')
    .then(msg => {
        msg.edit(`Current Ping: ${msg.createdTimestamp - message.createdTimestamp}ms.`);
    });
}
});
  client.login(config.token)
// no token for you, buddy