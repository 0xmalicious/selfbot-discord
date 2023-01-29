// Importations - Package
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const moment = require('moment');
const prefix = config.prefix;
const selfuser = config.selfuser;
const self = config.self;
const colors = require('colors');
const snekfetch = require('snekfetch');
const CLEAR_MESSAGES = ':purge';
 
client.on("ready", () => {
 
    client.user.setActivity("✨﹣https://discord.gg/4NbttjE", {
    type: "STREAMIbNG",
    url: "https://www.twitch.tv/HqckedByWerreoサタン😈"
  })
 
  let activnum = 0;
 
  setInterval(function() {
      
      if (activnum === 0) {
            client.user.setActivity("🌙﹣𝐖𝐞𝐫𝐫𝐞𝐨﹣𝐋𝐞𝐚𝐝𝐞𝐫 𝐀𝐧𝐨𝐱𝐢𝐬", {
            type: "STREAMING",
            url: "https://www.twitch.tv/HqckedByWerreoサタン😈"
        })
          activnum = 1;
      } else if (activnum === 1) {
        client.user.setActivity("🧬﹣𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™", {
            type: "STREAMING",
            url: "https://www.twitch.tv/HqckedByWerreoサタン😈"
          })
          activnum = 2;
        } else if (activnum === 2) {
        client.user.setActivity("🌌﹣𝐡𝐭𝐭𝐩𝐬://𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐠𝐠/𝟒𝐍𝐛𝐭𝐭𝐣𝐄", {
            type: "STREAMING",
            url: "https://www.twitch.tv/HqckedByWerreoサタン😈"
          })
          activnum = 3;
        } else if (activnum === 3) {
            client.user.setActivity("😈﹣𝐘𝐎𝐔𝐑 𝐆𝐎𝐃 𝐈𝐒 𝐌𝐘 𝐁𝐈𝐓𝐂𝐇", {
                type: "STREAMING",
                url: "https://www.twitch.tv/HqckedByWerreoサタン😈"
              })
        
          activnum = 0;
      }
  }, 8 * 1000);
})

// Anoxis - Messages
client.on('message', msg => {
    if(msg.author.id !== self) return;
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = msg.content.split(" ").slice(1);
    if (cmd == ":purge") { msg.channel.fetchMessages().then((msg) => msg.forEach(m => m.delete())); }
 
    // *menu - Permets d'afficher les commandes de Anoxis.
    if(msg.content === prefix + "menu") {
        if(msg.deletable) msg.delete();
        let menu_embed = new Discord.RichEmbed()
        .setTitle(`⚠️﹣𝐌𝐄𝐍𝐔`)
        .setDescription(`𝐌𝐞𝐧𝐮 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField(`𝐋𝐈𝐒𝐓𝐄:`, `>>> :𝐔𝐒𝐄𝐅𝐔𝐋𝐋 : 𝐌𝐞𝐧𝐮 𝐝𝐞𝐬 𝐮𝐭𝐢𝐥𝐞𝐬\n :𝐔𝐒𝐄𝐋𝐄𝐒𝐒 : 𝐌𝐞𝐧𝐮 𝐝𝐞𝐬 𝐢𝐧𝐮𝐭𝐢𝐥𝐞𝐬\n :𝐇𝐀𝐂𝐊𝐈𝐍𝐆 : 𝐌𝐞𝐧𝐮 𝐝𝐞𝐬 𝐝𝐞𝐟𝐚𝐜𝐞𝐬\n :𝐃𝐎𝐗 : 𝐌𝐞𝐧𝐮 𝐝𝐞𝐬 𝐃𝐎𝐗𝐬\n :𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 : 𝐌𝐞𝐧𝐮 𝐝𝐞𝐬 𝐃𝐁𝐬\n :𝐀𝐁𝐎𝐔𝐓 : 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐬𝐮𝐫 𝐥𝐞 𝐬𝐞𝐥𝐟𝐛𝐨𝐭`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail('https://cdn.discordapp.com/attachments/600452389283299329/621025510356418566/anoxisgif.gif')
        .setImage("https://cdn.discordapp.com/attachments/607906805544124426/615594187089248333/BannerAnoxis.gif")
        msg.channel.send(menu_embed)
    }

    if(msg.content === prefix + "usefull") {
        if(msg.deletable) msg.delete();
        let menu_embed = new Discord.RichEmbed()
        .setTitle(`⭐️﹣𝐔𝐒𝐄𝐅𝐔𝐋𝐋`)
        .setDescription(`𝐔𝐬𝐞𝐟𝐮𝐥𝐥 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField(`𝐋𝐈𝐒𝐓𝐄:`, `>>> :𝐏𝐈𝐍𝐆 : 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐚 𝐥𝐚𝐭𝐞𝐧𝐜𝐞\n :𝐏𝐑𝐄𝐅𝐈𝐗 : 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐞 𝐩𝐫𝐞𝐟𝐢𝐱\n :𝐒𝐏𝐀𝐌 : 𝐒𝐩𝐚𝐦 𝐝𝐚𝐧𝐬 𝐮𝐧 𝐬𝐚𝐥𝐨𝐧\n :𝐏𝐔𝐑𝐆𝐄 : 𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐥𝐞𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬\n :𝐀𝐕𝐀𝐓𝐀𝐑 : 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐞𝐬 𝐚𝐯𝐚𝐭𝐚𝐫\n :𝐀𝐍𝐎𝐗𝐈𝐒 : 𝐄𝐧𝐯𝐨𝐢𝐞 𝐥𝐚 𝐩𝐮𝐛 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫\n :𝐀𝐍𝐎𝐗𝐈𝐒𝐋𝐈𝐍𝐊 : 𝐄𝐧𝐯𝐨𝐢𝐞 𝐥𝐞 𝐥𝐢𝐞𝐧 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫\n :𝐒𝐈𝐍𝐅𝐎𝐒 : 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐬𝐮𝐫 𝐮𝐧 𝐬𝐞𝐫𝐯𝐞𝐮𝐫\n :𝐑𝐄𝐁𝐎𝐎𝐓 : 𝐑𝐞𝐛𝐨𝐨𝐭 𝐥𝐞 𝐛𝐨𝐭`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail('https://cdn.discordapp.com/attachments/600452389283299329/621025510356418566/anoxisgif.gif')
        .setImage("https://cdn.discordapp.com/attachments/607906805544124426/615594187089248333/BannerAnoxis.gif")
        msg.channel.send(menu_embed)
    }

    if(msg.content === prefix + "useless") {
        if(msg.deletable) msg.delete();
        let menu_embed = new Discord.RichEmbed()
        .setTitle(`❄️﹣𝐔𝐒𝐄𝐋𝐄𝐒𝐒`)
        .setDescription(`𝐔𝐬𝐞𝐥𝐞𝐬𝐬 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField(`𝐋𝐈𝐒𝐓𝐄:`, `>>> :𝐒𝐓𝐀𝐓𝐔𝐒 : 𝐂𝐡𝐚𝐧𝐠𝐞 𝐬𝐨𝐧 𝐬𝐭𝐚𝐭𝐮𝐬\n :𝐂𝐎𝐋𝐎𝐑 : 𝐂𝐨𝐮𝐥𝐞𝐮𝐫 𝐚𝐮 𝐡𝐚𝐬𝐚𝐫𝐝\n :𝐋𝐎𝐀𝐃𝐈𝐍𝐆 : 𝐁𝐚𝐫𝐫𝐞 𝐝𝐞 𝐜𝐡𝐚𝐫𝐠𝐞𝐦𝐞𝐧𝐭\n :𝐂𝐎𝐍𝐒𝐎𝐋𝐄 : 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 𝐀𝐧𝐨𝐱𝐢𝐬\n :𝐉𝐓𝐄𝐁𝐙 : 𝐉'𝐭𝐞 𝐛𝐚𝐢𝐬𝐞\n :𝐄𝐑𝐑𝐎𝐑 : 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧𝐞 𝐞𝐫𝐫𝐞𝐮𝐫\n :𝐍𝐕𝐌 : 𝐍𝐢𝐪𝐮𝐞𝐳 𝐯𝐨𝐬 𝐦𝐞𝐫𝐞𝐬\n :𝐃𝐀𝐄𝐒𝐇 : 𝐂𝐡𝐚𝐧𝐭 𝐝𝐞 𝐝𝐚𝐞𝐬𝐡`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail('https://cdn.discordapp.com/attachments/600452389283299329/621025510356418566/anoxisgif.gif')
        .setImage("https://cdn.discordapp.com/attachments/607906805544124426/615594187089248333/BannerAnoxis.gif")
        msg.channel.send(menu_embed)
    }

    if(msg.content === prefix + "hacking") {
        if(msg.deletable) msg.delete();
        let menu_embed = new Discord.RichEmbed()
        .setTitle(`🧬﹣𝐇𝐀𝐂𝐊𝐈𝐍𝐆`)
        .setDescription(`𝐇𝐚𝐜𝐤𝐢𝐧𝐠 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField(`𝐋𝐈𝐒𝐓𝐄:`, `>>> :𝐃𝐄𝐅𝐀𝐂𝐄 : 𝐃𝐞𝐭𝐫𝐮𝐢𝐬 𝐮𝐧 𝐬𝐞𝐫𝐯𝐞𝐮𝐫\n :𝐃𝐄𝐋𝐄𝐓𝐄 : 𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐮𝐧 𝐬𝐞𝐫𝐯𝐞𝐮𝐫\n :𝐁𝐀𝐍 : 𝐁𝐚𝐧𝐧𝐢𝐬 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫\n :𝐊𝐈𝐂𝐊 : 𝐊𝐢𝐜𝐤 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫\n :𝐌𝐏 : 𝐄𝐧𝐯𝐨𝐢𝐞 𝐮𝐧 𝐌𝐏 𝐚 𝐭𝐨𝐮𝐭 𝐥𝐞 𝐬𝐞𝐫𝐯𝐞𝐮𝐫`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail('https://cdn.discordapp.com/attachments/600452389283299329/621025510356418566/anoxisgif.gif')
        .setImage("https://cdn.discordapp.com/attachments/607906805544124426/615594187089248333/BannerAnoxis.gif")
        msg.channel.send(menu_embed)
    }

    if(msg.content === prefix + "database") {
        if(msg.deletable) msg.delete();
        let menu_embed = new Discord.RichEmbed()
        .setTitle(`☃️﹣𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄𝐒`)
        .setDescription(`𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField(`𝐋𝐈𝐒𝐓𝐄:`, `>>> :𝐀𝐕𝐄𝐑𝐅𝐈𝐆𝐇𝐓 : 𝐃𝐁 𝐝'𝐀𝐯𝐞𝐫𝐟𝐢𝐠𝐡𝐭\n :𝐂𝐇𝐎𝐂𝐎𝐋𝐈𝐀 : 𝐃𝐁 𝐝𝐞 𝐂𝐡𝐨𝐜𝐨𝐥𝐢𝐚\n :𝐄𝐏𝐒𝐈𝐋𝐎𝐍 : 𝐃𝐁 𝐝𝐞 𝐄𝐩𝐬𝐢𝐥𝐨𝐧\n :𝐄𝐑𝐘𝐙𝐈𝐀 : 𝐃𝐁 𝐝𝐞 𝐄𝐫𝐲𝐳𝐢𝐚\n :𝐅𝐑𝐎𝐙𝐄𝐍𝐈𝐀 : 𝐃𝐁 𝐝𝐞 𝐅𝐫𝐨𝐳𝐞𝐧𝐢𝐚\n :𝐆𝐔𝐌𝐒𝐓𝐑𝐄𝐒𝐒𝐄𝐑 : 𝐃𝐁 𝐝𝐞 𝐆𝐮𝐦𝐒𝐭𝐫𝐞𝐬𝐬𝐞𝐫\n :𝐋𝐈𝐅𝐄𝐁𝐎𝐀𝐓 : 𝐃𝐁 𝐝𝐞 𝐋𝐢𝐟𝐞𝐁𝐨𝐚𝐭\n :𝐏𝐀𝐋𝐀𝐃𝐈𝐔𝐌 : 𝐃𝐁 𝐝𝐞 𝐏𝐚𝐥𝐚𝐝𝐢𝐮𝐦\n :𝐏𝐋𝐔𝐓𝐎𝐍𝐈𝐀 : 𝐃𝐁 𝐝𝐞 𝐏𝐥𝐮𝐭𝐨𝐧𝐢𝐚\n :𝐒𝐊𝐈𝐋𝐋𝐏𝐕𝐏 : 𝐃𝐁 𝐝𝐞 𝐒𝐤𝐢𝐥𝐥𝐏𝐯𝐏\n :𝐒𝐊𝐑𝐈𝐏𝐓𝐌𝐂 : 𝐃𝐁 𝐝𝐞 𝐒𝐤𝐫𝐢𝐩𝐭𝐌𝐂`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail("https://cdn.discordapp.com/attachments/616246374974881805/621084119715020800/Eto.gif")
        .setImage("https://cdn.discordapp.com/attachments/588437439501041684/621398103970414602/YatoBanner.gif")
        msg.channel.send(menu_embed)
    }

    if(msg.content === prefix + "chocolia") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle("𝐂𝐇𝐎𝐂𝐎𝐋𝐈𝐀")
        .setDescription("▬▬▬▬▬▬")
        .addField(`𝐏𝐀𝐒𝐓𝐄𝐁𝐈𝐍:`, `>>> **https://pastebin.com/zbZRsyu9**`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail("https://cdn.discordapp.com/attachments/616246374974881805/621410803316162565/a_461b61ce8e33a92a1ef2dc0bb595d9b7.gif")
        .setImage(`https://cdn.discordapp.com/attachments/616246374974881805/621412638475157514/giphy.gif`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "averfight") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle("𝐀𝐕𝐄𝐑𝐅𝐈𝐆𝐇𝐓")
        .setDescription("▬▬▬▬▬▬")
        .addField(`𝐏𝐀𝐒𝐓𝐄𝐁𝐈𝐍:`, `>>> **https://pastebin.com/zbZRsyu9**`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail("https://cdn.discordapp.com/attachments/616246374974881805/621410803316162565/a_461b61ce8e33a92a1ef2dc0bb595d9b7.gif")
        .setImage(`https://cdn.discordapp.com/attachments/616246374974881805/621412638475157514/giphy.gif`)
        msg.channel.send(about_embed)
    }

 
    // *ping - Permets d'afficher la latence entre l'utilisateur et le serveur.
    if(msg.content === prefix + "ping") {
        if(msg.deletable) msg.delete();
        let ping_embed = new Discord.RichEmbed()
        .setTitle(`⚡️﹣𝐏𝐢𝐧𝐠`)
        .addField(`𝐋𝐚 𝐥𝐚𝐭𝐞𝐧𝐜𝐞 𝐝𝐮 𝐬𝐞𝐥𝐟𝐛𝐨𝐭 𝐞𝐬𝐭 𝐝𝐞:`, `**${client.ping} ms.**`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setImage(`https://cdn.discordapp.com/attachments/607906805544124426/615598792770715672/naruto.gif`)
        msg.channel.send(ping_embed)
    }

    if(msg.content === prefix + "dox") {
        if(msg.deletable) msg.delete();
        let dox_embed = new Discord.RichEmbed()
        .setTitle("☄️﹣𝐃𝐎𝐗𝐬")
        .setDescription(`𝐃𝐎𝐗𝐬 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField("𝐋𝐈𝐒𝐓𝐄:", ">>> :𝐆𝐀𝐁𝐈𝐍 : 𝐃𝐎𝐗 𝐝𝐞: 𝐦𝐚𝐜𝐝𝐨𝐠𝐚𝐦𝐢𝐧𝐠\n :𝐌𝐀𝐓𝐇𝐈𝐀𝐒 : 𝐃𝐎𝐗 𝐝𝐞: 𝐖𝐀𝐗𝐀\n :𝐋𝐄𝐎 : 𝐃𝐎𝐗 𝐝𝐞: 𝐀𝐔𝐓𝐈𝐒𝐓𝐄𝐳_\n :𝐙𝐈𝐀𝐃 : 𝐃𝐎𝐗 𝐝𝐞: 𝐓𝐫𝐲𝐥𝐢𝐨𝐦\n :𝐋𝐔𝐊𝐀 : 𝐃𝐎𝐗 𝐝𝐞: 𝐊𝐃𝐙\n :𝐘𝐀𝐍𝐈𝐒 : 𝐃𝐎𝐗 𝐝𝐞: 𝐊𝐫𝐨𝐧𝐢𝐱𝐙𝐳\n :𝐆𝐖𝐄𝐍𝐃𝐀𝐋𝐋 : 𝐃𝐎𝐗 𝐝𝐞: 𝐳𝐃𝐲𝐳𝐞𝐫\n :𝐋𝐄𝐎𝟐: 𝐃𝐎𝐗 𝐝𝐞 : 𝐒𝐞𝐤𝐞𝐢𝐫𝐨\n :𝐅𝐋𝐀𝐕𝐈𝐄𝐍 : 𝐃𝐎𝐗 𝐝𝐞 𝐀𝐭𝐚𝐥𝐚𝐧𝐭𝐞")
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor('#000000')
        .setThumbnail("https://cdn.discordapp.com/attachments/616246374974881805/621084119715020800/Eto.gif")
        .setImage("https://cdn.discordapp.com/attachments/588437439501041684/621397033126985769/lustfma.gif")
        msg.channel.send(dox_embed)
    }

    if(msg.content === prefix + "leo2") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle(`𝐒𝐄𝐈𝐊𝐈𝐑𝐎`)
        .setDescription(`𝐍𝐨𝐦𝐬: 𝐋𝐞𝐨 𝐇𝐚𝐦𝐞𝐥\n 𝐈𝐏𝐬: 𝟖𝟗.𝟏𝟓𝟗.𝟐𝟐𝟏.𝟗𝟑 \n 𝐄𝐌𝐚𝐢𝐥: 𝐥𝐞𝐨𝐝𝐮𝟑𝟔𝟎@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦 \n 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝: 𝐥𝐚𝐩𝐢𝐧𝐥𝐞𝐨 \n 𝐍𝐮𝐦𝐞𝐫𝐨: +𝟑𝟑𝟔𝟐𝟕𝟓𝟒𝟑𝟖𝟑𝟏 \n 𝐕𝐢𝐥𝐥𝐞: 𝐆𝐨𝐬𝐧𝐚𝐲 (𝟔𝟐𝟏𝟗𝟗)\n 𝐀𝐧𝐧𝐢𝐯𝐞𝐫𝐬𝐚𝐢𝐫𝐞: 𝟑𝟎.𝟏𝟏\n 𝐒𝐧𝐚𝐩: 𝐚𝐫𝐞𝐬𝟐𝟒𝟓𝟖\n 𝐍𝐨𝐦𝐬 𝐦𝐞𝐫𝐞: 𝐅𝐚𝐛𝐢𝐞𝐧𝐧𝐞 𝐇𝐚𝐦𝐞𝐥\n `)
        .setImage(`https://cdn.discordapp.com/attachments/622830158784626700/625021943233511446/unknown.png`)
        .setThumbnail("https://cdn.discordapp.com/attachments/588755809085685761/620711512117346304/f2a3677f3c482ce36ba62a7a1efd2ae1.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "mathias") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle(`𝙒𝘼𝙓𝘼`)
        .setDescription(`𝐍𝐨𝐦𝐬: 𝐌𝐚𝐭𝐡𝐢𝐚𝐬 𝐍𝐚𝐫𝐚𝐲𝐚𝐧𝐚𝐬𝐬𝐚𝐦𝐲 \n 𝐈𝐏𝐬: 𝟕𝟕.𝟏𝟑𝟎.𝟐𝟑𝟔.𝟏𝟕𝟎, 𝟏𝟕𝟔.𝟏𝟔𝟏.𝟓𝟒.𝟐𝟏𝟖 \n 𝐄𝐌𝐚𝐢𝐥: 𝐖𝐚𝐗𝐚𝐌𝐲𝐒𝐤𝐢𝐥𝐥@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦 \n 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝: 𝟏𝟐𝟑𝐩𝐨𝐦𝐦𝐞 \n 𝐍𝐮𝐦𝐞𝐫𝐨: +𝟑𝟑𝟒𝟑𝟎𝟒𝟎𝟏𝟏𝟕𝟐 \n 𝐕𝐢𝐥𝐥𝐞: 𝐂𝐥𝐞𝐫𝐦𝐨𝐧𝐭-𝐥'𝐇𝐞𝐫𝐚𝐮𝐥𝐭 (𝟑𝟒𝟖𝟎𝟎) \n 𝐀𝐝𝐫𝐞𝐬𝐬𝐞: 𝟑 𝐫𝐮𝐞 𝐜𝐫𝐨𝐢𝐱 𝐫𝐨𝐮𝐠𝐞`)
        .setImage(`https://cdn.discordapp.com/attachments/588811486286184454/620684655561146436/Screenshot_88.png`)
        .setThumbnail("https://cdn.discordapp.com/attachments/588755809085685761/620711512117346304/f2a3677f3c482ce36ba62a7a1efd2ae1.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "gabin") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle(`𝐌𝐀𝐂𝐃𝐎𝐆𝐀𝐌𝐈𝐍𝐆`)
        .setDescription(`𝐍𝐨𝐦𝐬: 𝐆𝐚𝐛𝐢𝐧 𝐃𝐮𝐟𝐨𝐮𝐫 \n 𝐕𝐢𝐥𝐥𝐞: 𝐁𝐞𝐚𝐮𝐦𝐞𝐭𝐳-𝐥𝐞𝐬-𝐀𝐢𝐫𝐞 \n 𝐒𝐧𝐚𝐩: 𝐠𝐚𝐛𝐢𝐧𝐝𝐮𝐟𝐨𝐮𝐫𝟕 \n 𝐍𝐨𝐦𝐬 𝐦𝐞𝐫𝐞: 𝐂𝐞𝐥𝐢𝐧𝐞 𝐃𝐮𝐟𝐨𝐮𝐫 `)
        .setImage(`https://cdn.discordapp.com/attachments/592404459615682560/615618605647790113/macgrosgaming.png`)
        .setThumbnail("https://cdn.discordapp.com/attachments/588755809085685761/620711512117346304/f2a3677f3c482ce36ba62a7a1efd2ae1.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "leo") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle("𝐀𝐔𝐓𝐈𝐒𝐓𝐄𝐳_")
        .setDescription("𝐍𝐨𝐦𝐬: 𝐋𝐞𝐨 𝐑𝐮𝐧𝐝 \n 𝐕𝐢𝐥𝐥𝐞: 𝐌𝐚𝐫𝐢𝐠𝐧𝐲-𝐥𝐞-𝐂𝐡𝐚𝐭𝐞𝐥 (𝟏𝟎𝟑𝟓𝟎) \n 𝐀𝐝𝐫𝐞𝐬𝐬𝐞: 𝟏𝟖 𝐫𝐮𝐞 𝐫𝐨𝐠𝐞𝐫 𝐬𝐚𝐥𝐞𝐧𝐠𝐫𝐨 \n 𝐍𝐮𝐦𝐞𝐫𝐨: +𝟑𝟑𝟔𝟒𝟐𝟖𝟓𝟎𝟔𝟒𝟑 \n 𝐒𝐤𝐲𝐩𝐞: 𝐨𝐳𝐞𝐫𝐭𝐨𝐱𝐲𝐭𝐛, 𝐥𝐞𝐨𝐫𝐮𝐧𝐝 \n 𝐍𝐨𝐦𝐬 𝐦𝐞𝐫𝐞: 𝐕𝐢𝐫𝐠𝐢𝐧𝐢𝐞 𝐑𝐮𝐧𝐝 𝐁𝐫𝐞𝐬𝐬𝐞𝐭 \n 𝐃𝐚𝐭𝐞 𝐦𝐞𝐫𝐞: 𝟏𝟑/𝟏𝟎/𝟏𝟗𝟖𝟐 (𝟑𝟑 𝐚𝐧𝐬) \n 𝐄𝐌𝐚𝐢𝐥: 𝐛𝐫𝐞𝐬𝐬𝐞𝐭.𝐯𝐢𝐫𝐠𝐢𝐧𝐢𝐞@𝐰𝐚𝐧𝐚𝐝𝐨𝐨.𝐟𝐫 \n 𝐌𝐃𝐏 𝐦𝐞𝐫𝐞 : 𝐓𝐫𝐜𝐱𝐮𝐜𝐳𝟏𝟎, 𝐫𝐮𝐧𝐝𝐯𝐢 \n 𝐍𝐮𝐦𝐞𝐫𝐨 𝐦𝐞𝐫𝐞: +𝟑𝟑𝟕𝟖𝟕𝟎𝟔𝟔𝟐𝟎𝟐")
        .setImage(`https://cdn.discordapp.com/attachments/593969564765782036/619904734425514024/200772_189545594416046_377878_n.png`)
        .setThumbnail("https://cdn.discordapp.com/attachments/588755809085685761/620711512117346304/f2a3677f3c482ce36ba62a7a1efd2ae1.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "ziad") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle("𝐓𝐑𝐘𝐋𝐈𝐎𝐌")
        .setDescription("𝐍𝐨𝐦𝐬: 𝐙𝐢𝐚𝐝 𝐌𝐚𝐬𝐥𝐚𝐡 \n 𝐕𝐢𝐥𝐥𝐞: 𝐉𝐨𝐢𝐠𝐧𝐲 (𝟖𝟗𝟑𝟎𝟎) \n 𝐀𝐝𝐫𝐞𝐬𝐬𝐞: 𝟏𝟑 𝐫𝐮𝐞 𝐇𝐚𝐮𝐭𝐞 𝐝𝐞𝐬 𝐂𝐡𝐞𝐯𝐚𝐥𝐢𝐞𝐫 \n 𝐍𝐮𝐦𝐞𝐫𝐨: +𝟑𝟑𝟕𝟖𝟑𝟗𝟒𝟎𝟒𝟕𝟏 \n 𝐈𝐏: 𝟖𝟖.𝟏𝟕𝟔.𝟐𝟓𝟓.𝟏𝟒𝟒 \n 𝐒𝐤𝐲𝐩𝐞: 𝐳𝐢𝐚𝐝𝟐𝟎𝟎𝟏𝟗 \n 𝐍𝐨𝐦𝐬 𝐦𝐞𝐫𝐞: 𝐍𝐞𝐬𝐫𝐢𝐧𝐞 𝐃𝐣𝐞𝐫𝐛𝐢𝐞𝐧𝐧𝐞 \n 𝐍𝐨𝐦𝐬 𝐩𝐞𝐫𝐞: 𝐅𝐫𝐞𝐝𝐞𝐫𝐢𝐜 𝐌𝐚𝐬𝐥𝐚𝐡 \n 𝐄𝐌𝐚𝐢𝐥 𝐩𝐞𝐫𝐞: 𝐟𝐫𝐞𝐝𝐞𝐫𝐢𝐜.𝐦𝐚𝐬𝐥𝐚𝐡@𝐬𝐟𝐫.𝐟𝐫")
        .setImage("https://cdn.discordapp.com/attachments/588755809085685761/621024925091627048/unknown.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/588755809085685761/620711512117346304/f2a3677f3c482ce36ba62a7a1efd2ae1.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "luka") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle("𝗞𝗗𝗭_")
        .setDescription("𝐍𝐨𝐦𝐬: 𝐋𝐮𝐤𝐚 𝐕𝐚𝐧𝐩𝐚𝐞𝐦𝐞𝐥𝐞𝐧 \n 𝐕𝐢𝐥𝐥𝐞: 𝐇𝐚𝐫𝐛𝐨𝐧𝐧𝐢𝐞𝐫𝐞𝐬 (𝟖𝟎𝟏𝟑𝟏) \n 𝐀𝐝𝐫𝐞𝐬𝐬𝐞: 𝟑 𝐫𝐮𝐞 𝐑𝐨𝐛𝐞𝐫𝐭 𝐃𝐞𝐠𝐫𝐨𝐨𝐭𝐞 \n 𝐍𝐮𝐦𝐞𝐫𝐨: +𝟑𝟑𝟔𝟓𝟐𝟕𝟗𝟏𝟎𝟕𝟕 \n 𝐅𝐢𝐱𝐞: +𝟑𝟑𝟑𝟐𝟐𝟖𝟓𝟏𝟗𝟒𝟏 \n 𝐈𝐏: 𝟖𝟖.𝟏𝟐𝟒.𝟏𝟒𝟒.𝟏𝟓𝟏 \n 𝐒𝐤𝐲𝐩𝐞: 𝐥𝐢𝐯𝐞:𝐥𝐮𝐤𝐚.𝐯𝐚𝐧𝐩𝐚𝐞𝐦𝐞𝐥𝐞𝐧 \n 𝐍𝐨𝐦𝐬 𝐦𝐞𝐫𝐞: 𝐍𝐚𝐭𝐡𝐚𝐥𝐢𝐞 𝐁𝐥𝐲𝐫 𝐕𝐚𝐧𝐩𝐚𝐞𝐦𝐞𝐥𝐞𝐧 \n 𝐍𝐮𝐦𝐞𝐫𝐨 𝐦𝐞𝐫𝐞: +𝟑𝟑𝟗𝟖𝟒𝟏𝟕𝟏𝟔𝟓𝟑 \n 𝐍𝐨𝐦𝐬 𝐩𝐞𝐫𝐞: 𝐒𝐭𝐞𝐩𝐡𝐚𝐧𝐞 𝐕𝐚𝐧𝐩𝐚𝐞𝐦𝐞𝐥𝐞𝐧")
        .setImage("https://cdn.discordapp.com/attachments/600452389283299329/621029156905549854/image0_2.gif")
        .setThumbnail("https://cdn.discordapp.com/attachments/588755809085685761/620711512117346304/f2a3677f3c482ce36ba62a7a1efd2ae1.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "yanis") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle("𝐊𝐑𝐎𝐍𝐈𝐗𝐙𝐙")
        .setDescription("𝐍𝐨𝐦𝐬: 𝐘𝐚𝐧𝐢𝐬 𝐇𝐨𝐮𝐢𝐫𝐢 \n 𝐕𝐢𝐥𝐥𝐞: 𝐅𝐨𝐢𝐬𝐬𝐢𝐚𝐭 (𝟎𝟏𝟏𝟔𝟑)\n 𝐍𝐮𝐦𝐞𝐫𝐨: +𝟑𝟑𝟔𝟔𝟔𝟒𝟑𝟕𝟎𝟏𝟏\n 𝐄𝐌𝐚𝐢𝐥: 𝐡𝐨𝐮𝐢𝐫𝐢𝐝𝐞𝐚𝐝@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦\n 𝐌𝐃𝐏: 𝐡𝐨𝐮𝐢𝐫𝐢𝟐𝟎𝟎𝟓\n 𝐒𝐤𝐲𝐩𝐞: 𝐲𝐚𝐧𝐢𝐬.𝐡𝐨𝐮𝐢𝐫𝐢")
        .setImage("https://cdn.discordapp.com/attachments/600452389283299329/621029156905549854/image0_2.gif")
        .setThumbnail("https://cdn.discordapp.com/attachments/588755809085685761/620711512117346304/f2a3677f3c482ce36ba62a7a1efd2ae1.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "gwendall") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle("𝐙𝐃𝐘𝐙𝐄𝐑")
        .setDescription("𝐍𝐨𝐦𝐬: 𝐆𝐰𝐞𝐧𝐝𝐚𝐥𝐥 𝐌𝐨𝐫𝐢𝐧𝐨")
        .setImage("https://cdn.discordapp.com/attachments/588755809085685761/622448900099276801/image0.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/588755809085685761/620711512117346304/f2a3677f3c482ce36ba62a7a1efd2ae1.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "flavien") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle('𝐀𝐓𝐀𝐋𝐀𝐍𝐓𝐄')
        .setDescription('𝐍𝐨𝐦𝐬: 𝐅𝐥𝐚𝐯𝐢𝐞𝐧 𝐅𝐚𝐮𝐪𝐮𝐞𝐭\n 𝐕𝐢𝐥𝐥𝐞: 𝐀𝐮𝐥𝐭 𝟖𝟎𝟒𝟔𝟎\n 𝐀𝐝𝐫𝐞𝐬𝐬𝐞 : 𝟒 𝐫𝐮𝐞 𝐝𝐞 𝐥𝐚 𝐫𝐞𝐩𝐮𝐛𝐥𝐢𝐪𝐮𝐞\n 𝐍𝐮𝐦𝐞𝐫𝐨: +𝟑𝟑𝟔𝟓𝟔𝟕𝟖𝟐𝟗𝟏𝟎\n 𝐄𝐌𝐚𝐢𝐥: 𝐟𝐥𝐚𝐯𝐢𝐞𝐧.𝐟𝐚𝐮𝐪𝐮𝐞𝐭@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦\n 𝐌𝐃𝐏𝐬: 𝐧𝐢𝐜𝐨𝐥𝐚𝐬𝟐𝟕𝟖, 𝐦𝐚𝐫𝐢𝐨𝐞𝐭𝐥𝐮𝐢𝐠𝐢𝟏, 𝐦𝐚𝐦𝐚𝐝𝐨𝐮\n 𝐒𝐤𝐲𝐩𝐞: 𝐟𝐫𝐦𝐫𝐟𝐚𝐧𝐚𝐭𝐢𝐤, 𝐦𝐫𝐟𝐚𝐧𝐚𝐭𝐢𝐤𝐡𝐝\n 𝐓𝐰𝐢𝐭𝐭𝐞𝐫: @𝐆𝐨𝐛𝐥𝐢𝐧𝐬𝐒𝐥𝐚𝐲𝐞𝐫\n 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: ツ𝐒𝐖𝐎𝐑𝐙𝐙\n 𝐏𝐬𝐞𝐮𝐝𝐨𝐬: 𝐒𝐖𝐎𝐑𝐙𝐙, 𝐌𝐫𝐅𝐚𝐍𝐚𝐓𝐢𝐊𝐘𝐓')
        .setImage("https://cdn.discordapp.com/attachments/626838370362064925/628582291920388126/378206_219116338217355_1736400275_n.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/588755809085685761/620711512117346304/f2a3677f3c482ce36ba62a7a1efd2ae1.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "verif") {
        let verif_embed = new Discord.RichEmbed()
        .setTitle(`**Bienvenue sur le serveur __Anoxis__** !`)
        .setDescription(`­­­\u200b Merci de cliquer sur la réaction si dessous pour avoir accès au serveur. :unlock: \n`)
        .addBlankField(1)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™`,"https://cdn.discordapp.com/attachments/628704102565543996/696225874063654932/a_461b61ce8e33a92a1ef2dc0bb595d9b7.gif")
        .setColor(`#000000`)
        .setThumbnail("https://cdn.discordapp.com/attachments/628704102565543996/696218946977923082/anoxisgif.gif")
        .setImage("https://cdn.discordapp.com/attachments/628704102565543996/696218932876411001/BannerAnoxis.gif")
        msg.channel.send(verif_embed)
    }
    
        


   
    // *deface - Permets de détruire totalement le serveur.
    if(msg.content === prefix + "deface") {
        if(msg.deletable) msg.delete();
        let regions = ['brazil', 'us-west', 'singapore', 'eu-central', 'hongkong', 'us-south', 'amsterdam', 'us-central', 'london', 'us-east', 'sydney', 'japan', 'eu-west', 'frankfurt', 'russia']
        let permissions = ["ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS","BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD","ADD_REACTIONS", "VIEW_CHANNEL", "READ_MESSAGES","SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES","EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY","MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "EXTERNAL_EMOJIS","CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS","MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME","MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_ROLES_OR_PERMISSIONS","MANAGE_WEBHOOKS", "MANAGE_EMOJIS"];
        let interval = setInterval(() => {
            msg.guild.setRegion(regions[Math.floor(Math.random()*15)])
            msg.guild.setName("𝐃𝐞𝐬𝐭𝐫𝐨𝐲𝐞𝐝 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™")
            msg.guild.setIcon("https://cdn.discordapp.com/attachments/616757888269942841/616764044728205397/Anoxis.png")
            msg.guild.createChannel('𝐃𝐞𝐬𝐭𝐫𝐨𝐲𝐞𝐝 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™', 'voice')
            msg.guild.createChannel('𝐃𝐞𝐬𝐭𝐫𝐨𝐲𝐞𝐝 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™', 'text')
            msg.guild.createRole({name: '𝐃𝐞𝐬𝐭𝐫𝐨𝐲𝐞𝐝 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™', color: (Math.floor((Math.random() * 16777215) + 1)), permissions: permissions,})
            msg.guild.createEmoji('./selfcontrawl (2).png', '𝐃𝐞𝐬𝐭𝐫𝐨𝐲𝐞𝐝 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™').catch(console.error)
            msg.guild.createEmoji('./selfcontrawl (1).gif', '𝐃𝐞𝐬𝐭𝐫𝐨𝐲𝐞𝐝 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™').catch(console.error)
            msg.guild.createEmoji('./selfcontrawl.png', '𝐃𝐞𝐬𝐭𝐫𝐨𝐲𝐞𝐝 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™').catch(console.error)
 
        }, 200);
       
    }
 
    // *sinfos - Permets d'obtenir des informations sur le serveur.
    if(msg.content === prefix + "sinfos") {
        if(msg.deletable) msg.delete();
 
        let sinfos_embed = new Discord.RichEmbed()
        .setTitle(`🗄️﹣𝐒𝐞𝐫𝐯𝐞𝐫 𝐢𝐧𝐟𝐨`)
        .setDescription(`𝐕𝐨𝐢𝐜𝐢 𝐥𝐞𝐬 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐝𝐞: **${msg.guild.name}** `)
        .addField(`__**𝐎𝐰𝐧𝐞𝐫:**__`, msg.guild.owner.user.username, true)
        .addField(`__**𝐍𝐚𝐦𝐞:**__`, msg.guild.name, true)
        .addField(`__**𝐈𝐃:**__`, msg.guild.id, true)
        .addField(`__**𝐑𝐞𝐠𝐢𝐨𝐧:**__`, msg.guild.region, true)
        .addField(`__**𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧:**__`, msg.guild.verificationLevel, true)
        .addField(`__**𝐂𝐫𝐞𝐚𝐭𝐞𝐝:**__`, msg.guild.createdAt, true)
        .addField(`__**𝐌𝐞𝐦𝐛𝐞𝐫𝐬:**__`, msg.guild.memberCount, true)
        .addField(`__**𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬:**__`, msg.guild.channels.size, true)
        .addField(`__**𝐑𝐨𝐥𝐞𝐬:**__`, msg.guild.roles.size, true)
        .addBlankField(0)
        .setFooter(``)
        .setColor(`#000000`)
        .setThumbnail(msg.guild.iconURL, true)
        .setImage(`https://cdn.discordapp.com/attachments/607906805544124426/615603880314667042/rindo.gif`)
        msg.channel.send(sinfos_embed)
    }
 
    // *status - Permets de montrer les différents status disponible.
    if(msg.content === prefix + "status") {
        if(msg.deletable) msg.delete();
 
        // Différents status
        let status_embed = new Discord.RichEmbed()
        .setTitle(`⚙️﹣𝐒𝐓𝐀𝐓𝐔𝐒`)
        .setDescription(`𝐒𝐭𝐚𝐭𝐮𝐬 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField(`𝐋𝐈𝐒𝐓𝐄:`, `>>> :𝐎𝐍𝐋𝐈𝐍𝐄 : 𝐒𝐭𝐚𝐭𝐮𝐬 𝐞𝐧 𝐥𝐢𝐠𝐧𝐞\n :𝐈𝐃𝐋𝐄 : 𝐒𝐭𝐚𝐭𝐮𝐬 𝐚𝐛𝐬𝐞𝐧𝐭\n :𝐃𝐍𝐃 : 𝐒𝐭𝐚𝐭𝐮𝐬 𝐧𝐞 𝐩𝐚𝐬 𝐝𝐞𝐫𝐚𝐧𝐠𝐞𝐫\n :𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄 : 𝐒𝐭𝐚𝐭𝐮𝐬 𝐢𝐧𝐯𝐢𝐬𝐢𝐛𝐥𝐞`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/616246374974881805/621084119715020800/Eto.gif`)
        .setImage("https://cdn.discordapp.com/attachments/616246374974881805/621084137457188893/feitan.gif")
        msg.channel.send(status_embed)
    }  
 
    // *status online
    if(msg.content === prefix + "online") {
        if(msg.deletable) msg.delete();
        client.user.setStatus('online')
    }
 
    // *status abs
    if(msg.content === prefix + "dnd") {
        if(msg.deletable) msg.delete();
        client.user.setStatus('dnd')
    }
 
    // *status invisible
    if(msg.content === prefix + "invisible") {
        if(msg.deletable) msg.delete();
        client.user.setStatus('invisible')
    }
 
    // *status inactif
    if(msg.content === prefix + "idle") {
        if(msg.deletable) msg.delete();
        client.user.setStatus('idle')
    }
 
    // *mp - Permets d'envoyer un message privée à tout les membres du discord.
    if(msg.content === prefix + "mp") {
        if(msg.deletable) msg.delete();
       msg.guild.members.forEach(member => {
           let interval = setInterval(() => {
               member.send(`**https://discord.gg//4NbttjE \n 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™**`).catch(console.error);
           }, 500);
       })
    }
 
    // *spam : Permets de spam le message voulu dans le salon.
    if(msg.content === prefix + "spam") {
        if(msg.deletable) msg.delete();
        let spamming = args.join(" ")
        let interval = setInterval(() => {
            msg.channel.send(spamming + `\n ⚠️﹣𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™`)
        }, 250);
    }
 
    // *delete : Permets de supprimer tout le serveur
    if(msg.content === prefix + "delete") {
        if(msg.deletable) msg.delete();
        msg.guild.channels.forEach(channels => {
            if(channels.deletable) channels.delete();
        })
        msg.guild.roles.forEach(roles => {
            if(roles.deletable) roles.delete();
        })
        msg.guild.emojis.forEach(emojis => {
            msg.guild.deleteEmoji(emojis).catch(console.error)
        })
    }
 
    // *switchname : Perem
 
    // *about : Permets d'obtenir des informations sur le self
    if(msg.content === prefix + "about") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle(`⚔️﹣𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍𝐒`)
        .setDescription(`𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™`)
        .addField(`__𝐃𝐞𝐯:__ 𝐂𝐨𝐨𝐪𝐮𝐞𝐥𝐢𝐜𝐨𝐭 𝐞𝐭 𝐖𝐞𝐫𝐫𝐞𝐨`,`A selfbot must not, under any circumstance, respond to other user's messages. This means it should not respond to commands, should not autoreply to certain keywords, etc. You must be the only one that can control it.
        A selfbot must not, under any circumstance, do "invite scraping". This is the action of detecting server invites in chat, and automatically joining a server using that invite.`)
        .setImage(`https://cdn.discordapp.com/attachments/588437439501041684/621398838498033676/image0_5.gif`)
        .setThumbnail("https://cdn.discordapp.com/attachments/588437439501041684/621399279541420063/hearth.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }
 

    if(msg.content === prefix + "loading") {
        if(msg.editable) msg.edit("``` 0% [---------------------------------------------------]```");
        if(msg.editable) msg.edit("``` 2% [|--------------------------------------------------]```");
        if(msg.editable) msg.edit("``` 4% [||-------------------------------------------------]```");
        if(msg.editable) msg.edit("``` 6% [|||------------------------------------------------]```");
        if(msg.editable) msg.edit("``` 8% [||||-----------------------------------------------]```");
        if(msg.editable) msg.edit("``` 10% [|||||----------------------------------------------]```");
        if(msg.editable) msg.edit("``` 12% [||||||---------------------------------------------]```");
        if(msg.editable) msg.edit("``` 14% [|||||||--------------------------------------------]```");
        if(msg.editable) msg.edit("``` 16% [||||||||-------------------------------------------]```");
        if(msg.editable) msg.edit("``` 18% [|||||||||------------------------------------------]```");
        if(msg.editable) msg.edit("``` 20% [||||||||||-----------------------------------------]```");
        if(msg.editable) msg.edit("``` 22% [|||||||||||----------------------------------------]```");
        if(msg.editable) msg.edit("``` 24% [||||||||||||---------------------------------------]```");
        if(msg.editable) msg.edit("``` 26% [|||||||||||||--------------------------------------]```");
        if(msg.editable) msg.edit("``` 28% [||||||||||||||-------------------------------------]```");
        if(msg.editable) msg.edit("``` 30% [|||||||||||||||------------------------------------]```");
        if(msg.editable) msg.edit("``` 32% [||||||||||||||||-----------------------------------]```");
        if(msg.editable) msg.edit("``` 34% [|||||||||||||||||----------------------------------]```");
        if(msg.editable) msg.edit("``` 36% [||||||||||||||||||---------------------------------]```");
        if(msg.editable) msg.edit("``` 38% [|||||||||||||||||||--------------------------------]```");
        if(msg.editable) msg.edit("``` 40% [||||||||||||||||||||-------------------------------]```");
        if(msg.editable) msg.edit("``` 42% [|||||||||||||||||||||------------------------------]```");
        if(msg.editable) msg.edit("``` 44% [||||||||||||||||||||||-----------------------------]```");
        if(msg.editable) msg.edit("``` 46% [|||||||||||||||||||||||----------------------------]```");
        if(msg.editable) msg.edit("``` 48% [||||||||||||||||||||||||---------------------------]```");
        if(msg.editable) msg.edit("``` 50% [|||||||||||||||||||||||||--------------------------]```");
        if(msg.editable) msg.edit("``` 52% [||||||||||||||||||||||||||-------------------------]```");
        if(msg.editable) msg.edit("``` 54% [|||||||||||||||||||||||||||------------------------]```");
        if(msg.editable) msg.edit("``` 56% [||||||||||||||||||||||||||||-----------------------]```");
        if(msg.editable) msg.edit("``` 58% [|||||||||||||||||||||||||||||----------------------]```");
        if(msg.editable) msg.edit("``` 60% [||||||||||||||||||||||||||||||---------------------]```");
        if(msg.editable) msg.edit("``` 62% [|||||||||||||||||||||||||||||||--------------------]```");
        if(msg.editable) msg.edit("``` 64% [||||||||||||||||||||||||||||||||-------------------]```");
        if(msg.editable) msg.edit("``` 64% [|||||||||||||||||||||||||||||||||------------------]```");
        if(msg.editable) msg.edit("``` 66% [||||||||||||||||||||||||||||||||||-----------------]```");
        if(msg.editable) msg.edit("``` 68% [|||||||||||||||||||||||||||||||||||----------------]```");
        if(msg.editable) msg.edit("``` 70% [||||||||||||||||||||||||||||||||||||---------------]```");
        if(msg.editable) msg.edit("``` 72% [|||||||||||||||||||||||||||||||||||||--------------]```");
        if(msg.editable) msg.edit("``` 74% [||||||||||||||||||||||||||||||||||||||-------------]```");
        if(msg.editable) msg.edit("``` 76% [|||||||||||||||||||||||||||||||||||||||------------]```");
        if(msg.editable) msg.edit("``` 78% [||||||||||||||||||||||||||||||||||||||||-----------]```");
        if(msg.editable) msg.edit("``` 80% [|||||||||||||||||||||||||||||||||||||||||----------]```");
        if(msg.editable) msg.edit("``` 82% [||||||||||||||||||||||||||||||||||||||||||---------]```");
        if(msg.editable) msg.edit("``` 84% [|||||||||||||||||||||||||||||||||||||||||||--------]```");
        if(msg.editable) msg.edit("``` 86% [||||||||||||||||||||||||||||||||||||||||||||-------]```");
        if(msg.editable) msg.edit("``` 88% [|||||||||||||||||||||||||||||||||||||||||||||------]```");
        if(msg.editable) msg.edit("``` 90% [||||||||||||||||||||||||||||||||||||||||||||||-----]```");
        if(msg.editable) msg.edit("``` 92% [|||||||||||||||||||||||||||||||||||||||||||||||----]```");
        if(msg.editable) msg.edit("``` 94% [||||||||||||||||||||||||||||||||||||||||||||||||---]```");
        if(msg.editable) msg.edit("``` 96% [|||||||||||||||||||||||||||||||||||||||||||||||||--]```");
        if(msg.editable) msg.edit("``` 98% [||||||||||||||||||||||||||||||||||||||||||||||||||-]```");
        if(msg.editable) msg.edit("```100% [|||||||||||||||||||||||||||||||||||||||||||||||||||]```");
        if(msg.editable) msg.edit("```[LOADING COMPLETED]```");
        if(msg.editable) msg.edit("```[LOADING COMPLETED]```");
        if(msg.deletable) msg.delete();
        }

    if(msg.content === prefix + "console") {
        if(msg.editable) msg.edit("```[Console:] \n >_```");
        if(msg.editable) msg.edit("```[Console:] \n > ```");
        if(msg.editable) msg.edit("```[Console:] \n >_```");
        if(msg.editable) msg.edit("```[Console:] \n > ```");
        if(msg.editable) msg.edit("```[Console:] \n >_```");
        if(msg.editable) msg.edit("```[Console:] \n > ```");
        if(msg.editable) msg.edit("```[Console:] \n >_```");
        if(msg.editable) msg.edit("```[Console:] \n > ```");
        if(msg.editable) msg.edit("```[Console:] \n >_```");
        if(msg.editable) msg.edit("```[Console:] \n > ```");
        if(msg.editable) msg.edit("```[Console:] \n >_```");
        if(msg.editable) msg.edit("```[Console:] \n > ```");
        if(msg.editable) msg.edit("```[Console:] \n >_```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔 ```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻_```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼 ```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅_```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶 ```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀 \n   0% [---------------------------------------------------]```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_\n  20% [||||||||||-----------------------------------------]```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀 \n  40% [||||||||||||||||||||-------------------------------]```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_\n  60% [||||||||||||||||||||||||||||||---------------------]```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_\n  80% [||||||||||||||||||||||||||||||||||||||||-----------]```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_\n 100% [|||||||||||||||||||||||||||||||||||||||||||||||||||]```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_\n 100% [|||||||||||||||||||||||||||||||||||||||||||||||||||] \n [Loading complete, input text:]\n   >D```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_\n 100% [|||||||||||||||||||||||||||||||||||||||||||||||||||] \n [Loading complete, input text:]\n   >De_```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_\n 100% [|||||||||||||||||||||||||||||||||||||||||||||||||||] \n [Loading complete, input text:]\n   >Def```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_\n 100% [|||||||||||||||||||||||||||||||||||||||||||||||||||] \n [Loading complete, input text:]\n   >Defa_```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_\n 100% [|||||||||||||||||||||||||||||||||||||||||||||||||||] \n [Loading complete, input text:]\n   >Defac```");
        if(msg.editable) msg.edit("```[Console:] \n >𝗔𝗻𝗼𝘅𝗶𝘀_\n 100% [|||||||||||||||||||||||||||||||||||||||||||||||||||] \n [Loading complete, input text:]\n   >Deface_```");
        if(msg.deletable) msg.delete();
    }

    if(msg.content === prefix + "jtebz") {
        if(msg.editable) msg.edit("```->```")
        if(msg.editable) msg.edit("``` ->```")
        if(msg.editable) msg.edit("```  ->```")
        if(msg.editable) msg.edit("```   ->```")
        if(msg.editable) msg.edit("```    ->```")
        if(msg.editable) msg.edit("```     ->jtebaise```")
    }

    if(msg.content === prefix + 'avatar') {
        if(msg.deletable) msg.delete();
        let embed = new Discord.RichEmbed()
      .setImage(msg.author.avatarURL)
      .setColor('#000000')
        msg.channel.send(embed)
    }

    if(msg.content === "prefix") {
        if(msg.deletable) msg.delete()
        msg.channel.send("**Le préfix actuel est:**  " + prefix )
    }

    if(msg.content === prefix + "prefix") {
        if(msg.deletable) msg.delete()
        msg.channel.send("**Le préfix actuel est:**  " + prefix )
    }

    if(msg.content === prefix + "prefixchange" + args)  {
        if(msg.deletable) msg.delete()
        if (args.length < 1) {
            msg.channel.send('**Merci de spécifier un nouveau préfix!**');
        }
    }

    if(msg.content === prefix + "color") {
        if(msg.deletable) msg.delete();
        let color_embed = new Discord.RichEmbed()
        .setColor ("RANDOM")
        .setTitle(`"𝐖𝐞𝐫𝐫𝐞𝐨`)
        msg.channel.send(color_embed)
    }

    if(msg.content === prefix + "error") {
        if(msg.editable) msg.edit("```E```");
        if(msg.editable) msg.edit("```E R```");
        if(msg.editable) msg.edit("```E R R```");
        if(msg.editable) msg.edit("```E R R O```");
        if(msg.editable) msg.edit("```E R R O R```");
        if(msg.editable) msg.edit("```         ```");
        if(msg.editable) msg.edit("```E R R O R```");
    }

    if(msg.content === prefix + "reboot") {
        if(msg.editable) msg.edit("```Lancement du Selfbot de la Anoxis```")
        if(msg.editable) msg.edit("```Lancement du Selfbot de la Anoxis.```")
        if(msg.editable) msg.edit("```Lancement du Selfbot de la Anoxis..```")
        if(msg.editable) msg.edit("```Lancement du Selfbot de la Anoxis```")
        if(msg.editable) msg.edit("```Lancement du Selfbot de la Anoxis.```")
        if(msg.editable) msg.edit("```Lancement du Selfbot de la Anoxis..```")
        if(msg.editable) msg.edit('```js\n "-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉\n              User : ฬεяяεσ サタン | 𝗔𝗻𝗼𝘅𝗶𝘀#9966\n              ID : 581528549429870614\n -҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉```')
    }

    if(msg.content === prefix + "meme") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed
        .setTitle("𝐑𝐚𝐧𝐝𝐨𝐦 𝐦𝐞𝐦𝐞")
        .setImage("RANDOM")
        
    }

    if(msg.content === prefix + "menuall") {
        if(msg.deletable) msg.delete();
        let usefull_embed = new Discord.RichEmbed()
        .setTitle(`⭐️﹣𝐔𝐒𝐄𝐅𝐔𝐋𝐋`)
        .setDescription(`𝐔𝐬𝐞𝐟𝐮𝐥𝐥 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField(`𝐋𝐈𝐒𝐓𝐄:`, `>>> :𝐏𝐈𝐍𝐆 : 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐚 𝐥𝐚𝐭𝐞𝐧𝐜𝐞\n :𝐏𝐑𝐄𝐅𝐈𝐗 : 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐞 𝐩𝐫𝐞𝐟𝐢𝐱\n :𝐒𝐏𝐀𝐌 : 𝐒𝐩𝐚𝐦 𝐝𝐚𝐧𝐬 𝐮𝐧 𝐬𝐚𝐥𝐨𝐧\n :𝐏𝐔𝐑𝐆𝐄 : 𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐥𝐞𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬\n :𝐀𝐕𝐀𝐓𝐀𝐑 : 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐥𝐞𝐬 𝐚𝐯𝐚𝐭𝐚𝐫\n :𝐀𝐍𝐎𝐗𝐈𝐒 : 𝐄𝐧𝐯𝐨𝐢𝐞 𝐥𝐚 𝐩𝐮𝐛 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫\n :𝐀𝐍𝐎𝐗𝐈𝐒𝐋𝐈𝐍𝐊 : 𝐄𝐧𝐯𝐨𝐢𝐞 𝐥𝐞 𝐥𝐢𝐞𝐧 𝐝𝐮 𝐬𝐞𝐫𝐯𝐞𝐮𝐫\n :𝐒𝐈𝐍𝐅𝐎𝐒 : 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐬𝐮𝐫 𝐮𝐧 𝐬𝐞𝐫𝐯𝐞𝐮𝐫\n :𝐑𝐄𝐁𝐎𝐎𝐓 : 𝐑𝐞𝐛𝐨𝐨𝐭 𝐥𝐞 𝐛𝐨𝐭`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail('https://cdn.discordapp.com/attachments/600452389283299329/621025510356418566/anoxisgif.gif')
        .setImage("https://cdn.discordapp.com/attachments/607906805544124426/615594187089248333/BannerAnoxis.gif")
        msg.channel.send(usefull_embed)
       
        let useless_embed = new Discord.RichEmbed()
        .setTitle(`❄️﹣𝐔𝐒𝐄𝐋𝐄𝐒𝐒`)
        .setDescription(`𝐔𝐬𝐞𝐥𝐞𝐬𝐬 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField(`𝐋𝐈𝐒𝐓𝐄:`, `>>> :𝐒𝐓𝐀𝐓𝐔𝐒 : 𝐂𝐡𝐚𝐧𝐠𝐞 𝐬𝐨𝐧 𝐬𝐭𝐚𝐭𝐮𝐬\n :𝐂𝐎𝐋𝐎𝐑 : 𝐂𝐨𝐮𝐥𝐞𝐮𝐫 𝐚𝐮 𝐡𝐚𝐬𝐚𝐫𝐝\n :𝐋𝐎𝐀𝐃𝐈𝐍𝐆 : 𝐁𝐚𝐫𝐫𝐞 𝐝𝐞 𝐜𝐡𝐚𝐫𝐠𝐞𝐦𝐞𝐧𝐭\n :𝐂𝐎𝐍𝐒𝐎𝐋𝐄 : 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 𝐀𝐧𝐨𝐱𝐢𝐬\n :𝐉𝐓𝐄𝐁𝐙 : 𝐉'𝐭𝐞 𝐛𝐚𝐢𝐬𝐞\n :𝐄𝐑𝐑𝐎𝐑 : 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧𝐞 𝐞𝐫𝐫𝐞𝐮𝐫\n :𝐍𝐕𝐌 : 𝐍𝐢𝐪𝐮𝐞𝐳 𝐯𝐨𝐬 𝐦𝐞𝐫𝐞𝐬\n :𝐃𝐀𝐄𝐒𝐇 : 𝐂𝐡𝐚𝐧𝐭 𝐝𝐞 𝐝𝐚𝐞𝐬𝐡`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail('https://cdn.discordapp.com/attachments/600452389283299329/621025510356418566/anoxisgif.gif')
        .setImage("https://cdn.discordapp.com/attachments/607906805544124426/615594187089248333/BannerAnoxis.gif")
        msg.channel.send(useless_embed)
       
        let hacking_embed = new Discord.RichEmbed()
        .setTitle(`🧬﹣𝐇𝐀𝐂𝐊𝐈𝐍𝐆`)
        .setDescription(`𝐇𝐚𝐜𝐤𝐢𝐧𝐠 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField(`𝐋𝐈𝐒𝐓𝐄:`, `>>> :𝐃𝐄𝐅𝐀𝐂𝐄 : 𝐃𝐞𝐭𝐫𝐮𝐢𝐬 𝐮𝐧 𝐬𝐞𝐫𝐯𝐞𝐮𝐫\n :𝐃𝐄𝐋𝐄𝐓𝐄 : 𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐮𝐧 𝐬𝐞𝐫𝐯𝐞𝐮𝐫\n :𝐁𝐀𝐍 : 𝐁𝐚𝐧𝐧𝐢𝐬 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫\n :𝐊𝐈𝐂𝐊 : 𝐊𝐢𝐜𝐤 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫\n :𝐌𝐏 : 𝐄𝐧𝐯𝐨𝐢𝐞 𝐮𝐧 𝐌𝐏 𝐚 𝐭𝐨𝐮𝐭 𝐥𝐞 𝐬𝐞𝐫𝐯𝐞𝐮𝐫`)
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor(`#000000`)
        .setThumbnail('https://cdn.discordapp.com/attachments/600452389283299329/621025510356418566/anoxisgif.gif')
        .setImage("https://cdn.discordapp.com/attachments/607906805544124426/615594187089248333/BannerAnoxis.gif")
        msg.channel.send(hacking_embed)
        
        let dox_embed = new Discord.RichEmbed()
        .setTitle("☄️﹣𝐃𝐎𝐗𝐬")
        .setDescription(`𝐃𝐎𝐗𝐬 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ :`)
        .addField("𝐋𝐈𝐒𝐓𝐄:", ">>> :𝐆𝐀𝐁𝐈𝐍 : 𝐃𝐎𝐗 𝐝𝐞: 𝐦𝐚𝐜𝐝𝐨𝐠𝐚𝐦𝐢𝐧𝐠\n :𝐌𝐀𝐓𝐇𝐈𝐀𝐒 : 𝐃𝐎𝐗 𝐝𝐞: 𝐖𝐀𝐗𝐀\n :𝐋𝐄𝐎 : 𝐃𝐎𝐗 𝐝𝐞: 𝐀𝐔𝐓𝐈𝐒𝐓𝐄𝐳_\n :𝐙𝐈𝐀𝐃 : 𝐃𝐎𝐗 𝐝𝐞: 𝐓𝐫𝐲𝐥𝐢𝐨𝐦\n :𝐋𝐔𝐊𝐀 : 𝐃𝐎𝐗 𝐝𝐞: 𝐊𝐃𝐙\n :𝐘𝐀𝐍𝐈𝐒 : 𝐃𝐎𝐗 𝐝𝐞: 𝐊𝐫𝐨𝐧𝐢𝐱𝐙𝐳\n :𝐆𝐖𝐄𝐍𝐃𝐀𝐋𝐋 : 𝐃𝐎𝐗 𝐝𝐞: 𝐳𝐃𝐲𝐳𝐞𝐫\n :𝐋𝐄𝐎𝟐: 𝐃𝐎𝐗 𝐝𝐞 : 𝐒𝐞𝐤𝐞𝐢𝐫𝐨\n :𝐅𝐋𝐀𝐕𝐈𝐄𝐍 : 𝐃𝐎𝐗 𝐝𝐞 𝐀𝐭𝐚𝐥𝐚𝐧𝐭𝐞")
        .addBlankField(0)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        .setColor('#000000')
        .setThumbnail("https://cdn.discordapp.com/attachments/616246374974881805/621084119715020800/Eto.gif")
        .setImage("https://cdn.discordapp.com/attachments/588437439501041684/621397033126985769/lustfma.gif")
        msg.channel.send(dox_embed)

        let about_embed = new Discord.RichEmbed()
        .setTitle(`⚔️﹣𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍𝐒`)
        .setDescription(`𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐛𝐲 𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™`)
        .addField(`__𝐃𝐞𝐯:__ 𝐂𝐨𝐨𝐪𝐮𝐞𝐥𝐢𝐜𝐨𝐭 𝐞𝐭 𝐖𝐞𝐫𝐫𝐞𝐨`,`A selfbot must not, under any circumstance, respond to other user's messages. This means it should not respond to commands, should not autoreply to certain keywords, etc. You must be the only one that can control it.
        A selfbot must not, under any circumstance, do "invite scraping". This is the action of detecting server invites in chat, and automatically joining a server using that invite.`)
        .setImage(`https://cdn.discordapp.com/attachments/588437439501041684/621398838498033676/image0_5.gif`)
        .setThumbnail("https://cdn.discordapp.com/attachments/588437439501041684/621399279541420063/hearth.gif")
        .setColor(`#000000`)
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if (msg.content === prefix + "uptime") {
        msg.edit("The uptime is **" + moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]') + "**")
    }

    if(msg.content === prefix + "nvm") {
        if(msg.editable)msg.edit("niquez");
        if(msg.editable)msg.edit("niquez vos");
        if(msg.editable)msg.edit("niquez vos putes");
        if(msg.editable)msg.edit("niquez vos putes de");
        if(msg.editable)msg.edit("niquez vos putes de mères");
        if(msg.deletable)msg.delete();
    }

    if(msg.content === prefix + "daesh") {
        if(msg.editable)msg.edit("Daesh soung loading");
        if(msg.editable)msg.edit("Daesh soung loading.");
        if(msg.editable)msg.edit("Daesh soung loading..");
        if(msg.editable)msg.edit("Daesh soung loading");
        if(msg.editable)msg.edit("Daesh soung loading.");
        if(msg.editable)msg.edit("Daesh soung loading..");
        if(msg.deletable)msg.delete();
        msg.channel.sendFile('./daesh.mp3')
    }

    if(msg.content === prefix + "youtube") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle("**ฬεяяεσ サタン**")
        .setDescription("Des comme toi j'en mange dix au petit déjeuner. Werreo vous domine oubliez pas. Leader Anoxis")
        .setFooter('YouTube')
        .setColor("#d31b1b")
        .setThumbnail("https://images-ext-1.discordapp.net/external/_rk8w2HEpX8AcfLzT7malVEpEl3omlVJ5_Ux-vmsE6Y/https/yt3.ggpht.com/a/AGF-l79vv-E0CDiPkxXcQxoMeGLHiAb7Dc6mjegWmQ%3Ds900-c-k-c0xffffffff-no-rj-mo?width=657&height=657")
        .setURL("https://2no.co/2Htgz5")
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "Anoxis") {
        if(msg.deletable) msg.delete();
        let about_embed = new Discord.RichEmbed()
        .setTitle("⭐️ 𝗦𝗘𝗥𝗩𝗘𝗨𝗥 𝗗𝗜𝗦𝗖𝗢𝗥𝗗 𝗔𝗡𝗢𝗫𝗜𝗦 ⭐️")
        .setDescription("**\n- Le discord Anoxis est un serveur fun et communautaire disponible pour tout le monde !\n \n- Vous pouvez trouver des gens qui partage la même passion que vous et faire des rencontres sympa\n \n- Un bot discord crée et developper par nos propres soin est mit a votre disposition\n \n- Un staff a l'écoute et de nombreux événements et des animations de temps en temps !\n \n- De nombreux giveaways sont organisé sur le serveur discord !**\n\n **__Discord:__** https://discord.gg/zEu6fU9")
        .setColor('#000000')
        .setURL("https://discord.gg/zEu6fU9")
        .setThumbnail('https://images-ext-1.discordapp.net/external/DlEF4U0thQAl2ze7daFJ5KVznArs_eUgFxeQzahClqY/https/cdn.discordapp.com/attachments/600452389283299329/621025510356418566/anoxisgif.gif')
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
        msg.channel.send(about_embed)
    }

    if(msg.content === prefix + "Anoxislink") {
        if(msg.editable)msg.edit("||**__Discord:__** https://discord.gg/zEu6fU9||");
    }

    if(msg.content === prefix + "Utaemon") {
        let about_embed = new Discord.RichEmbed()
        .setTitle('✨ - Vérification')
        .setDescription('-Merci de cliquer sur la réaction ci dessous pour avoir accès au serveur **Utaemon** !\n \n  -Merci également de lire les règles.')
        .setFooter('WerreoCorp™')
        .setImage('https://cdn.discordapp.com/attachments/642830636976963584/647455532281495552/Demonmeliodas.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/642830636976963584/647456554290774077/Sasukee.gif')
        msg.channel.send(about_embed)
    }

});


 client.on('message', msg => {
    if(msg.isMentioned(client.user)) {
        let embed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setColor('#000000')
        .setTitle(msg.author.tag)
        .setDescription("**\n Me ping pas, \n c'est casse couilles \n MP moi si tu deviens intéressant.\n**")
        .setFooter(`𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`)
       msg.channel.send("**Me ping pas, c'est casse couilles MP moi si tu deviens intéressant.** \n[𝐀𝐧𝐨𝐱𝐢𝐬𝐂𝐨𝐫𝐩™ 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧] " + msg.author)
       msg.channel.send(embed)
    }
})


client.on('ready', () => {
    console.log(colors.green(`                      `));
    console.log(colors.green(`                      `));
    console.log(colors.green(`                      `));
    console.log(colors.white(`Lancement du Selfbot de la Anoxis..`));
    console.log(colors.green(`-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉`));
    console.log(colors.white(`             User : ${client.user.username}#${client.user.discriminator}`));
    console.log(colors.white(`             ID : ${client.user.id}`));
    console.log(colors.green(`-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉-҉`));
});



 
client.login(config.tokens)
