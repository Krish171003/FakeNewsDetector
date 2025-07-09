import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <div className="text-2xl font-bold text-cyan-400">FakeNewsAI</div>
      <ul className="flex space-x-6 text-sm font-medium">
        <li><a href="/" className="hover:text-cyan-400">Home</a></li>
        <li><a href="/detect" className="hover:text-cyan-400">Detect</a></li>
        <li><a href="/about" className="hover:text-cyan-400">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
