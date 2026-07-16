module.exports = {
  menu: {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📈 Get Signal", callback_data: "get_signal" }],
        [{ text: "🔄 Refresh Signal", callback_data: "refresh_signal" }],
        [{ text: "⚙️ Settings", callback_data: "settings" }]
      ]
    }
  },

  settings: {
    reply_markup: {
      inline_keyboard: [
        [{ text: "1 Minute", callback_data: "tf_1m" }],
        [{ text: "2 Minute", callback_data: "tf_2m" }],
        [{ text: "3 Minute", callback_data: "tf_3m" }],
        [{ text: "5 Minute", callback_data: "tf_5m" }],
        [{ text: "15 Minute", callback_data: "tf_15m" }]
      ]
    }
  }
};
