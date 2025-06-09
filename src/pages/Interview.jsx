import React from 'react';
import { Link } from 'react-router-dom';

const interviewSections = [
  { title: "OPPs Interview Questions", items: [] },
  { title: "DBMS Interview Questions", items: [] },
  { title: "Operating System Interview Questions", items: [] },
  { title: "Computer Network Interview Questions", items: [] },
  { title: "Software Engineering Interview Questions", items: [] },
  { title: "SQL Interview Questions", items: [] },
  { title: "Data Analyst Interview Questions", items: [] },
  { title: "JavaScript Interview Questions", items: [] },
  { title: "React Js Interview Questions", items: [] },
  { title: "Python Interview Questions", items: [] },
  { title: "Spring Boot Interview Questions", items: [] },
  { title: "Core Java Interview Questions", items: [] },
  { title: "Java Full Stack Interview Questions", items: [] },
  { title: "Data Engineering Interview Questions", items: [] },
  { title: "Frontend Developer Interview Questions", items: [] },
  { title: "HR Interview Questions", items: [] },
  { title: "MERN Stack Interview Questions", items: [] },
  { title: "Cloud Interview Questions", items: [] },
  { title: "DevOps Interview Questions", items: [] },
  { title: "Data Science Interview Questions", items: [] },
  { title: "Top Techincal Interview Questions 2025", items: [] },
];

export default function InterviewQuestions() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md px-4 py-6 border-r">
        <h2 className="text-xl font-bold mb-4">🧠 Interview Menu</h2>
        <ul className="space-y-3">
          {interviewSections.map((section, index) => (
            <li key={index}>
              <a href={`#section-${index}`} className="text-blue-600 hover:underline">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">🧩 Interview Questions Hub</h1>
        <p className="text-gray-700 mb-8 text-lg max-w-2xl">
          At CareerGrid, we believe that the best way to learn is by doing. Explore a wide collection of interview questions across topics and build the confidence to crack any interview.
        </p>

        {interviewSections.map((section, index) => (
          <section key={index} id={`section-${index}`} className="mb-10">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">✅ {section.title}</h2>
            <ul className="list-disc pl-5 text-gray-800">
              {section.items.length > 0 ? (
                section.items.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <li>Coming soon...</li>
              )}
            </ul>
          </section>
        ))}

        <div className="text-sm text-gray-600 mt-12 border-t pt-4">
          Want to contribute interview questions? Email us at <a href="mailto:careergrid24@gmail.com" className="underline text-blue-500">careergrid24@gmail.com</a> 🎉
        </div>
      </main>
    </div>
  );
}
