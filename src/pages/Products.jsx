import React from 'react';

export default function Products() {
  const productList = [
    {
      name: 'Resume Templates',
      desc: 'Professionally designed templates to make your resume stand out.',
      emoji: '📄',
      link: '#',
    },
    {
      name: 'Placement Kit',
      desc: 'All-in-one package including resume, cover letter, and resources.',
      emoji: '🎒',
      link: 'https://topmate.io/satyamraj/1304363?utm_source=public_profile&utm_campaign=satyamraj',
    },
    {
      name: 'Interview Prep Sheets',
      desc: 'Quick reference guides for last-minute revision.',
      emoji: '📝',
      link: 'https://topmate.io/satyamraj/1422544?utm_source=public_profile&utm_campaign=satyamraj',
    },
    {
      name: 'Job Tracker Tool',
      desc: 'Track applications, set reminders and stay organized.',
      emoji: '📊',
      link: '#',
    },
    {
      name: 'Coding Cheat Sheets',
      desc: 'Handy sheets for DSA and system design.',
      emoji: '💻',
      link: 'https://careergrid.in/products/coding-cheats',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-center px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Featured Products</h1>
      <p className="text-gray-600 mb-10">Tools to boost your career preparation and job readiness</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productList.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 text-left"
          >
            <div className="text-4xl mb-3">{item.emoji}</div>
            <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600">{item.name}</h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-800">{item.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
