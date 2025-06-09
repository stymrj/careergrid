// src/pages/blogs/BlogDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // You can replace this with real data later
  const dummyContent = {
    title: 'Demo Blog Title',
    content: `
      <p>This is a sample content for the blog post with slug <strong>${slug}</strong>.</p>
      <p>You can replace this with your actual content fetched from backend.</p>
    `
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{dummyContent.title}</h1>

      {/* Render content safely */}
      <div className="prose prose-lg mb-6" dangerouslySetInnerHTML={{ __html: dummyContent.content }} />

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        ← Back to Blogs
      </button>
    </div>
  );
}
