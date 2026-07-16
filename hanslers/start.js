const { menu } = require("../utils/keyboards");

module.exports = (bot) => {
  bot.start((ctx) => {
    ctx.reply(
      "🤖 AI Trading Signal Bot\n\nChoose an option:",
      menu
    );
  });
};
