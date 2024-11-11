import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OrderTracking() {
  const { orderId } = useParams(); // Get the order ID from URL parameters
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrackingInfo = async () => {
      try {
        const response = await axios.get(`/api/orders/track/${orderId}`); // Adjust the API endpoint as needed
        setTrackingInfo(response.data);
      } catch (err) {
        setError("Failed to fetch tracking information.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrackingInfo();
  }, [orderId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Order Tracking</h2>
      <h3>Order ID: {orderId}</h3>
      <p>Status: {trackingInfo.status}</p>
      <p>
        Expected Delivery Date:{" "}
        {new Date(trackingInfo.expectedDeliveryDate).toLocaleDateString()}
      </p>

      <h4>Shipping Address:</h4>
      <p>{trackingInfo.shippingAddress.AddressLine1}</p>
      <p>
        {trackingInfo.shippingAddress.City},{" "}
        {trackingInfo.shippingAddress.StateOrRegion}{" "}
        {trackingInfo.shippingAddress.PostalCode}
      </p>

      <h4>Items:</h4>
      <ul>
        {trackingInfo.trackingDetails.map((item, index) => (
          <li key={index}>
            SKU: {item.sku}, Quantity: {item.quantity}, Status:{" "}
            {item.itemStatus}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderTracking;
