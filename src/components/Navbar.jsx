import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', icon: '🏠', path: '/' },
    { name: 'Learn', icon: '📚', path: '/learn' },
    { name: "PYQs", icon: '📝', path: '/pyqs' },
    { name: 'Interview', icon: '💬', path: '/interview' },
    { name: 'Jobs', icon: '💼', path: '/jobs' },
    { name: 'Blogs', icon: '📰', path: '/blogs' },
    { name: 'Products', icon: '🛍️', path: '/products' },
    { name: 'AI Tools', icon: '🤖', path: '/aitools' },
    { name: 'Login', icon: '🔐', path: '/login' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-[22px] sm:text-2xl font-extrabold tracking-tight font-mono text-gray-900 flex items-center gap-2">
          <span className="text-green-600">&lt;/&gt;</span>
          <span>Career<span className="text-green-600">Grid</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2 text-[15px] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-1 px-3 py-1.5 rounded transition-all duration-200 ${
                pathname === link.path
                  ? 'bg-indigo-50 text-indigo-600 font-semibold shadow-inner'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
                pathname === link.path
                  ? 'bg-indigo-100 text-indigo-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
