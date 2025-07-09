import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white px-4">
      <div className="max-w-3xl w-full bg-slate-900 p-8 rounded-lg shadow-md border border-slate-700">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">About FakeNewsAI</h2>
        <p className="text-lg leading-relaxed">
          FakeNewsAI is an AI-powered platform that helps users verify the authenticity of online news.
          Using machine learning and real-time fact-check APIs, it helps identify whether a news article or claim is real or misleading.
        </p>
        <p className="mt-4 text-sm text-slate-400">
          Powered by Google Fact Check Tools API and open-source language models.
        </p>
      </div>
    </div>
  );
};

export default About;
