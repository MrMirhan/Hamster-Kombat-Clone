const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf('7224585098:AAFUiZ1jI3EqMbl4tQ1DQi5l-AyFrAGzLZ8');

bot.command('start', (ctx) => {
  ctx.reply('Welcome to the Telegram Web App Bot!', {
    reply_markup: {
      keyboard: [
        [{ text: 'Open Web App', web_app: { url: 'https://hamster-kombat-clone.netlify.app/' } }]
      ],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  });
});

bot.on(message('web_app_data'), async (ctx) => {
  const data = JSON.parse(ctx.message.web_app_data.data);
  // Process the data received from the web app
  ctx.reply(`Received data from web app: ${JSON.stringify(data)}`);
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
