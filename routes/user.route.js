const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");
const router = express.Router();

// routes
router.post("/user/register", createUser);
router.post("/user/login", loginUser);

module.exports = router;
