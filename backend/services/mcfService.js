// src/backend/services/mcfService.js
const axios = require("axios");
const config = require("../config"); // Import your configuration settings

// Function to get access token
const getAccessToken = async () => {
  const { clientId, clientSecret, refreshToken } = config.amazon;

  const response = await axios.post(
    "https://api.amazon.com/auth/o2/token",
    null,
    {
      params: {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
      },
    }
  );

  return response.data.access_token;
};

// Function to create a fulfillment order
const createFulfillmentOrder = async (orderData) => {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.post(
      "https://mws.amazonservices.com/FulfillmentOutbound/2018-06-01/CreateFulfillmentOrder",
      orderData,
      {
        headers: {
          Authorization: Bearer`${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating fulfillment order:", error);
    throw error;
  }
};

// Function to get inventory summary
const getInventorySummary = async () => {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.get(
      "https://mws.amazonservices.com/FulfillmentInventory/2018-06-01/GetInventorySummaries",
      {
        headers: {
          Authorization: Bearer`${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching inventory summary:", error);
    throw error;
  }
};

module.exports = { createFulfillmentOrder, getInventorySummary };
