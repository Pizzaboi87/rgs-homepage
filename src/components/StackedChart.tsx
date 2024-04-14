import ReactApexChart from "react-apexcharts";

import { RevenueByCountry } from "@/types/types";
import { ApexOptions } from "apexcharts";

export const StackedChart = (props: { data: RevenueByCountry[] }) => {
  const series: ApexAxisChartSeries = [
    {
      name: "Green Revenue",
      data: props.data.map((item) => item.greenRevenue),
    },
    {
      name: "Regular Revenue",
      data: props.data.map((item) => item.normalRevenue),
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#00E396", "#008FFB"],
    dataLabels: {
      formatter: (value) => {
        if (value === 0) return "0";
        return (
          value
            .toString()
            .slice(0, value.toString().indexOf("."))
            .slice(0, -6)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "M"
        );
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ["#f3f3f3"],
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          if (value === 0) return "0";
          return (
            value
              .toString()
              .slice(0, value.toString().indexOf("."))
              .slice(0, -6)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "M"
          );
        },
        style: {
          colors: "#f3f3f3",
        },
      },
    },
    xaxis: {
      categories: props.data.map((item) => item.country),
      labels: {
        style: {
          colors: "#f3f3f3",
        },
      },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontFamily: "inherit",
      },
      y: {
        formatter: (value) => {
          if (value === 0) return "0";
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
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
      labels: {
        colors: "#f3f3f3",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 360,
          },
        },
      },
      {
        breakpoint: 1000,
        options: {
          chart: {
            width: 400,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={400}
      width={600}
    />
  );
};

export default StackedChart;
