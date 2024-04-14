import ReactApexChart from "react-apexcharts";

import { ApexOptions } from "apexcharts";

const SemiDonutChart = (props: {
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
      position: "top",
      labels: {
        colors: "#fff",
      },
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    grid: {
      padding: {
        bottom: -300,
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
            width: 360,
          },
          grid: {
            padding: {
              bottom: -200,
            },
          },
        },
      },
      {
        breakpoint: 1000,
        options: {
          chart: {
            width: 420,
          },
          grid: {
            padding: {
              bottom: -250,
            },
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

export default SemiDonutChart;
