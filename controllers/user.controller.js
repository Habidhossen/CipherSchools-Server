const User = require("../models/user.model");

exports.createUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};
