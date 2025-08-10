import { useContext } from "react";
import { NavLink } from "react-router-dom";
import SidebarContext from "../../../contexts/SidebarContext";

function Sidebar() {
  const { collapsed } = useContext(SidebarContext);

  return (
    <aside className={collapsed ? "sidebar collapsed" : "sidebar"}>
      <div className="nav-links">
      <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/home">
        <i className="fas fa-home"></i>
        {!collapsed && <span>Home</span>}
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/categories">
        <i className="fa-solid fa-layer-group"></i>
        {!collapsed && <span>Categories</span>}
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/users">
        <i className="fas fa-users"></i>
        {!collapsed && <span>Users</span>}
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/products">
        <i className="fa-solid fa-cart-shopping"></i>
        {!collapsed && <span>Products</span>}
      </NavLink>
      </div>
      <NavLink className={({ isActive }) => isActive ? "nav-link logout active" : "nav-link logout"} to="/">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        {!collapsed && <span>Logout</span>}
      </NavLink>
    </aside>
  );
}

export default Sidebar;
