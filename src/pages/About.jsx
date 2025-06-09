import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">About CareerGrid 🚀</h1>

        <p className="text-lg text-gray-700 mb-6">
          CareerGrid is on a mission to empower the next generation of tech talent by providing them with the tools, resources, and guidance they need to succeed in today’s competitive world.
        </p>

        <div className="space-y-5 text-gray-600">
          <p>
            Whether you're preparing for your first job, transitioning into a new role, or aiming to sharpen your skills — CareerGrid is your one-stop destination. From interview preparation and coding practice to real-world project ideas and job updates, we provide everything in one platform.
          </p>

          <p>
            We believe that **learning should be practical, accessible, and community-driven**. That’s why CareerGrid combines curated roadmaps, mock interviews, placement preparation, and technical content — all built with a focus on helping you launch and grow your career.
          </p>

          <p>
            What sets us apart is our commitment to *simplicity, speed*, and *real-world outcomes*. No unnecessary noise — just pure learning, growth, and opportunity.
          </p>

          <p>
            Our platform is used by students, job-seekers, and professionals across India and beyond, and we’re just getting started.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">📌 What You'll Find at CareerGrid:</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Structured learning roadmaps</li>
            <li>Real coding & aptitude problems</li>
            <li>Interview question banks</li>
            <li>Final year project ideas & guidance</li>
            <li>Job updates and internship listings</li>
            <li>AI tools, blogs, and productivity resources</li>
          </ul>
        </div>

        <div className="mt-10 bg-indigo-100 border-l-4 border-indigo-500 p-6 rounded">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">🤝 Want to Contribute?</h3>
          <p className="text-gray-700">
            CareerGrid is community-powered. If you’d like to share content, contribute questions, or join our initiative, email us at{' '}
            <a href="mailto:careergrid24@gmail.com" className="text-indigo-700 font-medium underline">careergrid24@gmail.com</a>.
          </p>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          © 2025 CareerGrid. Built with 💙 for learners, by learners.
        </div>
      </div>
    </div>
  );
}
