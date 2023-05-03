import React from "react";
import { Box } from "@chakra-ui/react";
import { adminGetOrders } from "../../redux/admin/admin.action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

export default function BarChart({ orders }) {
  const data = {
    labels: Object.keys(orders.graphData).sort(),
    datasets: [
      {
        label: "Count",
        data: Object.values(orders.graphData).map((item) => item.count),
        backgroundColor: ["rgb(8,131,149)", "rgb(255,99,132)"],
        borderColor: ["rgb(8,131,149)", "rgb(255,99,132)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const totalAmount = data.datasets[0].data[tooltipItem.index];
          return `Total Amount: ${totalAmount}`;
        },
      },
    },
    barThickness: 60,
  };
  return <Bar data={data} options={options} />;
}
