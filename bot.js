const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const fs = require('fs');
const discordSpoilerTag = "||"
const space = " "

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!ref') {
        rawdata = fs.readFileSync('./questions/ref.json');
        // Setup the question response
        let questionList = JSON.parse(rawdata);
        var randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
        // Build actual response   
        msg.reply(JSON.stringify(randomQuestion["Q"] + space + discordSpoilerTag 
            + randomQuestion["A"] + discordSpoilerTag));
    } else if (msg.content === '!general') {
        rawdata = fs.readFileSync('./questions/general.json');
    } else if (msg.content === '!part') {
        rawdata = fs.readFileSync('./questions/part.json');
    } else if (msg.content === '!ftv') {
        rawdata = fs.readFileSync('./questions/ftv.json');
    } else if (msg.content === '!help') {
        msg.reply("Supported commands are !ref, !general, !part, and !ftv")
    }
});

client.login(auth.token);