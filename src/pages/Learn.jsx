import React from 'react';
import { Link } from 'react-router-dom';

export default function Learn() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">📘 Learn with CareerGrid</h1>
        <p className="text-gray-600 text-lg mb-8">
          Explore curated resources, roadmaps, interview preparation materials and more to accelerate your learning journey.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">🚀 Roadmaps</h2>
            <p className="text-gray-600 mb-4">Master various tech stacks with our guided roadmaps and curated resources.</p>
            <Link 
              to="/roadmaps" 
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
              📘 View All Roadmaps
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">🎯 Interview Prep</h2>
            <p className="text-gray-600 mb-4">Get access to curated questions, patterns and tips to crack your next interview.</p>
            <Link 
              to="/interview" 
              className="inline-block bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
            >
              🔍 Practice Now
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-12">More sections coming soon...</p>
      </div>
    </div>
  );
}
