const User = require('../models/User');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const { links, resumeUrl } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { $set: { links, resumeUrl } },
    { new: true }
  ).select('-password');

  res.json(user);
};
