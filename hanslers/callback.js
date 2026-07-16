module.exports = (bot) => {
  bot.action("settings", async (ctx) => {
    await ctx.answerCbQuery();

    ctx.reply("⚙️ Settings menu coming soon...");
  });

  bot.action("help", async (ctx) => {
    await ctx.answerCbQuery();

    ctx.reply(
      "🤖 AI Trading Signal Bot\n\n📈 Get Signal - Get trading signals\n🔄 Refresh - Refresh last signal\n⚙️ Settings - Change bot settings"
    );
  });
};
