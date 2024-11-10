// // backend/index.js
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Basic route
// app.get("/", (req, res) => {
//   res.send("Welcome to the backend!");
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const authenticate = require("./middlewares/authMiddleware");
const errorHandler = require("./middlewares/errorMiddleware");
const loggingMiddleware = require("./middlewares/loggingMiddleware");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(loggingMiddleware); // Use logging middleware globally

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/ecogoods", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Example protected route with authentication and rate limiting applied
app.get("/api/protected", authenticate, (req, res) => {
  res.json({ message: "You have accessed a protected route!", user: req.user });
});

// Define your routes here...

// Use error handling middleware at the end of all routes
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
