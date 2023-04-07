const express = require("express");
const {
  createUser,
  loginUser,
  updateUserProfile,
  updateUserPassword,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Public Routes
router.post("/register", createUser);
router.post("/login", loginUser);

// Private Routes
router.put("/profile", authMiddleware, updateUserProfile);
router.put("/password", authMiddleware, updateUserPassword);

module.exports = router;
