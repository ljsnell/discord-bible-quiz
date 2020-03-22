const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!ref') {
        rawdata = fs.readFileSync('./questions/ref.json');
    } else if (msg.content === '!general') {
        rawdata = fs.readFileSync('./questions/general.json');
    } else if (msg.content === '!part') {
        rawdata = fs.readFileSync('./questions/part.json');
    } else if (msg.content === '!ftv') {
        rawdata = fs.readFileSync('./questions/ftv.json');
    } else {
        rawdata = fs.readFileSync('./questions/not_found.json');
    }
});

client.login(auth.token);