// src/backend/middlewares/loggingMiddleware.js

// Logging middleware
const loggingMiddleware = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`); // Log request method and URL
  next(); // Proceed to the next middleware or route handler
};

module.exports = loggingMiddleware;
