bot.on("photo", async (ctx) => {
  users[ctx.from.id] = {
    ...users[ctx.from.id],
    lastPhoto: ctx.message.photo.pop().file_id
  };

  ctx.reply("⏳ Analysing chart...");
});
