import { useContext } from "react";
import SidebarContext from "../../../contexts/SidebarContext";

function Navbar() {
  const { collapsed ,setCollapsed } = useContext(SidebarContext);
  
  return (
    <div className="navbar">
      <div className={collapsed?"sidebar-icon":"sidebar-icon show"} onClick={()=>setCollapsed(!collapsed)}>
        <div className="line-one"></div>
        <div className="line-two"></div>
        <div className="line-three"></div>
      </div>
      <div className="sidebar-options">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-bell"></i>
      </div>
    </div>
  );
}

export default Navbar;