const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// time and date stuff
var date = new Date();
let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: `2-digit`, minute: `2-digit`, second: `2-digit`, timeZoneName: `long`, timeZone: 'America/New_York' };
// random rolling
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// for coin flip
function flip(odds){
  coin = getRandomInt(odds);
  return coin;
}
client.on('ready', () => {
    client.user.setPresence({ activity: { name: `with ${client.users.cache.size} people and ${client.guilds.cache.size} servers!` }, status: 'online' })
    console.log(`Logged in as ${client.user.tag}!`);
  }); 
  client.on("message", message => {
  // stats n stuff woooooo
if (message.content === '|ping') {
    message.channel.send(`Ping test one!`).then((sentMessage) => sentMessage.edit(`That first test returned ${sentMessage.createdTimestamp - message.createdTimestamp}ms.`))
    message.channel.send(`Ping test two`).then((sentMessage) => sentMessage.edit(`That second test returned ${(sentMessage.createdTimestamp - message.createdTimestamp) - 115}ms.`)) // -115 to compensate for the time it takes to send + edit another message
																						     // TODO: make this better
}
if (message.content === '|help') {
  message.channel.send('As there is no help page, you must look through the source code (<https://github.com/Discord-ScoutBot/ScoutBot/blob/master/scoutbot.js>) and find them yourself.') // todo - actually make help page maybe????
}
if (message.content === '|stats')
message.channel.send('Gathering stats...')
  .then(msg => {
    msg.edit(`Stats: \n Ping: ${msg.createdTimestamp - message.createdTimestamp}ms \n Uptime: ${client.uptime * .001} seconds \n ${client.guilds.cache.size} servers \n ${client.users.cache.size} users`)
  })
// funny stuff hahahaha
if (message.content === "|iq") {
  var iq = getRandomInt(250);
  message.reply(`your IQ is ${iq}!`);
  if (iq < 100)
   if (iq > 50)
   message.reply(`a bit low... but I guess it's not too terrible?`)
  else
   message.reply(`oh dear...`)
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
    name: `Link:`,
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
if (message.content === '|time') {
    message.channel.send(`The time is ${date.toLocaleString('en-GB', dateOptions)}`) // todo - make it so you can put in your locale/tz
}
});

  client.login(config.token)
