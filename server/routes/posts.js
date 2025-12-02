const express = require("express");
const multer = require("multer");
const router = express.Router();
const auth = require("../middlewares/auth");
const postCtrl = require("../controllers/postController");

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

router.get("/", postCtrl.getAll);
router.post("/", auth, upload.single("image"), postCtrl.create);
router.patch("/:id", auth, postCtrl.update);
router.delete("/:id", auth, postCtrl.delete);
router.patch("/:id/like", auth, postCtrl.like);

module.exports = router;