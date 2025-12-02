require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const profileRoutes = require("./routes/profile");

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON bodies
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded images

// Route setup
app.use("/api", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection failed:", err));