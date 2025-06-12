import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiFileText, FiLogOut } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaCode, FaGlobe } from 'react-icons/fa';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ name: '', email: '', phone: '' });
  const [links, setLinks] = useState({ linkedin: '', github: '', leetcode: '', portfolio: '' });
  const [resume, setResume] = useState(null);

  const token = localStorage.getItem('careergrid-token');

  useEffect(() => {
    if (!token) return navigate('/login');
    axios
      .get('https://careergrid-backend.onrender.com/api/user/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setProfile({ name: res.data.name, email: res.data.email, phone: res.data.phone });
        setLinks(res.data.links || {});
        setResume(res.data.resume || null);
      })
      .catch(() => navigate('/login'));
  }, [token, navigate]);

  const handleProfileChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLinkChange = (e) => {
    setLinks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      const updated = { ...profile, links };
      await axios.put(
        'https://careergrid-backend.onrender.com/api/user/update',
        updated,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('✅ Profile updated!');
    } catch (err) {
      alert('❌ Failed to update profile');
    }
  };

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== 'application/pdf') return alert('Only PDF allowed');
    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await axios.post(
        'https://careergrid-backend.onrender.com/api/user/resume',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResume(res.data.filename);
      alert('📄 Resume uploaded!');
    } catch (err) {
      alert('❌ Resume upload failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('careergrid-token');
    navigate('/login');
  };

  const icons = {
    linkedin: <FaLinkedin className="text-blue-700 text-xl" />,
    github: <FaGithub className="text-gray-800 text-xl" />,
    leetcode: <FaCode className="text-yellow-600 text-xl" />,
    portfolio: <FaGlobe className="text-green-600 text-xl" />,
  };

  return (
    <div className="min-h-screen flex font-sans bg-gray-50">
      <aside className="w-64 bg-white shadow-xl rounded-tr-[60px] rounded-br-[60px] p-6 flex flex-col justify-between">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold font-mono text-green-600 mb-6">&lt;/&gt; Grid</h1>
          <SidebarItem icon={<FiUser />} label="Profile" />
          <SidebarItem icon={<FiFileText />} label="Resume" />
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 font-semibold rounded-xl transition"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome, <span className="text-green-600">{profile.name}</span> 👋
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Profile Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['name', 'email', 'phone'].map((field) => (
              <div key={field}>
                <label className="block text-sm text-gray-700 mb-1 capitalize">{field}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={profile[field] || ''}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Resume Upload</h3>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleResumeUpload}
            className="w-full border px-4 py-2 rounded-xl"
          />
          {resume && <p className="text-sm text-green-600 mt-2">📄 {resume}</p>}
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Social Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.keys(links).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 capitalize">{key}</label>
                <input
                  type="url"
                  name={key}
                  value={links[key] || ''}
                  onChange={handleLinkChange}
                  className="w-full border px-4 py-2 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder={`Your ${key} link`}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-xl transition"
        >
          Save All
        </button>

        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">🔗 Link Preview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(links).map(([key, value]) =>
              value ? (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border hover:shadow transition"
                >
                  {icons[key]}
                  <span className="text-sm text-gray-700 break-all">{value}</span>
                </a>
              ) : null
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 text-gray-700 text-lg hover:text-green-600 cursor-pointer transition">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
