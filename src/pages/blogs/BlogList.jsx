import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const blogs = [
    { id: 1, title: "How to Crack Interviews", slug: "crack-interviews" },
    { id: 2, title: "Top 10 JavaScript Tips", slug: "js-tips" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">📚 Blog Articles</h1>
      <ul className="space-y-4">
        {blogs.map(blog => (
          <li key={blog.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <Link to={`/blogs/${blog.slug}`} className="text-blue-600 hover:underline">Read More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
