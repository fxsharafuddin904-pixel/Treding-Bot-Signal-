require("dotenv").config();

const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

const start = require("./hanslers/start");
const signal = require("./hanslers/signal");

// Load handlers
start(bot);
signal(bot);

// Start bot
bot.launch();

console.log("🤖 Trading Signal Bot Running...");

// Stop gracefully
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
