import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export function DoughnutChart(props) {
  const { category } = props;

  let categories = [];
  let quantity = [];

  for (let i = 0; i < category.length; i++) {
    categories.push(category[i]._id);
    quantity.push(category[i].count);
  }

  const data = {
    labels: categories,
    datasets: [
      {
        data: quantity,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FFA07A",
          "#33FF99",
          "#b4cabf",
          "#5981b6",
        ],
        borderColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FFA07A",
          "#33FF99",
          "#b4cabf",
          "#5981b6",
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };
  return <Doughnut data={data} />;
}
