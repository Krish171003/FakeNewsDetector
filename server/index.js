const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const bodyParser = require("body-parser");
const stringSimilarity = require("string-similarity");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

const ML_API_URL = "http://127.0.0.1:5001/predict";
const NEWS_API_KEY = process.env.NEWSDATA_API_KEY;
const NEWS_API_URL = "https://newsdata.io/api/1/news";

// Helper to check similarity
function isRelevantMatch(userText, newsTitle) {
  const similarity = stringSimilarity.compareTwoStrings(userText.toLowerCase(), newsTitle.toLowerCase());
  return similarity >= 0.6; // adjust threshold if needed
}

// Endpoint: /api/check-news
app.post("/api/check-news", async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: "News content is required." });

  try {
    // First: NewsData.io
    const newsRes = await axios.get(NEWS_API_URL, {
      params: {
        q: content,
        language: "en",
        apiKey: NEWS_API_KEY,
      },
    });

    const matches = newsRes.data.results || [];
    const relevantMatch = matches.find(item => isRelevantMatch(content, item.title));

    if (relevantMatch) {
      return res.json({
        result: "Real",
        matched: relevantMatch.title,
        source: relevantMatch.source_id,
      });
    }

    // Fallback: ML Model
    try {
      const mlRes = await axios.post(ML_API_URL, { content });
      const result = mlRes.data.result;

      return res.json({
        result: result === "FAKE" ? "Fake" : "Real (via ML)",
      });
    } catch (mlError) {
      console.error("ML Error:", mlError.message);
      return res.json({
        result: "Unknown - No reliable match found.",
      });
    }
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(500).json({ error: "Something went wrong. Try again." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
