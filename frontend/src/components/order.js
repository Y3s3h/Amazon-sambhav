import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/orders"); // Adjust the API endpoint as needed
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div>
      <h2>Order Management</h2>
      <h3>Current Orders</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.orderId}>
            Order ID: {order.orderId}, Status: {order.status}
            {/* Optionally display more order details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
