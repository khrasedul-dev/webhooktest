const {Telegraf} = require('telegraf')
const express = require('express')

const app = express()

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

app.use(bot.webhookCallback('/'))
bot.telegram.setWebhook("https://webhooktest-three.vercel.app")

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
