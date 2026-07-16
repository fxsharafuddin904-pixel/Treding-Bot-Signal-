const analyseChart = require("../services/aiService");

module.exports = (bot) => {
  bot.action("get_signal", async (ctx) => {
    await ctx.answerCbQuery();

    ctx.session.waitingPhoto = true;

    ctx.reply(
      "📸 Send your trading chart screenshot."
    );
  });

  bot.on("photo", async (ctx) => {
    if (!ctx.session.waitingPhoto) return;

    ctx.session.waitingPhoto = false;

    const data = await analyseChart();

    ctx.reply(
`🚨 NEW SIGNAL

📈 Direction: ${data.direction}
🎯 Confidence: ${data.confidence}%

🧠 Analysis:
${data.analysis}

⚠️ Trade carefully.`
    );
  });
};
