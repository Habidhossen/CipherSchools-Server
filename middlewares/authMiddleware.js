const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Get token from request headers
  const token = req.header("Authorization");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Set user object on request object
    req.user = decoded.user;

    // Call next middleware function
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
