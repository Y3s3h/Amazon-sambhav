// src/backend/controllers/inventoryController.js
const axios = require("axios");
const Inventory = require("./models/Inventory"); // Import your Inventory model

// Function to get inventory summary from Amazon MCF
exports.getInventorySummary = async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1]; // Extract access token from headers

  if (!accessToken) {
    return res.status(400).json({ error: "Authorization token is missing" });
  }

  try {
    const response = await axios.get(
      "https://mws.amazonservices.com/FulfillmentInventory/2018-06-01/GetInventorySummaries",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        params: {
          // Add necessary query parameters here
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error fetching inventory summary:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to fetch inventory summary" });
  }
};

// Function to update local inventory database
exports.updateInventory = async (req, res) => {
  const { sku, quantity } = req.body;

  try {
    // Update or create inventory record in the database
    const updatedInventory = await Inventory.findOneAndUpdate(
      { sku },
      { quantity },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedInventory);
  } catch (error) {
    console.error("Error updating inventory:", error.message);
    res.status(500).json({ error: "Failed to update inventory" });
  }
};
