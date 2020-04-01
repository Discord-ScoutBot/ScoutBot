const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function flip(odds){
  coin = getRandomInt(odds);
  return coin;
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
if (message.content === '|stats')
message.channel.send('Gathering stats...')
  .then(msg => {
    msg.edit(`Current ScoutBot stats - Ping:  ${msg.createdTimestamp - message.createdTimestamp}ms - Uptime: ${client.uptime * .001} seconds - Currently serving ${client.guilds.size} servers.`)
  })
// funny stuff hahahaha
if (message.content === "|iq") {
  message.channel.send(`Hmm... let me guess your IQ <@${message.author.id}>.`)
  message.reply(`your IQ is ${getRandomInt(250)}!`);
}
if (message.content === "|flip" || "|flip 2"){
  if(message.content === "|flip 2"){
    if(flip(10) > 5){
      message.channel.send('Your first flip is Heads!')
      if(flip(10) > 5){
        message.channel.send('Your second flip is Heads!')
      } else {
        message.channel.send('Your second flip is Tails!')
      }
    } else {
      message.channel.send('Your first flip is Tails!')
      if(flip(10) > 5){
        message.channel.send('Your second flip is Heads!')
        } else {
        message.channel.send('Your second flip is Tails!')
      }
    }
  } else if(message.content === "|flip") {
    if(flip(10) > 5){
      message.channel.send('Heads!')
    } else {
      message.channel.send('Tails!')
    }
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
