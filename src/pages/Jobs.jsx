import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from your backend API
    fetch('https://careergrid.in/api/jobs') // Replace with your real API endpoint
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error('Error fetching jobs:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">🚀 Jobs @ CareerGrid</h1>
        <p className="text-center text-gray-600 mb-10">Trusted by 10,000+ job seekers for career updates</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-5 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{job.company}</p>
                <p className="text-gray-500 text-xs mb-3">📍 {job.location} | {job.type}</p>
                <p className="text-sm text-gray-500 mb-3">🗓️ Posted: {job.date}</p>
                <Link to={`/jobs/${job.id}`} className="inline-block mt-2 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
                  View Job
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">Loading jobs...</p>
          )}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center bg-green-100 border border-green-200 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-green-800 mb-2">📱 Join our WhatsApp Channel</h2>
          <p className="text-sm text-gray-700 mb-4">Get daily job updates directly on WhatsApp. Stay ahead with the latest tech job opportunities!</p>
          <a
            href="https://whatsapp.com/channel/0029VaccquKFHWq514zVzA35"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition font-medium"
          >
            🔔 Join Now
          </a>
        </div>

        <p className="text-sm text-gray-500 text-center mt-10">New jobs are updated regularly. Join our WhatsApp channel for live updates!</p>
      </div>
    </div>
  );
}
