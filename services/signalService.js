const axios = require("axios");

async function getSignal() {
  const apiKey = process.env.TWELVE_API_KEY;

  const res = await axios.get(
    `https://api.twelvedata.com/rsi?symbol=EUR/USD&interval=1min&time_period=14&apikey=${apiKey}`
  );

  return res.data;
}

module.exports = getSignal;
