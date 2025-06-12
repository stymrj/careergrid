import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaGlobe, FaCode } from 'react-icons/fa';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [links, setLinks] = useState({
    linkedin: '',
    github: '',
    leetcode: '',
    portfolio: ''
  });
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('careergrid-user'));
    if (stored) {
      setUser(stored);
      const savedLinks = JSON.parse(localStorage.getItem(`${stored.username}-links`));
      if (savedLinks) setLinks(savedLinks);

      const storedResume = localStorage.getItem(`${stored.username}-resume`);
      if (storedResume) setResume(storedResume);
    }
  }, []);

  const handleChange = (e) => {
    setLinks(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    localStorage.setItem(`${user.username}-links`, JSON.stringify(links));
    alert('✅ Profile updated successfully!');
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      localStorage.setItem(`${user.username}-resume`, file.name);
      setResume(file.name);
      alert('📄 Resume uploaded!');
    } else {
      alert('Please upload a PDF file');
    }
  };

  const icons = {
    linkedin: <FaLinkedin className="text-blue-700 text-xl" />,
    github: <FaGithub className="text-gray-800 text-xl" />,
    leetcode: <FaCode className="text-yellow-600 text-xl" />,
    portfolio: <FaGlobe className="text-green-600 text-xl" />,
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Please log in to access your dashboard.
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome back, <span className="text-green-600">{user.name}</span> 👋
        </h1>
        <p className="text-gray-500 mb-6">
          Manage your professional links and resume below.
        </p>

        {/* Resume Upload */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1 text-gray-700">Upload Resume (PDF)</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleResumeUpload}
            className="border rounded px-4 py-2 w-full"
          />
          {resume && (
            <p className="text-sm text-green-600 mt-2">📄 {resume}</p>
          )}
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.keys(links).map((key) => (
            <div key={key}>
              <label className="block text-sm font-semibold mb-1 capitalize text-gray-700">{key}</label>
              <input
                type="url"
                name={key}
                value={links[key]}
                onChange={handleChange}
                placeholder={`Your ${key} link`}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleSave}
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Save Profile
        </button>

        <button
  onClick={() => {
    localStorage.removeItem('careergrid-user');
    navigate('/login');
  }}
  className="text-sm text-red-600 hover:underline"
>
  Logout
</button>


        {/* Visual Link Preview */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">🔗 Preview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(links).map(([key, value]) =>
              value ? (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border hover:shadow-md transition"
                >
                  {icons[key]}
                  <span className="text-sm text-gray-700 break-all">{value}</span>
                </a>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
