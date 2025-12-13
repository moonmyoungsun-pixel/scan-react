// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import StoreInfoBar from "./components/StoreInfoBar"; // ✅ 추가

// Pages
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Merchants from "./pages/Merchants";
import Menus from "./pages/Menus";
import Sales from "./pages/Sales";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
  <div style={{ display: "flex" }}>
    
    <Sidebar />

    <div style={{ flex: 1 }}>
      
      {/* ✅ 여기 */}
      <StoreInfoBar />

      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/merchants" element={<Merchants />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

    </div>

  </div>
</Router>
  );
}