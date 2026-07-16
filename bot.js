require("dotenv").config();

const { Telegraf, session } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

// Session middleware
bot.use(session());

// Handlers
const start = require("./hanslers/start");
const signal = require("./hanslers/signal");
const callback = require("./hanslers/callback");

// Load handlers
start(bot);
signal(bot);
callback(bot);

// Error handler
bot.catch((err, ctx) => {
  console.error("Bot Error:", err);
});

// Start bot
bot.launch()
  .then(() => {
    console.log("🤖 Trading Signal Bot Running...");
  })
  .catch((err) => {
    console.error("Launch Error:", err);
  });

// Graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
