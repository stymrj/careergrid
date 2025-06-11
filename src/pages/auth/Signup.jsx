import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmPassword) {
      return alert('Please fill all fields');
    }

    if (form.password !== form.confirmPassword) {
      return alert('Passwords do not match');
    }

    // Save dummy user data (can be replaced with real backend)
    localStorage.setItem('careergrid-user', JSON.stringify({ email: form.email }));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center font-mono">
          <span className="text-green-600">&lt;/&gt;</span>
          <span className="ml-2 text-gray-800">
            Career<span className="text-green-600">Grid</span>
          </span>
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border px-4 py-2 mb-4 rounded"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border px-4 py-2 mb-4 rounded"
          value={form.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full border px-4 py-2 mb-4 rounded"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
