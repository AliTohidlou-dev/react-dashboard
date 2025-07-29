import { createContext } from "react";
const SidebarContext=createContext({
  collapsed:true,
  setCollapsed:()=>{}
})


export default SidebarContext;
