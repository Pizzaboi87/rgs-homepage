import ReactApexChart from "react-apexcharts";

import { RevenueByCompany } from "@/types/types";
import { ApexOptions } from "apexcharts";

const TreeMap = (props: { data: RevenueByCompany[] }) => {
  const series: ApexAxisChartSeries = [
    {
      data: props.data.map((company) => ({
        x: company.name,
        y: company.revenue,
      })),
    },
  ];

  const options: ApexOptions = {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "18px",
      },
      offsetY: -4,
    },
    tooltip: {
      theme: "dark",
      style: {
        fontFamily: "inherit",
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
        style: {
          colors: "#f3f3f3",
        },
      },
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: -250000000000,
              to: 0,
              color: "#CD363A",
            },
            {
              from: 0,
              to: 200000000000,
              color: "#52B12C",
            },
          ],
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 340,
          },
        },
      },
      {
        breakpoint: 1000,
        options: {
          chart: {
            width: 330,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="treemap"
      height={400}
      width={600}
    />
  );
};

export default TreeMap;
