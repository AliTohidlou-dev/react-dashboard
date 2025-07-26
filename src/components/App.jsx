import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/auth";
import DashboardLayout from "../layouts/admin";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgetPassword";

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<AuthLayout/>}>
        <Route index element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="forgot-password" element={<ForgotPassword/>} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout/>}>
        <Route index element={<div>Dashboard Home</div>} />
        <Route path="users" element={<div>Users Page</div>} >
          <Route path=":userId" element={<div>User Details Page</div>} />
        </Route>
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default App;