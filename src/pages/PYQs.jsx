import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaClock, FaBuilding, FaLaptopCode } from 'react-icons/fa';

const pyqList = [
  {
    title: "TCS PYQs",
    icon: <FaLaptopCode className="text-green-500" />,
    items: ["TCS NQT Common Coding Questions", "TCS NQT Aptitude Questions"]
  },
  {
    title: "Cognizant Coding Questions",
    icon: <FaBuilding className="text-purple-500" />,
    items: []
  },
  {
    title: "Wipro Coding Questions",
    icon: <FaBuilding className="text-blue-500" />,
    items: []
  },
  {
    title: "IBM Coding Questions",
    icon: <FaBuilding className="text-indigo-500" />,
    items: []
  },
  {
    title: "Accenture Coding Questions",
    icon: <FaBuilding className="text-pink-500" />,
    items: []
  },
];

export default function PYQs() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-6 py-8 shadow-sm">
        <h2 className="text-xl font-bold mb-6 text-gray-800">📘 PYQs Menu</h2>
        <ul className="space-y-4">
          {pyqList.map((section, index) => (
            <li key={index}>
              <a href={`#section-${index}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:underline">
                {section.icon}
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-10 overflow-y-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">📚 Previous Year Questions (PYQs)</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Welcome to CareerGrid — your go-to hub for real-world coding problems asked in past interviews and exams. Stay ahead in your preparation with curated content from top recruiters!
        </p>

        {pyqList.map((section, index) => (
          <section key={index} id={`section-${index}`} className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 flex items-center gap-2 mb-3">
              {section.icon} {section.title}
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
              {section.items.length > 0 ? (
                section.items.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <li className="italic text-gray-500">Coming soon...</li>
              )}
            </ul>
          </section>
        ))}

        <div className="text-sm text-gray-600 mt-12 pt-4 border-t">
          Want to contribute new PYQs? 📮 Email us at <a href="mailto:careergrid24@gmail.com" className="text-blue-500 underline">careergrid24@gmail.com</a>
        </div>
      </main>
    </div>
  );
}
