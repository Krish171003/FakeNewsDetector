import React, { useState } from "react";
import axios from "axios";

const NewsForm = ({ onResult }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      setLoading(true);
      const res = await axios.post(import.meta.env.VITE_API_BASE_URL + "/api/check-news", { content });
      onResult(res.data);
    } catch {
      onResult({ error: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleCheck}
      className="flex flex-col items-center gap-4 w-full max-w-4xl mx-auto"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Paste news content here..."
        className="w-full p-4 rounded-lg bg-slate-800 text-white border border-slate-700 min-h-[150px]"
        required
      />
      <button
        type="submit"
        className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Checking..." : "Verify News"}
      </button>
    </form>
  );
};

export default NewsForm;
