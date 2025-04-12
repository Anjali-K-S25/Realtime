import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4 shadow-md flex justify-between items-center">
      <Link to="/dashboard" className="text-white text-xl font-bold">
        Astique
      </Link>
      <div className="flex gap-4 text-white font-medium">
        <Link to="/dashboard" className="hover:text-gray-200">Home</Link>
        <Link to="/about" className="hover:text-gray-200">About</Link>
        <Link to="/login" className="hover:text-gray-200">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
