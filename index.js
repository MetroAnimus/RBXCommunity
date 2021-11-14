// we will start with the startup of aoi.js // 



const aoijs = require('aoi.js'); // this is the package which will turn it on and we will be able to use it just like other packages have this//
 const bot = new aoijs.Bot({ // this will create our bot and put it into the aoi.js database //
   token: "Your Bot Token", // this is were you add your token to create the bot itself to make it online you can get the token by going to the discord portal //
   prefix: "!", // this is your bot prefix you use this to execute commands created below for a example !ping // 
   intents: "all" // this is were you turn on your intents its required if your bot has alot of commands in it or i dont know // 
 });
bot.onMessage() //enables bot to see messages (required for executing Commands)
bot.command({
  name: "ping", //command name
  code: `My Ping Is \`$ping ms\` `// this is the bots code were you will be creating a command copy it and paste it to create more commands use !ping to execute //
 });
