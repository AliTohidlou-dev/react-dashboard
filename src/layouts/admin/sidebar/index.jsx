import { useContext } from "react";
import { NavLink } from "react-router-dom";
import SidebarContext from "../../../contexts/SidebarContext";

function Sidebar() {
  const { collapsed } = useContext(SidebarContext);

  return (
    <aside className={collapsed ? "sidebar collapsed" : "sidebar"}>
      <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/home">
        <i className="fas fa-home"></i>
        {!collapsed && <span>Home</span>}
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/users">
        <i className="fas fa-users"></i>
        {!collapsed && <span>Users</span>}
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/products">
        <i className="fa-solid fa-cart-shopping"></i>
        {!collapsed && <span>Products</span>}
      </NavLink>
    </aside>
  );
}

export default Sidebar;
