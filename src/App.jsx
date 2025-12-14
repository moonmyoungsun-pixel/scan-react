import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import StoreInfoBar from "./components/StoreInfoBar";

// Pages
import Orders from "./pages/Orders";
import Merchants from "./pages/Merchants";
import Menus from "./pages/Menus";
import Sales from "./pages/Sales";
import Settings from "./pages/Settings";

export default function App() {
  // ✅ URL에서 mcode 추출
  const params = new URLSearchParams(window.location.search);
  const mcode = params.get("mcode");

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1 }}>
          {/* 상단 매장 정보 바 */}
          <StoreInfoBar mcode={mcode} />

          <Routes>
            <Route path="/" element={<Orders mcode={mcode} />} />
            <Route path="/orders" element={<Orders mcode={mcode} />} />
            <Route path="/menus" element={<Menus mcode={mcode} />} />
            <Route path="/merchants" element={<Merchants mcode={mcode} />} />
            <Route path="/sales" element={<Sales mcode={mcode} />} />
            <Route path="/settings" element={<Settings mcode={mcode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}