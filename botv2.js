const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const fs = require('fs');
const discordSpoilerTag = "||"
const space = " "

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//  TODO: Convert to case statement
client.on('message', msg => {
    
    if (msg.content.startsWith('!general')) {
        questionType = 1
        queryDB();
    } else if (msg.content.startsWith('!2part')) {
        questionType = 2
        queryDB();
    } else if (msg.content.startsWith('!3part')) {
        questionType = 3
        queryDB();
    } else if (msg.content.startsWith('!4part')) {
        questionType = 4
        queryDB();
    } else if (msg.content.startsWith('!5part')) {
        questionType = 5
        queryDB();
    } else if (msg.content.startsWith('!multiple')) {
        questionType = 6
        queryDB();
    } else if (msg.content.startsWith('!ftv')) {
        questionType = 7
        queryDB();
    } else if (msg.content.startsWith('!ref')) {
        questionType = 8
        queryDB();
    } else if (msg.content.startsWith('!situation')) {
        questionType = 9
        queryDB();
    }else if (msg.content.startsWith('!help')) {
        msg.reply("Supported commands are !ref, !general, !2part, !3part, !4part, !5part, !multiple, !ftv, and !situation")
    }
    msg.reply('sup');
});

client.login(auth.token);

async function queryDB(questionType, bookNumber) {
    // Example Query:
    // select * from Questions where QType = 8 AND 
    // Quality = 'a' and Book = 3 ORDER by RANDOM() LIMIT 1
    // https://discordjs.guide/creating-your-bot/commands-with-user-input.html#basic-arguments
    query = 'SELECT * from Questions where QType = ' + questionType + ' Quality = "a" and Book = ' 
        + bookNumber + ' ORDER by RANDOM() LIMIT 1'
}