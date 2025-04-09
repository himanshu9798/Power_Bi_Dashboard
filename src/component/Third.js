import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import "./third.css";
import map from "./images/m.png";
import man from "./images/profile.png";
import woman from "./images/woman.png";
import spofify from "./images/spotify.png";
import more from "./images/more.png";
import growth from "./images/growth.png";
import fix from "./images/lock-pattern.png";
import text from "./images/text.png";
import { BiUpArrowAlt } from "react-icons/bi";
import Milestones from "./Milestones";

function Third() {
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
          width: "700px",
          padding: "5px",
          lineHeight: "1.5",
        }}
      >
        <h5 style={{ float: "left" }}>Project</h5>
        <br />
        <p style={{ float: "left" }}>
          <b style={{ color: "blue", marginLeft: "-50px" }}>✓ </b>30 done this
          month
        </p>
        <p className="dot1">
          <HiDotsVertical></HiDotsVertical>
          <div className="dot" style={{ border: "1px solid white" }}>
            <li>Action</li>
            <li>Another Action</li>
            <li>Something Else</li>
          </div>
        </p>
        <br />
        <br />
        <div
          style={{
            borderBottom: "1px solid gray",
            display: "flex",
            color: "gray",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          <p style={{ marginLeft: "10px" }}>companies</p>
          <p style={{ marginLeft: "220px" }}>members</p>
          <p style={{ marginLeft: "80px" }}>budget</p>
          <p style={{ marginLeft: "80px" }}>completion</p>
        </div>
        <br />
        <div
          style={{
            borderBottom: "1px solid gray",
            display: "flex",
            color: "gray",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "bold",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "black" }}>
            <img style={{ width: "20px" }} src={map} alt=""></img> Material UI
            XD Version
          </p>
          <p style={{ marginLeft: "10px" }}>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={man}
              alt=""
              title="jhonny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={woman}
              alt=""
              title="jenny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={map}
              alt=""
              title="honny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={woman}
              alt=""
              title="Raksha"
            ></img>
          </p>
          <p style={{ color: "gray", fontWeight: "800", marginLeft: "-10px" }}>
            $14,000
          </p>
          <p>
            <div
              style={{
                width: "100px",
                height: "7px",
                backgroundColor: "gray",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "7px",
                  backgroundColor: "#1c84fc",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </p>
        </div>{" "}
        <br />
        <div
          style={{
            borderBottom: "1px solid gray",
            display: "flex",
            color: "gray",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "bold",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "black" }}>
            <img style={{ width: "20px" }} src={growth} alt=""></img> Add
            Progress Track
          </p>
          <p style={{ marginLeft: "20px" }}>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={map}
              alt=""
              title="honny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={woman}
              alt=""
              title="Raksha"
            ></img>
          </p>
          <p style={{ color: "gray", fontWeight: "800", marginLeft: "20px" }}>
            $3,000
          </p>
          <p>
            <div
              style={{
                width: "100px",
                height: "7px",
                backgroundColor: "gray",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "7px",
                  backgroundColor: "#1c84fc",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </p>
        </div>{" "}
        <br />
        <div
          style={{
            borderBottom: "1px solid gray",
            display: "flex",
            color: "gray",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "bold",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "black" }}>
            <img style={{ width: "20px" }} src={fix} alt=""></img> Fix Platform
            Errors
          </p>
          <p style={{ marginLeft: "15px" }}>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={map}
              alt=""
              title="honny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={woman}
              alt=""
              title="Raksha"
            ></img>
          </p>
          <p style={{ color: "gray", fontWeight: "800", marginLeft: "15px" }}>
            $14,000
          </p>
          <p>
            <div
              style={{
                width: "100px",
                height: "7px",
                backgroundColor: "gray",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "7px",
                  backgroundColor: "green",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </p>
        </div>
        <br />
        <div
          style={{
            borderBottom: "1px solid gray",
            display: "flex",
            color: "gray",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "bold",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "black" }}>
            <img style={{ width: "20px" }} src={spofify} alt=""></img>
            {"  "}Launch our Mobile App
          </p>
          <p style={{ marginLeft: "5px" }}>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={man}
              alt=""
              title="jhonny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={woman}
              alt=""
              title="jenny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={map}
              alt=""
              title="honny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={woman}
              alt=""
              title="Raksha"
            ></img>
          </p>
          <p style={{ color: "gray", fontWeight: "800" }}>Not Set</p>
          <p>
            <div
              style={{
                width: "100px",
                height: "7px",
                backgroundColor: "gray",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "7px",
                  backgroundColor: "green",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </p>
        </div>
        <br />
        <div
          style={{
            borderBottom: "1px solid gray",
            display: "flex",
            color: "gray",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "bold",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "black" }}>
            <img style={{ width: "20px" }} src={more} alt=""></img> Add the New
            Pricing Page
          </p>
          <p style={{ marginLeft: "5px" }}>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={man}
              alt=""
              title="jhonny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={woman}
              alt=""
              title="jenny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={map}
              alt=""
              title="honny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={woman}
              alt=""
              title="Raksha"
            ></img>
          </p>
          <p style={{ color: "gray", fontWeight: "800" }}>$4,000</p>
          <p>
            <div
              style={{
                width: "100px",
                height: "7px",
                backgroundColor: "gray",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "7px",
                  backgroundColor: "#1c84fc",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </p>
        </div>
        <br />
        <div
          style={{
            borderBottom: "1px solid gray",
            display: "flex",
            color: "gray",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "bold",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "black" }}>
            <img style={{ width: "20px" }} src={text} alt=""></img>Redesign New
            Online Shop
          </p>
          <p style={{ marginLeft: "0px" }}>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={man}
              alt=""
              title="jhonny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={woman}
              alt=""
              title="jenny"
            ></img>
            <img
              style={{ width: "20px", borderRadius: "50%" }}
              src={map}
              alt=""
              title="honny"
            ></img>
          </p>
          <p style={{ color: "gray", fontWeight: "800", marginLeft: "10px" }}>
            $2,000
          </p>
          <p>
            <div
              style={{
                width: "100px",
                height: "7px",
                backgroundColor: "gray",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "7px",
                  backgroundColor: "#1c84fc",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </p>
        </div>
      </div>

      {/* //second part of time line */}
      <div>
        <div
          style={{
            boxShadow: "5px 5px 25px gray",
            borderRadius: "10px",
            width: "300px",
            padding: "5px",
          }}
        >
          <h5>Orders Overview</h5>
          <p style={{ fontSize: "15px", color: "gray", fontWeight: "800" }}>
            {" "}
            <i style={{ color: "green" }}>
              <BiUpArrowAlt></BiUpArrowAlt>24%
            </i>{" "}
            this month
          </p>
          <div>
            <br />
            <br />
           <Milestones></Milestones>
           <br/>
           <br/>
           <br/>
           <br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
