const getSignal = require("../services/signalService");

const userData = {};

module.exports = (bot) => {
  // Get Signal button
  bot.action("get_signal", async (ctx) => {
    await ctx.answerCbQuery();

    ctx.reply("📊 Select Market:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "EUR/USD", callback_data: "market_EURUSD" }],
          [{ text: "GBP/USD", callback_data: "market_GBPUSD" }],
          [{ text: "USD/JPY", callback_data: "market_USDJPY" }],
          [{ text: "BTC/USD", callback_data: "market_BTCUSD" }],
          [{ text: "ETH/USD", callback_data: "market_ETHUSD" }],
          [{ text: "XAU/USD", callback_data: "market_XAUUSD" }]
        ]
      }
    });
  });

  // Market select
  bot.action(/market_(.+)/, async (ctx) => {
    const market = ctx.match[1];

    userData[ctx.from.id] = {
      market
    };

    await ctx.answerCbQuery();

    ctx.reply(
      `✅ Market Selected: ${market}\n\n📷 Now send your chart screenshot.`
    );
  });

  // Refresh button
  bot.action("refresh_signal", async (ctx) => {
    await ctx.answerCbQuery();

    const data = await getSignal();

    if (!data) {
      return ctx.reply("❌ Signal API unavailable.");
    }

    const msg = `🚨 NEW SIGNAL

💱 Pair: ${data.market}
📈 Direction: ${data.direction}
⏱ Timeframe: ${data.timeframe}
🎯 Confidence: ${data.confidence}%

🧠 Analysis:
${data.analysis}

⚠️ Trade carefully.`;

    ctx.reply(msg);
  });
};
