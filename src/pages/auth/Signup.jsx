// src/pages/auth/Signup.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(Boolean)) {
      localStorage.setItem('careergrid-user', JSON.stringify(formData));
      navigate('/dashboard');
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex w-1/2 bg-green-600 text-white items-center justify-center p-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Join CareerGrid</h1>
          <p className="text-lg">Create your account to unlock opportunities!</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6 font-mono">
            <span className="text-green-600">&lt;/&gt;</span> Career<span className="text-green-600">Grid</span>
          </h2>

          {['name', 'email', 'phone', 'username', 'password'].map(field => (
            <div key={field} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
              <input
                type={field === 'password' ? 'password' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded outline-none focus:ring-2 focus:ring-green-500"
                placeholder={`Enter your ${field}`}
              />
            </div>
          ))}

          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition">
            Sign Up
          </button>
           <p className="mt-4 text-center text-sm text-gray-500">
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
