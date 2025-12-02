const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const profileCtrl = require("../controllers/profileController");

router.get("/", auth, profileCtrl.getProfile);

module.exports = router;