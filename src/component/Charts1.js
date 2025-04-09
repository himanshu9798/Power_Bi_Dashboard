import React, { Component } from "react";
import Chart from "react-apexcharts";
import 'animate.css';

class Charts1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          background: "#3993ee",
          borderRadius:"10px"
        },
        xaxis: {
          categories: ["M", "T", "W", "T", "F", "S", "S"],
          labels: {
            style: {
              colors: "white", // ✅ Corrected x-axis label color
              fontSize: "14px"
            }
          }
        },
        dataLabels: {
          enabled: true, // ✅ Enable data labels
          style: {
            colors: ["white"], // ✅ Change data label color to white
            fontSize: "14px"
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: "30%",
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 40,
                  color: "#ff0000" // Red for values 0-40
                },
                {
                  from: 41,
                  to: 60,
                  color: "#ffcc00" // Yellow for values 41-60
                },
                {
                  from: 61,
                  to: 100,
                  color: "#00ff00" // Green for values 61-100
                }
              ]
            }
          }
        },
        colors: ["#00aaff"], // Default color if ranges are not used
      },
      series: [
        {
          name: "Weekly Sales",
          data: [30, 40, 45, 50, 49, 60, 70] // ✅ No labels property needed here
        }
      ]
    };
  }

  render() {
    return (
      <div  className="animate__animated animate__bounceInDown"
      style={{
        background: "#3993ee", // ✅ Background color
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
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="280"
            />
    </div>
    );
  }
}

export default Charts1;
