import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center text-center overflow-x-hidden">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">
        Welcome to <span className="text-yellow-400">FakeNewsAI</span>
      </h1>
      <p className="text-lg sm:text-xl max-w-xl mb-8 px-4">
        Instantly verify the authenticity of news using AI-powered detection.
        Get real-time insights into whether a story is fake or real.
      </p>
      <button
        onClick={() => navigate("/detect")}
        className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
