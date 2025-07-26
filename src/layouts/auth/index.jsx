import { Outlet } from "react-router-dom"

const AuthLayout=()=>{
  return(
    <div className="auth">
      <Outlet/>
    </div>
  )
}

export default AuthLayout;