const fs = require("fs");
const {Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js');


const prefix = "$";

client.on('ready', () => {
  console.log(`Bot starto`);
  client.channels.cache.get('887678982026326031').send("wejdź w ten link toprzestane");
});

client.on('messageCreate', (msg) => {
  if (msg.guild.me.nickname != `BudżetBot[${prefix}]`) {
    msg.guild.me.setNickname(`BudżetBot[${prefix}]`);
    console.log("Nickname Updated");
  }

  let args = msg.content.split(" ");
  if (args[0] == `${prefix}`){
    if (args[1] == "show") {
      show(msg)
    }
  }
});

function show(msg) {
  let data = fs.readFileSync('data.json', 'utf8');
  data = JSON.parse(data);

  let suma =
    (data.gr1 * 0.01) +
    (data.gr2 * 0.02) +
    (data.gr5 * 0.05) +
    (data.gr10 * 0.1) +
    (data.gr20 * 0.2) +
    (data.gr50 * 0.5) +
    (data.zl1 * 1) +
    (data.zl2 * 2) +
    (data.zl5 * 5) +
    (data.zl10 * 10) +
    (data.zl20 * 20) +
    (data.zl50 * 50) +
    (data.zl100 * 100) +
    (data.zl200 * 200) +
    (data.zl500 * 500);

  const showEmbed = new MessageEmbed()
    .setColor('#FFD700')
    .setTitle(suma + " PLN")
    .addFields(
       { name: 'gr1 :', value: data.gr1+"" , inline: true},
       { name: 'gr2 :', value: data.gr2+"" , inline: true},
       { name: 'gr5 :', value: data.gr5+"" , inline: true},
       { name: 'gr10:', value: data.gr10+"" , inline: true},
       { name: 'gr20:', value: data.gr20+"" , inline: true},
       { name: 'gr50:', value: data.gr50+"" , inline: true},
       { name: 'zl1 :', value: data.zl1+"" , inline: true},
       { name: 'zl2 :', value: data.zl2+"" , inline: true},
       { name: 'zl5 :', value: data.zl5+"" , inline: true},
       { name: 'zl10 :', value: data.zl10+"" , inline: true},
       { name: 'zl20 :', value: data.zl20+"" , inline: true},
       { name: 'zl50 :', value: data.zl50+"" , inline: true},
       { name: 'zl100 :', value: data.zl100+"" , inline: true},
       { name: 'zl200 :', value: data.zl200+"" , inline: true},
       { name: 'zl500 :', value: data.zl500+"" , inline: true}
     );

  msg.channel.send({ embeds: [showEmbed] })
}
client.login("OTA4Mjg4Mzk3NTExMTMxMTY2.YYzjfQ.7-QU17FVLG2X5m33MUU3eUVe2Z8");
