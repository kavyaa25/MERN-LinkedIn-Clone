const Post = require("../models/Post");

// Create Post
exports.create = async (req, res) => {
  try {
    const { postText } = req.body;
    const imageUrl = req.file ? "/uploads/" + req.file.filename : undefined;
    const post = new Post({
      userId: req.user._id,
      userName: req.user.name,
      postText,
      imageUrl,
    });
    await post.save();
    res.status(201).json(post);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all posts
exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

// Edit post
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post || post.userId.toString() !== req.user._id)
      return res.status(403).json({ message: "Unauthorized" });
    post.postText = req.body.postText || post.postText;
    await post.save();
    res.json(post);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete post
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post || post.userId.toString() !== req.user._id)
      return res.status(403).json({ message: "Unauthorized" });
    await post.deleteOne();
    res.json({ message: "Post deleted." });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

// Like/unlike post
exports.like = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // Like/Unlike logic
    const userId = req.user._id;
    if (post.likes.includes(userId)) {
      // If already liked, unlike
      post.likes = post.likes.filter((uid) => uid !== userId);
    } else {
      // Like it
      post.likes.push(userId);
    }
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
