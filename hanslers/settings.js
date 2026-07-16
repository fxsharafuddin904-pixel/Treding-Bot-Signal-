const { settings } = require("../utils/keyboards");
const { users } = require("../utils/storage");

module.exports = (bot) => {
  bot.action("settings", (ctx) => {
    ctx.reply("Select timeframe:", settings);
  });

  bot.action(/tf_(.+)/, (ctx) => {
    const tf = ctx.match[1];

    users[ctx.from.id] = {
      ...users[ctx.from.id],
      timeframe: tf
    };

    ctx.reply(`✅ Saved timeframe: ${tf}`);
  });
};
