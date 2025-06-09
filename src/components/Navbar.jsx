import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const navLinks = [
    { name: '🏠 Home', path: '/' },
    { name: '📚 Learn', path: '/learn' },
    { name: "📝 PYQ's", path: '/pyqs' },
    { name: '💬 Interview', path: '/interview' },
    { name: '💼 Jobs', path: '/jobs' },
    { name: '📰 Blogs', path: '/blogs' },
    { name: '🛍️ Products', path: '/products' },
    { name: '🤖 AI Tools', path: '/aitools' },
    { name: '🔐 Login', path: '/login' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">
          CareerGrid 🚀
        </Link>
        <div className="flex space-x-2 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg transition duration-200 ${
                pathname === link.path
                  ? 'bg-blue-100 text-blue-700 font-semibold shadow-inner'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
