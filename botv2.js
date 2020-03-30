const Discord = require('discord.js');
const client = new Discord.Client();
const auth2 = require('./authv2.json');
const fs = require('fs');
const discordSpoilerTag = "||"
const space = " "
const sqlite3 = require('sqlite3').verbose();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

let db = new sqlite3.Database('./database/HebAndPetDB.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
    console.error(err.message);
}
console.log('Connected to the HebAndPetDB.db database.');
});

client.on('message', msg => {
    // Example call: !quiz:1:1:1,2,3
    // Selects a general question from the first 3 chapters
    if (msg.content.startsWith('!quiz')) {
        const args = msg.content.split(':');
        const command = args.shift().toLowerCase();
        queryString = 'SELECT * from Quest where QType = "' + args[0] + '" and Quality = "a" and Book in(' 
            + args[1] + ') and Chapter in(' + args[2] +') ORDER by RANDOM() LIMIT 1'
        question = db.get(queryString, (err, row) => {
            if (err) {
              return console.error(err.message);
            }
            return row
              ? msg.reply(row.Qtext + " " + discordSpoilerTag + row.Answer + " " + row.Ref + discordSpoilerTag)
              : msg.reply('Question not found for the specified parameters. Please check the examples here: https://github.com/ljsnell/discord-bible-quiz/blob/master/README.md');
          });
    }
    else if (msg.content.startsWith('!help')) {
        msg.reply("Please checkout the documentation here: https://github.com/ljsnell/discord-bible-quiz/blob/master/README.md")
    }    
});

client.login(auth2.token);

// async function queryDB(questionType, bookNumber, chapter) {
//     // Example Query:    
//     // select * from Questions where QType = 1 AND Quality = 'a' 
//     //      and Book = 3 and Chapter in (1,2) ORDER by RANDOM() LIMIT 1
//     // https://discordjs.guide/creating-your-bot/commands-with-user-input.html#basic-arguments    
//     query = 'SELECT * from Questions where QType = ' + questionType + ' Quality = "a" and Book in(' 
//         + bookNumber + ') and Chapter in(' + chapter +') ORDER by RANDOM() LIMIT 1'
//     console.log(query)
// }