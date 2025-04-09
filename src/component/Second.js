import React from "react";
import "./Second.css";
import { GiSofa } from "react-icons/gi";
import { MdBarChart } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaUserPlus } from "react-icons/fa";

function Second() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "20px",
        marginLeft: "300px",
        justifyContent: "space-evenly",
        marginRight: "20px",
      }}
    >
      
      <div className="card">
        <div className="inner" style={{ backgroundColor: "black" }}>
            <GiSofa style={{color:"white",fontSize:"25px"}}></GiSofa>
        </div>
        <p className="par">
          {" "}
          Booking
          <br /> <b>281</b>
        </p>
        <hr style={{color:"gray",width:"80%",position:"relative",top:"-70px",height:"1px"}}></hr>
        <div style={{position:"relative",top:"-50px",}}>
      <p style={{color:"gray",fontSize:"15px"}}><i style={{color:"green"}}>+55%</i>{ " "}than last Week</p></div>
      </div>
     
      <div className="card">
        <div className="inner" style={{ backgroundColor: "#3993ee" }}>
            <MdBarChart style={{color:"white",fontSize:"25px"}}></MdBarChart>
        </div>
        <p className="par">
 
          Today's User <br />
          <b>2300</b>
        </p>
        <hr style={{color:"gray",width:"80%",position:"relative",top:"-70px",height:"1px"}}></hr>
        <div style={{position:"relative",top:"-50px",}}>
        <p style={{color:"gray",fontSize:"15px"}}><i style={{color:"green"}}>+3%</i>{ " "}than last month</p></div>
      </div>
      <div className="card">
        <div className="inner"  style={{ backgroundColor: "#56ad5c" }}>
            <SiHomeassistantcommunitystore style={{color:"white",fontSize:"25px"}}></SiHomeassistantcommunitystore>
        </div>
        <p className="par">
          {" "}
          Revenue
          <br /> <b>34K</b>
        </p>
        <hr style={{color:"gray",width:"80%",position:"relative",top:"-70px",height:"1px"}}></hr>
        <div style={{position:"relative",top:"-50px",}}>
        <p style={{color:"gray",fontSize:"15px"}}><i style={{color:"green"}}>1%</i>{ " "}than yesterday</p></div>
      </div>
      <div className="card">
        <div className="inner"  style={{ backgroundColor: "#dd2567" }}>
            <FaUserPlus style={{color:"white",fontSize:"25px"}}></FaUserPlus>
        </div>
        <p className="par">
          {" "}
          Followers
          <br /> <b>+91</b>
        </p>
        <hr style={{color:"gray",width:"80%",position:"relative",top:"-70px",height:"1px"}}></hr>
        <div style={{position:"relative",top:"-50px",}}>
      <p style={{color:"gray",fontSize:"15px"}}>{ " "}Just updated</p></div>

      </div>
      
    </div>
  );
}

export default Second;
