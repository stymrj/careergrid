const express = require('express');
const router = express.Router();

let blogs = [];

router.get('/', (req, res) => {
  res.json(blogs);
});

router.post('/', (req, res) => {
  const { title, slug, content, coverImage, author, date } = req.body;
  if (!title || !slug || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newBlog = { title, slug, content, coverImage, author, date, id: blogs.length + 1 };
  blogs.push(newBlog);
  res.json({ success: true, blog: newBlog });
});

router.get('/:slug', (req, res) => {
  const blog = blogs.find(b => b.slug === req.params.slug);
  if (!blog) return res.status(404).json({ error: 'Blog not found' });
  res.json(blog);
});

module.exports = router;
