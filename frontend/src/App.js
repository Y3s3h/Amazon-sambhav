// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct imports
// import Header from "./components/header.js";
// import Footer from "./components/footer.js";
// import HomePage from "./pages/homePage.js";
// import InventoryPage from "./pages/inventoryPage.js";
// import OrdersPage from "./pages/OrdersPage.js";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/inventory" element={<InventoryPage />} />
//         <Route path="/orders" element={<OrdersPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header.js";
// import Footer from "./components/footer.js";
// import HomePage from "./pages/homePage.js";
// import InventoryPage from "./pages/inventoryPage.js";
// import OrdersPage from "./pages/OrdersPage.js";
// import OrderTrackingPage from "./pages/OrderTrackingPage"; // Import the new page

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/inventory" component={InventoryPage} />
//         <Route path="/orders" component={OrdersPage} />
//         <Route path="/track/:orderId" component={OrderTrackingPage} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header.js";
// import Footer from "./components/footer.js";
// import HomePage from "./pages/homePage.js";
// import InventoryPage from "./pages/inventoryPage.js";
// import OrdersPage from "./pages/OrdersPage.js";
// import OrderTrackingPage from "./pages/OrderTrackingPage"; // Import the new page

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />{" "}
//         {/* Use `element` instead of `component` */}
//         <Route path="/inventory" element={<InventoryPage />} />
//         <Route path="/orders" element={<OrdersPage />} />
//         <Route path="/track/:orderId" element={<OrderTrackingPage />} />{" "}
//         {/* Use `element` instead of `component` */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import HomePage from "./pages/homePage.js";
import InventoryPage from "./pages/inventoryPage.js";
import OrdersPage from "./pages/OrdersPage.js";
import OrderTrackingPage from "./pages/OrderTrackingPage"; // Import the new page

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />{" "}
            {/* Use `element` instead of `component` */}
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route
              path="/track/:orderId"
              element={<OrderTrackingPage />}
            />{" "}
            {/* Use `element` instead of `component` */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
