const {Telegraf} = require('telegraf')
const {createServer} = require('https')

const bot = new Telegraf("5544511977:AAG3jPCW9JcdHo1r2YguoYUXgmTKAvwJaSM")


bot.start(ctx=>{
    ctx.reply('Bot started')
})

bot.command('test',ctx=>{
    ctx.reply('This is test command')
})

bot.command('test2',ctx=>{
  ctx.reply('hi')
})

bot.telegram.setWebhook(`https://webhooktest-three.vercel.app:8443/bot`)

bot.startWebhook(`/bot`,null,8443)

bot.launch()
