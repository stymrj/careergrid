const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  image: String,
  author: String,
  content: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
