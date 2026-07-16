const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

async function analyseChart() {
  return {
    direction: "BUY 🟢",
    confidence: 82,
    analysis:
      "Bullish momentum detected. Price may move upward."
  };
}

module.exports = analyseChart;
