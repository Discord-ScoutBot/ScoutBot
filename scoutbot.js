const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'scoutbot! reborn!' }, status: 'idle' })
    console.log(`Logged in as ${client.user.tag}!`);
  }); 
  client.on("message", message => {
  // stats n stuff woooooo
  if (message.content === '|ping') {
    if (message.author.bot) return;
    message.channel.send('Checking ping!...')
    .then(msg => {
        msg.edit(`Current Ping: ${msg.createdTimestamp - message.createdTimestamp}ms.`);
    });
}
// funny stuff hahahaha

// misc stuff
const pfpEmbed = {
	title: `${message.author.username}'s profile picture`,
	image: {
		url: message.author.displayAvatarURL(),
	},
};
    if (message.content === '|pfp') {
      message.reply("here is your profile picture!")
      message.channel.send({embed: pfpEmbed });
    }

});
  client.login(config.token)
// no token for you, buddy
