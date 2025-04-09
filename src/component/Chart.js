import React from "react";
import Charts1 from "./Charts1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import { IoTimeOutline } from "react-icons/io5";
import 'animate.css';

function Chart() {
  return (
    <div 
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "space-evenly",
        marginTop: "20px",
        marginLeft: "300px",
        marginRight: "20px",
      }}
    >
      <div
        style={{
          boxShadow: "5px 5px 25px gray",
          borderRadius: "10px",
          width: "350px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "-30px",
            
          }}
        >
          <Charts1></Charts1>
        </div>

        <div  style={{ textAlign: "left", marginLeft: "20px" }}>
          <h3 style={{fontSize:"20px"}}>Website Views</h3>
          <p style={{color:"gray"}}>Last Campaign Performance</p>
          <hr></hr>
          <p style={{fontSize:"18px",color:"gray"}}><IoTimeOutline></IoTimeOutline>{" "}campaign sent 2 days ago</p>
        </div>
      </div>
      <div
       style={{
        boxShadow: "5px 5px 25px gray",
        borderRadius: "10px",
        width: "350px",
      }}>
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "-30px",
            
          }}
        >
          <Chart2></Chart2>
        </div>
        <div style={{ textAlign: "left", marginLeft: "20px" }}>
          <h3 style={{fontSize:"20px"}}>Daily Sales</h3>
          <p style={{color:"gray",fontSize:"15px"}}>(+15%) increase in today sales</p>
          <hr></hr>
          <p style={{fontSize:"18px",color:"gray"}}><IoTimeOutline></IoTimeOutline> {" "}updated 4 min ago</p>
        </div>
      </div>
      <div
        style={{
          boxShadow: "5px 5px 25px gray",
          borderRadius: "10px",
          width: "350px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "-30px",
            
          }}
        >
          <Chart3></Chart3>
        </div>

        <div style={{ textAlign: "left", marginLeft: "20px" }}>
          <h3 style={{fontSize:"20px"}}>Completed tasks</h3>
          <p style={{color:"gray"}}>Last Campaign Performance</p>
          <hr></hr>
          <p style={{fontSize:"18px",color:"gray"}}> <IoTimeOutline></IoTimeOutline>{" "}just updated</p>
        </div>
      </div>
    </div>
  );
}

export default Chart;
