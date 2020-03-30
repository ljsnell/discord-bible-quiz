const Discord = require('discord.js');
const client = new Discord.Client();
const auth2 = require('./authv2.json');
const fs = require('fs');
const discordSpoilerTag = "||"
const space = " "

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    // Example call: !quiz:1:1:1,2,3
    // Selects a general question from the first 3 chapters
    if (msg.content.startsWith('!quiz')) {
        const args = msg.content.split(':');
        const command = args.shift().toLowerCase();
        queryDB(args[0], args[1], args[2])
        msg.reply('hi')
    }
    else if (msg.content.startsWith('!help')) {
        msg.reply("Supported commands are !ref, !general, !2part, !3part, !4part, !5part, !multiple, !ftv, and !situation")
    }
    
});

client.login(auth2.token);

function queryDB(questionType, bookNumber, chapter) {
    // Example Query:    
    // select * from Questions where QType = 1 AND Quality = 'a' 
    //      and Book = 3 and Chapter in (1,2) ORDER by RANDOM() LIMIT 1
    // https://discordjs.guide/creating-your-bot/commands-with-user-input.html#basic-arguments
    query = 'SELECT * from Questions where QType = ' + questionType + ' Quality = "a" and Book in(' 
        + bookNumber + ') and Chapter in(' + chapter +') ORDER by RANDOM() LIMIT 1'
    console.log(query)
}