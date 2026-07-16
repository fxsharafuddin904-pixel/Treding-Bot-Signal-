const getSignal = require("../services/signalService");

module.exports = (bot) => {
  async function sendSignal(ctx) {
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

    await ctx.reply(msg);
  }

  bot.action("get_signal", sendSignal);
  bot.action("refresh_signal", sendSignal);
};
