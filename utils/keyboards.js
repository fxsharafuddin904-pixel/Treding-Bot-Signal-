const menu = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "📈 Get Signal",
          callback_data: "signal"
        }
      ],
      [
        {
          text: "🔄 Refresh Signal",
          callback_data: "signal"
        }
      ]
    ]
  }
};

module.exports = { menu };
