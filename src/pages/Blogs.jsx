import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-4">📝 Our Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <Link key={blog.slug} to={`/blogs/${blog.slug}`} className="bg-white shadow rounded overflow-hidden">
            <img src={blog.coverImage} alt={blog.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500">{blog.author} • {blog.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
