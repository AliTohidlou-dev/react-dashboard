import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function Chart() {
  const chartData = {
    labels: ["jun", "feb", "march", "april", "may"],
    datasets: [
      {
        label: "sells",
        data: [1000, 3500, 8000, 12000, 20000],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // ❗ اجازه بده ارتفاع کنترل شه
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default Chart;
