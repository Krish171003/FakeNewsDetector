import React from "react";

const ResultBox = ({ result }) => {
  if (!result) return null;

  if (result.error) {
    return (
      <div className="mt-6 p-4 rounded bg-red-600 text-white font-semibold">
        {result.error}
      </div>
    );
  }

  return (
    <div
      className={`mt-6 p-6 rounded font-bold text-xl ${
        result.isFake ? "bg-red-600 text-white" : "bg-green-600 text-white"
      }`}
    >
      {result.isFake ? "🚨 FAKE NEWS DETECTED" : "✅ This news appears to be REAL"}
    </div>
  );
};

export default ResultBox;
