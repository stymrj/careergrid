const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (user) =>
  jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

exports.signup = async (req, res) => {
  try {
    const { name, email, phone, username, password } = req.body;
    const existing = await User.findOne({ $or: [{ email }, { username }] });

    if (existing) return res.status(400).json({ error: 'User already exists' });

    const user = await User.create({ name, email, phone, username, password });
    res.json({ token: generateToken(user), user: { name: user.name, username: user.username } });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ token: generateToken(user), user: { name: user.name, username: user.username } });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};
