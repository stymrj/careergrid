import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem('careergrid-user', JSON.stringify({ email }));
      navigate('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Branding Section */}
      <div className="hidden md:flex w-1/2 bg-green-600 text-white items-center justify-center p-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg">Login to access your CareerGrid dashboard and manage content.</p>
        </div>
      </div>

      {/* Right Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center font-mono">
  <span className="text-green-600">&lt;/&gt;</span>
  <span className="ml-2 text-gray-800">
    Career<span className="text-green-600">Grid</span>
  </span>
</h2>

          <label className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border px-4 py-2 mb-4 rounded outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border px-4 py-2 mb-4 rounded outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
          >
            Login
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
  Don’t have an account?{' '}
  <Link to="/signup" className="text-green-600 font-semibold hover:underline">
    Sign Up
  </Link>
</p>

        </form>
      </div>
    </div>
  );
}
