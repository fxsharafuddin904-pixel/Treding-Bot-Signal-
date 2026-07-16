require("dotenv").config();

const { Telegraf, session, Markup } =
  require("telegraf");

const bot = new Telegraf(
  process.env.BOT_TOKEN
);

bot.use(session());

require("./handlers/signal")(bot);

bot.start((ctx) => {
  ctx.reply(
    "🤖 AI Trading Signal Bot\n\nChoose an option:",
    Markup.inlineKeyboard([
      [
        Markup.button.callback(
          "📈 Get Signal",
          "get_signal"
        )
      ],
      [
        Markup.button.callback(
          "⚙️ Settings",
          "settings"
        )
      ]
    ])
  );
});

bot.launch();

console.log("🤖 Bot Running...");
