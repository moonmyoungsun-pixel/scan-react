import { Link, useLocation } from "react-router-dom";
import {
  FaStore,
  FaUtensils,
  FaChartBar,
  FaCog,
  FaShoppingCart
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  // ✅ 하위 경로까지 active 유지
  const active = (path) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/")
      ? "active"
      : "";

  return (
    <div className="sidebar">
      <h2 className="logo">SCAN F&B</h2>

      <nav>
        {/* ✅ 메인 = Orders */}
        <Link to="/orders" className={`menu-item ${active("/orders")}`}>
          <FaShoppingCart className="icon" /> Orders
        </Link>

        <Link to="/merchants" className={`menu-item ${active("/merchants")}`}>
          <FaStore className="icon" /> Merchants
        </Link>

        <Link to="/menus" className={`menu-item ${active("/menus")}`}>
          <FaUtensils className="icon" /> Menus
        </Link>

        <Link to="/sales" className={`menu-item ${active("/sales")}`}>
          <FaChartBar className="icon" /> Sales
        </Link>

        <Link to="/settings" className={`menu-item ${active("/settings")}`}>
          <FaCog className="icon" /> Settings
        </Link>
      </nav>
    </div>
  );
}