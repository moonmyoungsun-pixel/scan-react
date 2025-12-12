// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiShoppingCart,
  FiList,
  FiUsers,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "70px",
        background: "#fff",
        borderRight: "1px solid #eee",
        padding: "20px 10px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}
    >
      {/* Home */}
      <Link to="/">
        <FiHome className="icon icon-home" />
      </Link>

      {/* Orders */}
      <Link to="/orders">
        <FiShoppingCart className="icon icon-orders" />
      </Link>

      {/* Menus */}
      <Link to="/menus">
        <FiList className="icon icon-menus" />
      </Link>

      {/* Merchants */}
      <Link to="/merchants">
        <FiUsers className="icon icon-merchants" />
      </Link>

      {/* Sales */}
      <Link to="/sales">
        <FiBarChart2 className="icon icon-sales" />
      </Link>

      {/* Settings */}
      <Link to="/settings">
        <FiSettings className="icon icon-settings" />
      </Link>
    </div>
  );
}
