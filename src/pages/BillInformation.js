import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import './bill.css'
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa";

function BillInformation() {
  return (
    <div
      style={{
        marginLeft: "320px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "48%",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px gray",
        }}
      >
        <h3>Billing Information</h3>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            marginTop: "20px",
            width: "95%",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h6>Himanshu Barnawal</h6>
            <button
              id="orange"
              style={{ border: "none", outline: "none", borderRadius: "5px" }}
            >
              <AiOutlineDelete />
              DELETE
            </button>
            <button
              id="gray"
              style={{ border: "none", outline: "none", borderRadius: "5px" }}
            >
              <RiPencilFill />
              Edit
            </button>
          </div>
          <span style={{ color: "gray", fontSize: "15px" }}>Company Name:</span>
          <span>Sarjen Syatem pvt ltd.</span>
          <br />
          <span style={{ color: "gray", fontSize: "15px" }}>
            Email Address:
          </span>
          <span>himanshu0@gmail.com </span>
          <br />
          <span style={{ color: "gray", fontSize: "15px" }}>Phone Number:</span>
          <span>7654231646</span>
          <br />
        </div>
        <br/>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            marginTop: "20px",
            width: "95%",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h6>Rishab Bhatia</h6>
            <button
              id="orange"
              style={{ border: "none", outline: "none", borderRadius: "5px" }}
            >
              <AiOutlineDelete />
              DELETE
            </button>
            <button
              id="gray"
              style={{ border: "none", outline: "none", borderRadius: "5px" }}
            >
              <RiPencilFill />
              Edit
            </button>
          </div>
          <span style={{ color: "gray", fontSize: "15px" }}>Company Name:</span>
          <span>Azilen Technologies</span>
          <br />
          <span style={{ color: "gray", fontSize: "15px" }}>
            Email Address:
          </span>
          <span>Bhatia@gmail.com</span>
          <br />
          <span style={{ color: "gray", fontSize: "15px" }}>Phone Number:</span>
          <span>9897651002</span>
          <br />
        </div>
        <br/>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            marginTop: "20px",
            width: "95%",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h6>Vikash Kumar</h6>
            <button
              id="orange"
              style={{ border: "none", outline: "none", borderRadius: "5px" }}
            >
              <AiOutlineDelete />
              DELETE
            </button>
            <button
              id="gray"
              style={{ border: "none", outline: "none", borderRadius: "5px" }}
            >
              <RiPencilFill />
              Edit
            </button>
          </div>
          <span style={{ color: "gray", fontSize: "15px" }}>Company Name:</span>
          <span>Wpweb Infotech pvt ltd.</span>
          <br />
          <span style={{ color: "gray", fontSize: "15px" }}>
            Email Address:
          </span>
          <span>vikash@gmail.com</span>
          <br />
          <span style={{ color: "gray", fontSize: "15px" }}>Phone Number:</span>
          <span>+1 202-555-0174</span>
          <br />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          width: "48%",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px gray",
          marginRight: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h6>Your Transaction's</h6>
          <p style={{ color: "gray" }}>
            <BsCalendarDate /> 30 March 2020
          </p>
        </div>
        <h6 style={{ color: "gray" }}>Newest</h6>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="loss"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                color: "red",
                border: "1px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <MdOutlineExpandMore  style={{ fontSize: "30px" }} />
            </div>
            <p>
              Netflix
              <br />
              <span style={{color:"gray"}}>27 March 2025, at 12:30 PM</span>
            </p>
          </div>
          <p style={{ color: "red", fontWeight: "600" }}>- $ 2,500</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="profit"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                color: "green",
                border: "1px solid green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FaAngleUp  style={{ fontSize: "25px" }} />
            </div>
            <p>
            Apple
              <br />
              <span style={{color:"gray"}}>27 March 2025, at 12:30 PM</span>
            </p>
          </div>
          <p style={{ color: "green", fontWeight: "600" }}>+$ 2,500</p>
        </div>
        <h6 style={{ color: "gray" }}>YesterDay</h6>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="profit"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                color: "green",
                border: "1px solid green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FaAngleUp style={{ fontSize: "25px" }} />
            </div>
            <p>
            Stripe
              <br />
              26 March 2025, at 12:30 PM
            </p>
          </div>
          <p style={{ color: "green", fontWeight: "600" }}>+$750</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="profit"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                color: "green",
                border: "1px solid green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FaAngleUp style={{ fontSize: "25px" }} />
            </div>
            <p>
            HubSpot
              <br />
              <span style={{color:"gray"}}>26 March 2025, at 11:30 PM</span>
            </p>
          </div>
          <p style={{ color: "green", fontWeight: "600" }}>+$500</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="profit"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                color: "green",
                border: "1px solid green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FaAngleUp style={{ fontSize: "25px" }} />
            </div>
            <p>
            Creative Tim
              <br />
              <span style={{color:"gray"}}>26 March 2025, at 10:30 PM</span>
            </p>
          </div>
          <p style={{ color: "green", fontWeight: "600" }}>+$750</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                color: "gray",
                border: "1px solid gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FaExclamation style={{ fontSize: "25px" }} />
            </div>
            <p>
            Creative Tim
              <br />
              <span style={{color:"gray"}}>26 March 2025, at 10:30 PM</span>
            </p>
          </div>
          <p style={{ color: "gray", fontWeight: "600" }}>Pending</p>
        </div>


      </div>
    </div>
  );
}

export default BillInformation;
