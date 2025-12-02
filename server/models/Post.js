const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userName: { type: String, required: true },
  postText: { type: String, required: true, maxLength: 500 },
  imageUrl: { type: String },
  likes: { type: [String], default: [] }, // userIds who liked
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);