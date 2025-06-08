import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">CareerGrid</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/pyqs">PYQs</Link>
        <Link to="/interview">Interview</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/products">Products</Link>
        <Link to="/aitools">AI Tools</Link>
        <Link to="/login">Sign In</Link>
      </div>
    </nav>
  );
}
