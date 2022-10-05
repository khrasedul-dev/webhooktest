const {Telegraf} = require('telegraf')
const {createServer} = require('https')

const bot = new Telegraf(process.env.TOKEN)


bot.start(ctx=>{
    ctx.reply('Bot started')
})

bot.command('test',ctx=>{
    ctx.reply('This is test command')
})

bot.command('test2',ctx=>{
  ctx.reply('hi')
})

// bot.telegram.setWebhook(`${process.env.DOMAIN}:8443/${process.env.TOKEN}`)

// bot.startWebhook(`/${process.env.TOKEN}`,null,8443)

// bot.launch({
//     webhook: {
//         domain: process.env.DOMAIN,
//         port: 8443,
//         hookPath: "/"+process.env.TOKEN,
//         secretToken: process.env.TOKEN
//     }
// })

createServer(null, async (req,res)=>{
    await bot.createWebhook({domain: process.env.DOMAIN})
}).listen(8443)