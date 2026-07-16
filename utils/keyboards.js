module.exports = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "📈 Get Signal",
          callback_data: "get_signal"
        }
      ],
      [
        {
          text: "🔄 Refresh Signal",
          callback_data: "refresh_signal"
        }
      ]
    ]
  }
};
