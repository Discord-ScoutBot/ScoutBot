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
    client.user.setPresence({ activity: { name: 'scoutbot! reborn!' }, status: 'dnd' })
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
if (message.content === '|help') {
  if (message.author.bot) return;
  message.channel.send('There is no help page yet, however if you know what you are doing and what you are looking for you can go to <https://github.com/Discord-ScoutBot/ScoutBot/blob/master/scoutbot.js> and look for commands there.')
}
if (message.content === '|stats')
message.channel.send('Gathering stats...')
  .then(msg => {
    msg.edit(`Current ScoutBot stats - Ping:  ${msg.createdTimestamp - message.createdTimestamp}ms - Uptime: ${client.uptime * .001} seconds - Currently serving ${client.guilds.cache.size} servers and ${client.users.cache.size} users.`)
  })
// funny stuff hahahaha
if (message.content === "|iq") {
  var iq = getRandomInt(250);
  message.reply(`your IQ is ${iq}!`);
  if (iq < 100)
   if (iq > 50)
   message.reply(`a bit low... but I guess it's not too terrible?`)
  else
   message.reply(`ouch.`)
  else
    if (iq > 175)
    message.channel.send(`Wow <@${message.author.id}>, you're pretty smart!`)
    else
    message.reply(`that's pretty good!`)
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
  fields: {
    name: `Link`,
    value: `${message.author.avatarURL({ format: 'png', dynamic: true })}`
  },
	image: {
		url: message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }),
  },
  timestamp: new Date(),
  footer: {
    icon_url: message.author.avatarURL(),
    text: `${message.author.username}'s profile picture`
  },
};
    if (message.content === '|pfp') {
      message.reply("here is your profile picture!")
      message.channel.send({embed: pfpEmbed });
    }
if (message.content === '|invite') {
      message.channel.send('The invite link is <https://discord.com/oauth2/authorize?client_id=439205929972531203&scope=bot&permissions=238935233>.')
    }
});

  client.login(config.token)
// no token for you, buddy
