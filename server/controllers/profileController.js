const User = require("../models/User");
const Post = require("../models/Post");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    const posts = await Post.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json({ user, posts });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};