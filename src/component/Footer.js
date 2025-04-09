import React from "react";
import { IoIosHeart } from "react-icons/io";
import './header.css';

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        gap: "150px",
        marginTop: "20px",
        marginLeft: "300px",
        justifyContent: "space-evenly",
        marginRight: "20px",
        color: "gray",
        fontWeight: "500",
      }}
    >
      <div style={{ textAlign: "left" }}>
        © 2025, made with <IoIosHeart className="heart" ></IoIosHeart> by{" "}
        <span style={{ color: "black" }}>Creative Team</span> for a better web
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "end",
          color: "gray",
          cursor: "pointer",
        }}
      >
        <p   className="reach" >Creative Tim</p>
        <p  className="reach">Aout US</p>
        <p  className="reach">Blog</p>
        <p  className="reach">License</p>
      </div>
    </div>
  );
}

export default Footer;
