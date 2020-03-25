const discordSpoilerTag = "||"
const space = " "

var responseBuilder = {
    buildResponse: function (randomQuestion) {
        return JSON.stringify(randomQuestion["Q"] + space + discordSpoilerTag 
            + randomQuestion["A"] + discordSpoilerTag)
    }
};

module.exports = responseBuilder