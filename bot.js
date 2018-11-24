const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Fortnite',
     details: `Battle Royal - In Lobby`,
     url: 'https://www.twitch.com/xdddd23',
     state: `Playing Solo (1 of 1)`,
    application_id: '502663260571697168',
     assets: {
        small_image: `511551607071309824`,
        small_text: 'Tier 86',
        large_image: `511551570677202955`,
        large_text: `Fortnite` }

  }
    });
});


client.login("NDAxNDE2Mzg0MjE2Njk0Nzg1.DtpUpQ.TsHAQBrrW2P6ClRkP7e1iTnHk-c");