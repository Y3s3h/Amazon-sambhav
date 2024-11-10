// src/backend/config.js

require("dotenv").config(); // Load environment variables from .env file

const config = {
  // MongoDB connection string
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/ecogoods",

  // JWT secret for authentication
  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret_here",

  // Amazon MCF API credentials
  amazon: {
    clientId: process.env.AMAZON_CLIENT_ID || "your_amazon_client_id",
    clientSecret:
      process.env.AMAZON_CLIENT_SECRET || "your_amazon_client_secret",
    refreshToken:
      process.env.AMAZON_REFRESH_TOKEN || "your_amazon_refresh_token",
    marketplaceId:
      process.env.AMAZON_MARKETPLACE_ID || "your_amazon_marketplace_id",
  },

  // Server port
  port: process.env.PORT || 5000,
};

module.exports = config;
