import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">📰 Fake News Detector</h1>
      <nav>
        <a href="/" className="text-yellow-400 hover:underline">
          Home
        </a>
      </nav>
    </header>
  );
};

export default Header;
