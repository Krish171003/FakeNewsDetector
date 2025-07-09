import { useState } from "react";
import axios from "axios";

export default function PasteBox() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkNews = async () => {
    if (!inputText.trim()) return;

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/verify", {
        text: inputText,
      });
      setResult(response.data.result);
    } catch (err) {
      console.error(err);
      setResult("Error checking news.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4 mt-10">
      <h2 className="text-2xl font-bold text-gray-800">Fake News Detector</h2>
      <textarea
        className="w-full p-4 border rounded h-40 text-gray-700"
        placeholder="Paste your news text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={checkNews}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
      >
        {loading ? "Checking..." : "Check"}
      </button>

      {result && (
        <div
          className={`p-4 rounded ${
            result === "Real"
              ? "bg-green-100 text-green-700"
              : result === "Fake"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          Result: <strong>{result}</strong>
        </div>
      )}
    </div>
  );
}
