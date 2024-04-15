import ReactApexChart from "react-apexcharts";

import { ApexOptions } from "apexcharts";

const RadialChart = (props: {
  data: { companies: string[]; revenues: number[] };
}) => {
  const { companies, revenues } = props.data;

  const series: ApexNonAxisChartSeries = revenues;

  const options: ApexOptions = {
    chart: {
      width: 600,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    labels: companies,
    legend: {
      show: true,
      floating: true,
      fontSize: "12px",
      position: "left",
      offsetX: 25,
      offsetY: 60,
      onItemClick: {
        toggleDataSeries: false,
      },
      labels: {
        useSeriesColors: true,
      },
      formatter: function (seriesName, opts) {
        return (
          seriesName.slice(0, 22) +
          ":  " +
          opts.w.globals.series[opts.seriesIndex]
            .toString()
            .slice(
              0,
              opts.w.globals.series[opts.seriesIndex].toString().indexOf(".")
            )
            .slice(0, -6)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
          "M"
        );
      },
      itemMargin: {
        vertical: 3,
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
        },
      },
      {
        breakpoint: 1000,
        options: {
          chart: {
            width: 400,
            height: 400,
          },
          legend: {
            fontSize: "10px",
            position: "left",
            offsetX: -8,
            offsetY: 60,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      width={600}
    />
  );
};

export default RadialChart;
