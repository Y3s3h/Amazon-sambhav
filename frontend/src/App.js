import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct imports
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import HomePage from "./pages/homePage.js";
import InventoryPage from "./pages/inventoryPage.js";
import OrdersPage from "./pages/OrdersPage.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
