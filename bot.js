const { Telegraf } = require("telegraf");
const { BOT_TOKEN } = require("./config");

const start = require("./handlers/start");
const signal = require("./handlers/signal");

const bot = new Telegraf(BOT_TOKEN);

start(bot);
signal(bot);

bot.launch();

console.log("🤖 Trading Bot Running...");
