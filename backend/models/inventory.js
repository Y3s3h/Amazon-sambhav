// src/backend/models/Inventory.js
const mongoose = require("mongoose");

// Define the schema for inventory items
const inventorySchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true, // Ensure SKU is unique
    },
    quantity: {
      type: Number,
      required: true,
      default: 0, // Default quantity is 0
    },
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt fields

// Export the Inventory model
module.exports = mongoose.model("Inventory", inventorySchema);
