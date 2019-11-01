const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!'



const boredMessages = [
    'Go Play Some Minecraft',
    'Homework? Nah...',
    '<:emoji_2:636776257853587457>CLASH ROYALE<:emoji_2:636776257853587457>',
    'Stay And Chat A While',
    'Go Outside And Enjoy The Fresh Air',
    'Eat More Cowz',
    'Do Some Stuff...',
    'Reflect On Why You Are Telling A Robot You Are Bored'
    ]



bot.on('ready', () =>{
    console.log('I\'m Online')
})
bot.on('message',message=>{
    

    msg = message.content.toLowerCase()

    
    if(message.author.bot){
        return
    }


  
        if(msg.startsWith(prefix+'help')){
            message.channel.send('Commands:')
            message.channel.send('!hi')
            message.channel.send('!no')
            message.channel.send('!I\'m Bored')
            message.channel.send('!cannibalism')
        }




        if(msg.startsWith(prefix+'no')){
            message.reply('Yes!!!')
        }
    
    
      if(msg.startsWith(prefix+'cannibalism')){
            message.channel.send('I love me some good chicken!')
        }

 

        if(msg.startsWith(prefix+'hi')){
            message.channel.send('Hello '+message.author)
        }



       if(msg.startsWith(prefix + "i'm bored")){
            var randMessageNum =Math.floor(Math.random()*8)
            const boredMessages = [
                'Go Play Some Minecraft',
                'Homework? Nah...',
                '<:emoji_2:636776257853587457>CLASH ROYALE<:emoji_2:636776257853587457>',
                'Stay And Chat A While',
                'Go Outside And Enjoy The Fresh Air',
                'Eat More Cowz',
                'Do Some Stuff...',
                'Why Are You Telling A Robot You Are Bored?'
            ]
            message.reply(boredMessages[randMessageNum])
            }
        
})

bot.login(process.env.BotToken);
