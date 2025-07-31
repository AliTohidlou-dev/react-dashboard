import Slice from "./Slice";

function DashboardSummery() {
  return ( 
          <div className="dashboard-summery">
        <Slice
          num={7}
          title={"today Buy"}
          icon={"fa-solid fa-basket-shopping"}
          weeklySummery={"13 in last weeks"}
          monthlySummery={"67 in last months"}
        />
        <Slice
          num={17}
          title={"today uncompleted orders"}
          icon={"fa-solid fa-truck"}
          weeklySummery={"13 in last weeks"}
          monthlySummery={"67 in last months"}
        />
        <Slice
          num={34}
          title={"today orders"}
          icon={"fa-solid fa-file-invoice-dollar"}
          weeklySummery={"13 in last weeks"}
          monthlySummery={"67 in last months"}
        />
        <Slice
          num={"4000$"}
          title={"today incomes"}
          icon={"fa-solid fa-calculator"}
          weeklySummery={"13 in last weeks"}
          monthlySummery={"67 in last months"}
        />
      </div>
   );
}

export default DashboardSummery;