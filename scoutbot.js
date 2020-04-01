const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const PREFIX = "|";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function flip(odds) {
    coin = getRandomInt(odds);
    if (coin > 5) {
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
    //If the message was sent by a bot, ignore it
    if (message.author.bot) return;

    //Define necessary values
    let pfpEmbed = {
        title: `${message.author.username}'s profile picture`,
        image: {
            url: message.author.displayAvatarURL(),
        },
    };
    let args = message.content.substring(PREFIX.length).split(" ");

    //If the first character of the message isn't the prefix, return
    if (message.content.slice(0, 1) !== PREFIX) return;

    switch (args[0]) {
        case "ping":
            message.channel.send('Checking ping!...')
                .then(msg => {
                    msg.edit(`Current Ping: ${msg.createdTimestamp - message.createdTimestamp}ms.`);
                });
            break;
        case "iq":
            message.channel.send(`Hmm... let me guess your IQ <@${message.author.id}>.`)
            message.reply(`your IQ is ${getRandomInt(250)}!`);
            break;
        case "flip":
            if (flip(10)) {
                message.channel.send('Heads!')
            } else {
                message.channel.send('Tails!')
            }
            break;
        case "pfp":
            message.reply("here is your profile picture!")
            message.channel.send({embed: pfpEmbed });
            break;
    }
});

client.login(config.token)

