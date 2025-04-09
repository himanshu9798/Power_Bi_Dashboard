import React, { useState } from "react";
import Chart from "react-apexcharts";
import 'animate.css';

const Charts3 = () => {
  // State using useState hook
//   const [chartData] = useState({
//     options: {
//       chart: {
//         id: "basic-bar",
//         background: "black" // Changed background color to black
//       },
//       xaxis: {
//         categories: ["April", "May", "June", "July", ],
//         labels: {
//           style: {
//             colors: "white", // X-axis label color
//             fontSize: "14px"
//           }
//         }
//       },
//       dataLabels: {
//         enabled: true, // Show data labels
//         style: {
//           colors: ["white"], // Data label color
//           fontSize: "14px"
//         }
//       },
//       markers: {
//         size: 6, // ✅ Size of the points
//         shape: "circle", // ✅ Makes points circular
//         colors: ["white"], // ✅ Custom color for points
//         strokeColors: "#fff", // ✅ Border color around points
//         strokeWidth: 2 // ✅ Thickness of point border
//       },
//       stroke: {
//         width: 2, // ✅ Line thickness
//         curve: "smooth" // ✅ Smooth curve for a better look
//       },
//       colors: ["white"], // ✅ Default color for line and points
//     },
//     //   plotOptions: {
//     //     bar: {
//     //       borderRadius: 5,
//     //       columnWidth: "30%"
//     //     }
//     //   },
//     //   colors: ["white"] // Default color if ranges are not used
//     // },
//     series: [
//       {
//         name: "Monthly Sales", // Updated name for better clarity
//         data: [0, 40,16,100 ] // Custom data
//       }
//     ]
//   });
const [chartData] = useState({
    options: {
      chart: {
        id: "basic-line",
        background: "#56ad5c", // ✅ Background color changed to black
        toolbar: {
          show: false, // ✅ Hide toolbar for a cleaner UI
        },
      },
      xaxis: {
        categories: ["April", "May", "June", "July"],
        labels: {
          style: {
            colors: "white", // ✅ X-axis label color
            fontSize: "14px"
          }
        }
      },
      yaxis: { // ✅ FIXED y-axis definition
        title: {
           // ✅ Y-axis title
          style: { color: "white", fontSize: "14px" }
        },
        labels: {
          style: {
            colors: "white", // ✅ Y-axis label color
            fontSize: "14px"
          }
        },
        min: 0, // ✅ Y-axis starts at 0
        max: 400, // ✅ Y-axis ends at 400
        tickAmount: 2 // ✅ Number of intervals
      },
      dataLabels: {
        enabled: false, // ✅ Hide labels inside the chart
      },
      markers: {
        size: 6, // ✅ Size of data points
        shape: "circle", // ✅ Ensures points are circular
        colors: ["white"], // ✅ Circle fill color
        strokeColors: "#fff", // ✅ Border color around points
        strokeWidth: 2, // ✅ Thickness of the border
        hover: {
          size: 8, // ✅ Increase size on hover
        },
      },
      stroke: {
        width: 2, // ✅ Line thickness
        curve: "smooth", // ✅ Smooth curve for a better look
      },
      colors: ["white"], // ✅ Color for line and points
      grid: {
        show: true, // ✅ Keeps grid visible
        borderColor: "rgba(253, 248, 248, 0.2)", // ✅ Light grid color for better contrast
      }
    },
    series: [
      {
        name: "Mobile Apps",
        data: [0, 100, 76, 189,56,230,80,300,150] // ✅ Custom data points
      }
    ]
  });

  return (
    // <div className="app">
    //   <div className="row">
    //     <div className="mixed-chart">
    //       <Chart
    //         options={chartData.options}
    //         series={chartData.series}
    //         type="line" // Changed from 'line' to 'bar', change if needed
    //         width="300"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div
    className="animate__animated animate__bounceInDown"
    style={{
      background: "#56ad5c", // ✅ Background color
      padding: "20px",       // ✅ Padding for spacing
      borderRadius: "15px",  // ✅ Rounded corners
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // ✅ Optional shadow
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "300px", // ✅ Set width
      margin: "auto", // ✅ Centering
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
