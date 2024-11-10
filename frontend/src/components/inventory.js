import React, { useEffect, useState } from "react";
import axios from "axios";

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get("/api/inventory"); // Adjust the API endpoint as needed
      setInventory(response.data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  const handleAddInventory = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/inventory", { sku, quantity }); // Adjust the API endpoint as needed
      fetchInventory(); // Refresh inventory list after adding
      setSku("");
      setQuantity("");
    } catch (error) {
      console.error("Error adding inventory:", error);
    }
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <form onSubmit={handleAddInventory}>
        <input
          type="text"
          placeholder="SKU"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Add Inventory</button>
      </form>

      <h3>Current Inventory</h3>
      <ul>
        {inventory.map((item) => (
          <li key={item.sku}>
            SKU: {item.sku}, Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
