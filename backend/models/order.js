// src/backend/models/Order.js
const mongoose = require("mongoose");

// Define the schema for orders
const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true, // Ensure order ID is unique
    },
    status: {
      type: String,
      required: true, // Status of the order (e.g., "Pending", "Shipped")
    },
    items: [
      {
        sku: { type: String, required: true }, // SKU of the item
        quantity: { type: Number, required: true }, // Quantity of the item ordered
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set creation date
    },
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt fields

// Export the Order model
module.exports = mongoose.model("Order", orderSchema);
