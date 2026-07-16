require("dotenv").config();

const { Telegraf, session } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

// Session (selected market, timeframe, last photo save করার জন্য)
bot.use(session());

// Handlers
const start = require("./hanslers/start");
const signal = require("./hanslers/signal");
const callback = require("./hanslers/callback");

// Load handlers
start(bot);
signal(bot);
callback(bot);

// Bot start
bot.launch();

console.log("🤖 Trading Signal Bot Running...");

// Graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
