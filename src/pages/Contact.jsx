import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://careergrid.in/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (err) {
      console.error('Error:', err);
      setStatus('❌ Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 max-w-xl mx-auto">
      {/* Intro Text */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-3">📬 Contact CareerGrid</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Have a question, suggestion, or collaboration idea? We’d love to hear from you!
          Fill out the form below and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg border border-gray-200">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition font-semibold"
        >
          Send Message
        </button>
        {status && <p className="text-center text-sm text-gray-600 mt-2">{status}</p>}
      </form>

      {/* Outro Text */}
      <div className="text-center mt-8 text-sm text-gray-500">
        <p>📢 Stay connected — we’re building something amazing with the community!</p>
        <p>
          You can also reach us directly at{' '}
          <a href="mailto:careergrid24@gmail.com" className="text-indigo-600 hover:underline">
            careergrid24@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
