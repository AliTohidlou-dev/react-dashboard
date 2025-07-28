import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import SidebarContext from "../../contexts/SidebarContext";
import { useState } from "react";
const DashboardLayout = () => {
  const [collapsed,setCollapsed]=useState(true)
  return (
      <SidebarContext.Provider value={{collapsed,setCollapsed}}>
        <Navbar />
        <div className="dashboard">
          <Sidebar />
          <Outlet />
        </div>
      </SidebarContext.Provider>
  );
};
export default DashboardLayout;
