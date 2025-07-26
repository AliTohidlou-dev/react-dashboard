import {Outlet} from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
} 
export default DashboardLayout;