import React, { useState } from 'react';

const roadmapData = [
  { id: 'placement', title: 'Placement Roadmap', content: '📌 A complete guide to prepare for placements: Aptitude + DSA + Resume + Mock Interviews.' },
  { id: 'aptitude', title: 'Aptitude Roadmap', content: '🧠 Covers basic to advanced aptitude with tricks for competitive exams and placements.' },
  { id: 'resume', title: 'Resume Guide & Templates', content: '📝 Resume templates + guides + do/don’ts for fresher and experienced devs.' },
  { id: 'dsa', title: 'DSA Roadmap', content: '📚 DSA journey from basics to advanced with problem sets and video resources.' },
  { id: 'system-design', title: 'System Design Roadmap', content: '🏗️ Learn LLD + HLD with case studies like WhatsApp, Netflix, Uber, etc.' },
  { id: 'reactjs', title: 'ReactJS Roadmap', content: '⚛️ Covers JSX, Hooks, Redux, Routing, Testing, and deployment best practices.' },
  { id: 'backend', title: 'Backend Roadmap', content: '🛠️ Learn Node.js, Express, MongoDB, Auth, APIs, REST, and production practices.' },
];

export default function Roadmaps() {
  const [selected, setSelected] = useState(roadmapData[0]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">📌 Roadmaps</h2>
        <ul className="space-y-2">
          {roadmapData.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full text-left px-3 py-2 rounded-md transition ${
                  selected.id === item.id
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setSelected(item)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">{selected.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{selected.content}</p>
      </main>
    </div>
  );
}
