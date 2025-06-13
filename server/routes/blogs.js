// server/routes/blogs.js
const express = require('express');
const router  = express.Router();

const blogs = [];

// GET all blogs
router.get('/', (req, res) => {
  res.json(blogs);
});

// POST a new blog
router.post('/', (req, res) => {
  const { title, slug, content } = req.body;
  if (!title || !slug || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newBlog = { id: blogs.length + 1, title, slug, content };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

// ⚠️ Rename this route so it's never bare '/:'
router.get('/slug/:slug', (req, res) => {
  const blog = blogs.find(b => b.slug === req.params.slug);
  if (!blog) return res.status(404).json({ error: 'Not found' });
  res.json(blog);
});

module.exports = router;
