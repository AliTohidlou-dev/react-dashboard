import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/auth";
import DashboardLayout from "../layouts/admin";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgetPassword";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import AddCategory from "../pages/AddCategory";
import Users from "../pages/Users";
import AddUser from "../pages/AddUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/home" element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/categories" element={<DashboardLayout />}>
        <Route index element={<Categories/>} />
        <Route path="add-category" element={<AddCategory/>} />
        <Route path="/categories/add-category/:id" element={<AddCategory/>}/>
      </Route>
      <Route path="/users" element={<DashboardLayout />}>
        <Route index element={<Users/>} />
        <Route path="add-user" element={<AddUser/>}/>
        <Route path="/users/add-user/:id" element={<AddUser/>}/>
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default App;
