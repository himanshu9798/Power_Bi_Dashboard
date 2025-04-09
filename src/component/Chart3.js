import React, { useState } from "react";
import Chart from "react-apexcharts";
import 'animate.css';

const Charts3 = () => {
  const [chartData] = useState({
    options: {
      chart: {
        id: "basic-line",
        background: "black",
        toolbar: { show: false },
      },
      xaxis: {
        categories: ["J", "F", "M", "A", "M", "J", "J", "A", "S"],
        labels: {
          style: {
            colors: "white",
            fontSize: "14px",
          },
        },
        tickAmount: 9, 
      },
      yaxis: {
        title: {
          text: "Sales",
          style: { color: "white", fontSize: "14px" },
        },
        labels: {
          style: {
            colors: "white",
            fontSize: "14px",
          },
        },
        min: 0,
        max: 400,
        tickAmount: 4,
      },
      dataLabels: { enabled: false },
      markers: {
        size: 6,
        shape: "circle",
        colors: ["white"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: { size: 8 },
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      colors: ["white"],
      grid: {
        show: true,
        borderColor: "rgba(253, 248, 248, 0.2)",
      },
    },
    series: [
      {
        name: "Desktop Apps",
        data: [0, 100, 76, 189, 56, 230, 80, 300, 150],
      },
    ],
  });

  return (
    <div className="animate__animated animate__bounceInDown"
    style={{
      background: "black", 
      padding: "20px",       
      borderRadius: "15px",  
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "300px", 
      margin: "auto", 
    }}
  >
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width="280"
      />
      </div>
 
  );
};

export default Charts3;
