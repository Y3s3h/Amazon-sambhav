import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>EcoGoods Integration</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/orders">Orders</Link>
      </nav>
    </header>
  );
}

export default Header;
