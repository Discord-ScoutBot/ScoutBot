const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function flip(){
  coin = getRandomInt(2);
  if(coin === 0){
    return true;
  } else {
    return false;
  }
}

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
if (message.content === "|iq") {
  message.channel.send(`Hmm... let me guess your IQ <@${message.author.id}>.`)
  message.reply(`your IQ is ${getRandomInt(263)}!`);
}
if (message.content === "|coin"){
  if(flip){
    message.channel.send('Heads!')
  } else {
    message.channel.send('Tails!')
  }
}
  
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
