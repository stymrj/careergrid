exports.getDashboard = (req, res) => {
  res.json(req.user);
};

exports.updateProfile = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
  res.json(updated);
};
