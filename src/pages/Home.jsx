import DashboardSummery from "../components/home/DashboardSummery";
import UsersTable from "../components/home/UsersTable";
import Chart from "../utils/chartJs";

function Home() {
  return (
    <>
      <DashboardSummery />
      <div className="containers">
        <UsersTable />
        <Chart />
      </div>
    </>
  );
}

export default Home;
