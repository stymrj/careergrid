import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!Object.values(formData).every(Boolean)) {
      return setError('Please fill all fields.');
    }

    try {
      const res = await axios.post('https://careergrid-backend.onrender.com/api/auth/signup', formData);
      const { token } = res.data;
      localStorage.setItem('careergrid-token', token);
      navigate('/dashboard');
    } catch (err) {
      const msg = err.response?.data?.message || 'Signup failed. Try again.';
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-gray-100">
      {/* Left branding panel */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-600 to-green-700 text-white items-center justify-center p-12 rounded-br-[80px]">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">Join CareerGrid</h1>
          <p className="text-lg leading-relaxed max-w-md mx-auto">
            Create your account to unlock career opportunities, tools, and resources tailored just for you.
          </p>
        </div>
      </div>

      {/* Right signup form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10"
        >
          <h2 className="text-4xl font-bold text-center mb-8 font-mono text-gray-800">
            <span className="text-green-600">&lt;/&gt;</span> Career
            <span className="text-green-600">Grid</span>
          </h2>

          {error && (
            <div className="bg-red-100 text-red-600 border border-red-300 p-2 mb-4 rounded text-center">
              {error}
            </div>
          )}

          {[
            { label: 'Name', type: 'text' },
            { label: 'Username', type: 'text' },
            { label: 'Email', type: 'email' },
            { label: 'Phone', type: 'tel' },
            { label: 'Password', type: 'password' },
          ].map(({ label, type }) => (
            <div key={label} className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                type={type}
                name={label.toLowerCase()}
                value={formData[label.toLowerCase()]}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                placeholder={`Enter your ${label.toLowerCase()}`}
              />
            </div>
          ))}

          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl transition duration-200">
            Sign Up
          </button>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-green-600 font-semibold hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
