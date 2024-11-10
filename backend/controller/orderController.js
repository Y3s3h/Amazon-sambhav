// src/backend/controllers/orderController.js
const axios = require("axios");
const Order = require("./models/Order"); // Import your Order model

// Function to create a fulfillment order in Amazon MCF
exports.createFulfillmentOrder = async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1]; // Extract access token from headers

  if (!accessToken) {
    return res.status(400).json({ error: "Authorization token is missing" });
  }

  const orderData = req.body; // Get order data from request body

  try {
    const response = await axios.post(
      "https://mws.amazonservices.com/FulfillmentOutbound/2018-06-01/CreateFulfillmentOrder",
      orderData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Ensure the response contains required fields
    const { FulfillmentOrderId, FulfillmentOrderStatus } = response.data;

    if (!FulfillmentOrderId || !FulfillmentOrderStatus) {
      return res
        .status(400)
        .json({ error: "Invalid response from Amazon API" });
    }

    // Save order details to local database
    const newOrder = new Order({
      orderId: FulfillmentOrderId,
      status: FulfillmentOrderStatus,
      items: orderData.Items,
      createdAt: new Date(),
    });

    await newOrder.save();

    res.status(201).json(response.data);
  } catch (error) {
    console.error(
      "Error creating fulfillment order:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to create fulfillment order" });
  }
};

// Function to get orders from local database
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};
