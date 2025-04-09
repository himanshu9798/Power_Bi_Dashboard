import React from "react";
import "./search.css";
import { MdHomeFilled } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

function Search({ main, secondmains }) {
  return (
    <div
      style={{
        marginLeft: "300px",
        position: "fixed",
        zIndex: "1",
        marginTop: "30px",
        display: "flex",
        width: "80%",
        padding: "10px",
      }}
    >
      <div
        className="srch"
        style={{
          display: "flex",
          width: "90%",
          backgroundColor: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <div style={{}}>
          <span style={{ color: "gray" }}>
            {" "}
            <MdHomeFilled></MdHomeFilled> / {main}
          </span>
          <h5 style={{ color: "black" }}>{secondmains}</h5>
        </div>
        <div
          style={{
            display: "flex",
            color: "gray",
            marginLeft: "500px",
            gap: "5px",
          }}
        >
          <input
            type="text"
            placeholder="search Here"
            style={{
              width: "80%",
              margin: "5px",
              border: "0.5px solid gray",
              borderRadius: "5px",
              outline: "none",
            }}
          ></input>
          <FaUserCircle
            style={{ marginTop: "10px", fontSize: "30px" }}
          ></FaUserCircle>
          <IoMdSettings
            style={{ marginTop: "10px", fontSize: "30px" }}
          ></IoMdSettings>
          <IoIosNotifications
            style={{ marginTop: "10px", fontSize: "30px" }}
          ></IoIosNotifications>
        </div>
      </div>
    </div>
  );
}

export default Search;
