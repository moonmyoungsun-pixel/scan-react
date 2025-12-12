// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";

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
        
        {/* 왼쪽 메뉴 */}
        <Sidebar />

        {/* 오른쪽 콘텐츠 */}
        <div style={{ flex: 1 }}>
          <Routes>
            {/* 첫 진입 시 Orders로 */}
            <Route path="/" element={<Navigate to="/orders" replace />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/settings" element={<Settings />} />

            {/* Home은 필요할 때 사용 */}
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}