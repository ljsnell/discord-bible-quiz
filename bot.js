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
    if (msg.content === '!ref') {
        readQuestionFile(msg, './questions/ref.json');
    } else if (msg.content === '!general') {
        readQuestionFile(msg, './questions/general.json');
    } else if (msg.content === '!2part') {
        readQuestionFile(msg, './questions/2part.json');
    } else if (msg.content === '!3part') {
        readQuestionFile(msg, './questions/3part.json');
    } else if (msg.content === '!4part') {
        readQuestionFile(msg, './questions/4part.json');
    } else if (msg.content === '!5part') {
        readQuestionFile(msg, './questions/5part.json');
    } else if (msg.content === '!multiple') {
        readQuestionFile(msg, './questions/multiple.json');
    } else if (msg.content === '!ftv') {
        readQuestionFile(msg, './questions/ftv.json');
    } else if (msg.content === '!help') {
        msg.reply("Supported commands are !ref, !general, !2part, !3part, !4part, !5part, !multiple, and !ftv")
    }
});

client.login(auth.token);

function readQuestionFile(msg, fileToRead) {
    rawdata = fs.readFileSync(fileToRead);
    // Setup the question response
    let questionList = JSON.parse(rawdata);
    var randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
    // Build actual response   
    msg.reply(JSON.stringify(randomQuestion["Q"] + space + discordSpoilerTag 
        + randomQuestion["A"] + discordSpoilerTag));
}