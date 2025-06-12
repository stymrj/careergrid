const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { name, username, email, phone, password } = req.body;

    if (!name || !username || !email || !password) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }

    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.status(409).json({ error: 'Email or username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, username, email, phone, password: hashedPassword });

    res.status(201).json({ message: 'User created successfully', user: { username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        links: user.links || {},
        resume: user.resume || '',
      },
    });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const updates = req.body;

    const user = await User.findByIdAndUpdate(userId, { $set: updates }, { new: true });

    res.json({
      message: 'Profile updated',
      user: {
        name: user.name,
        email: user.email,
        username: user.username,
        links: user.links,
        resume: user.resume,
      },
    });
  } catch (err) {
    res.status(500).json({ error: 'Profile update failed' });
  }
};
