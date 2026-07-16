const axios = require("axios");

async function getSignal() {
  const apiKey = process.env.TWELVE_API_KEY;

  try {
    const res = await axios.get(
      `https://api.twelvedata.com/rsi?symbol=EUR/USD&interval=1min&time_period=14&apikey=${apiKey}`
    );

    const rsi = parseFloat(res.data.values[0].rsi);

    let direction = "WAIT ⏳";
    let confidence = 50;
    let analysis = "Market is neutral.";

    if (rsi < 30) {
      direction = "BUY 🟢";
      confidence = 85;
      analysis = "RSI is oversold. Possible bullish reversal.";
    } else if (rsi > 70) {
      direction = "SELL 🔴";
      confidence = 85;
      analysis = "RSI is overbought. Possible bearish reversal.";
    }

    return {
      market: "EUR/USD",
      direction,
      timeframe: "1 Minute",
      confidence,
      analysis
    };
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

module.exports = getSignal;
