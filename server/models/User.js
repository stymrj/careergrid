const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  password: { type: String, required: true },
  links: {
    linkedin: String,
    github: String,
    leetcode: String,
    portfolio: String,
  },
  resume: String,
});

module.exports = mongoose.model('User', userSchema);
