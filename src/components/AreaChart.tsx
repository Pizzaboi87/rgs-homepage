"use client";

import ReactApexCharts from "react-apexcharts";

import { ApexOptions } from "apexcharts";

const AreaChart = (props: {
  years: number[];
  totalRevenue: number[];
  greenRevenue: number[];
}) => {
  const { years, totalRevenue, greenRevenue } = props;

  const chartSeries: ApexAxisChartSeries = [
    {
      name: "Total Revenue",
      data: totalRevenue,
    },
    {
      name: "Green Revenue",
      data: greenRevenue,
    },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: "area",
      background: "transparent",
      animations: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      colors: ["#f3f3f3"],
      strokeColors: "#0e0e0e",
      strokeWidth: 2,
      hover: {
        size: 5,
      },
    },
    legend: {
      show: true,
      onItemClick: {
        toggleDataSeries: false,
      },
      labels: {
        colors: "#f3f3f3",
      },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontFamily: "inherit",
      },
      marker: {
        fillColors: ["#008FFB", "#00E396"],
      },
    },
    colors: ["#008FFB", "#00E396"],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.9,
        opacityTo: 1,
      },
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    yaxis: {
      min: 500000000,
      max: 1500000000000,
      tickAmount: 5,
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
        style: {
          colors: "#f3f3f3",
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: "#f3f3f3",
        },
      },
      categories: years,
    },
  };

  return (
    <ReactApexCharts
      options={chartOptions}
      series={chartSeries}
      type="area"
      className="w-full h-full"
    />
  );
};

export default AreaChart;
