const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  username: { type: String, unique: true },
  password: String,
  links: {
    linkedin: String,
    github: String,
    leetcode: String,
    portfolio: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
