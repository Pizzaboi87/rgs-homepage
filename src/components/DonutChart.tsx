import ReactApexChart from "react-apexcharts";

import { ApexOptions } from "apexcharts";

const DonutChart = (props: {
  data: { numbers: number[]; names: string[] };
}) => {
  const { numbers, names } = props.data;

  const series: ApexNonAxisChartSeries = numbers;
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: names,
    legend: {
      position: "bottom",
      labels: {
        colors: "#f3f3f3",
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          return (
            value
              .toString()
              .slice(0, value.toString().indexOf("."))
              .slice(0, -6)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "M"
          );
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 470,
            height: 470,
          },
          legend: {
            width: 380,
            height: 145,
            horizontalAlign: "center",
            offsetX: 25,
          },
        },
      },
      {
        breakpoint: 1000,
        options: {
          chart: {
            width: 500,
            height: 500,
          },
          legend: {
            width: 340,
            offsetX: 60,
          },
        },
      },
      {
        breakpoint: 1100,
        options: {
          legend: {
            width: 400,
            offsetX: 80,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      width={600}
    />
  );
};

export default DonutChart;
