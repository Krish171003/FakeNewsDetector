import axios from "axios";

const API_URL = "http://localhost:5000/api/analyze";

export const analyzeNews = async (content) => {
  try {
    const res = await axios.post(API_URL, { content });
    return res.data;
  } catch (error) {
    return { verdict: "Error analyzing the news", source: "System" };
  }
};
