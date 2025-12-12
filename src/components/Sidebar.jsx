import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaStore, 
  FaUtensils, 
  FaChartBar, 
  FaCog,
  FaShoppingCart 
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();
  const active = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="sidebar">
      <h2 className="logo">SCAN F&B</h2>

      <nav>
        <Link to="/" className={`menu-item ${active("/")}`}>
          <FaHome className="icon" /> Home
        </Link>

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