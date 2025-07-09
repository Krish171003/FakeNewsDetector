import React, { useState } from "react";
import NewsForm from "../components/NewsForm";

const Detect = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Fake News Detector</h1>

      <NewsForm onResult={setResult} />

      {result && (
        <div
          className={`mt-8 p-6 rounded-lg text-center max-w-3xl w-full ${
            result.error
              ? "bg-red-700"
              : result.result?.toLowerCase().includes("fake")
              ? "bg-red-600"
              : "bg-green-700"
          }`}
        >
          {result.error ? (
            <p>{result.error}</p>
          ) : (
            <>
              <p className="text-xl font-semibold">
                This news is:{" "}
                <span className="underline">{result.result}</span>
              </p>
              {result.matched && (
                <p className="mt-2 text-sm text-white/80">
                  Matched: {result.matched}
                </p>
              )}
              {result.source && (
                <p className="text-sm text-white/70">
                  Source: {result.source}
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Detect;
