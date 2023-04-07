const express = require("express");
const {
  createUser,
  loginUser,
  updateUserProfile,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Public Routes
router.post("/register", createUser);
router.post("/login", loginUser);

// Private Routes
router.put("/profile", authMiddleware, updateUserProfile);

module.exports = router;
