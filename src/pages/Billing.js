import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Search from "../component/Search";
import credit from "./Images/credit-removebg-preview.png";
import { PiBankFill } from "react-icons/pi";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { SlPaypal } from "react-icons/sl";
import { RiPencilFill } from "react-icons/ri";
import { RiVisaLine } from "react-icons/ri";
import BillInformation from "./BillInformation";

function Billing() {
  return (
    <div>
      <Header></Header>
      <div>
        <Search main="Billing" secondmains="Billing"></Search>
      </div>
      <br />
      <br />

      <div style={{ marginLeft: "280px", display: "flex", gap: "15px" }}>
        <div style={{ marginTop: "100px", width: "400px", height: "400px" }}>
          <img
            src={credit}
            alt="credit"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the image covers the entire div without distortion

              marginTop: "-100px",
            }}
          />
        </div>
        <div
          style={{
            borderRadius: "10px",
            width: "150px",
            marginTop: "100px",
            height: "200px",
            boxShadow: "10px 10px 30px gray",
          }}
        >
          <div
            style={{
              marginLeft: "30px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3c9cec",
              color: "white",
              width: "50%",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <PiBankFill style={{ fontSize: "30px" }}></PiBankFill>
          </div>

          <h4 style={{ textAlign: "center" }}>salary</h4>
          <p style={{ fontSize: "15px ", color: "gray", textAlign: "center" }}>
            Belong Interactive
          </p>
          <hr style={{ backgroundColor: "gray" }}></hr>
          <h3 style={{ textAlign: "center" }}>+$2000</h3>
        </div>
        <div
          style={{
            borderRadius: "10px",
            height: "200px",
            width: "150px",
            marginTop: "100px",
            boxShadow: "0px 0px 30px gray",
          }}
        >
          <div
            style={{
              marginLeft: "30px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3c9cec",
              color: "white",
              width: "50%",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <SlPaypal style={{ fontSize: "30px", color: "white" }}></SlPaypal>
          </div>

          <h4 style={{ textAlign: "center" }}>paypal</h4>
          <p style={{ fontSize: "15px ", color: "gray", textAlign: "center" }}>
            Freelance Payment
          </p>
          <hr style={{ backgroundColor: "gray", color: "gray" }}></hr>
          <h3 style={{ textAlign: "center" }}>$455.00</h3>
        </div>

        <div
          style={{
            boxShadow: "0px 0px 30px gray",
            borderRadius: "10px",
            width: "400px",
            marginTop: "100px",
            height: "450px",
            marginRight: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <h3>Invoices</h3>
            <button
              style={{
                border: "1px solid green",
                borderRadius: "10px",
                color: "green",
                cursor: "pointer",
              }}
            >
              View All
            </button>
          </div>
          <table cellPadding={15} style={{ width: "100%" }}>
            <tr style={{ lineHeight: "10px" }}>
              <td>
                <p>March, 01, 2020</p>
                <p style={{ color: "gray", fontSize: "12px" }}>#MS-415646</p>
              </td>
              <td>
                $180 <MdOutlinePictureAsPdf /> pdf
              </td>
            </tr>
            <tr style={{ lineHeight: "10px" }}>
              <td>
                <p>February, 10, 2021</p>
                <p style={{ color: "gray", fontSize: "12px" }}>#RV-126749</p>
              </td>
              <td>
                $250 <MdOutlinePictureAsPdf /> pdf
              </td>
            </tr>
            <tr style={{ lineHeight: "10px" }}>
              <td>
                <p>April, 05, 2020</p>
                <p style={{ color: "gray", fontSize: "12px" }}>#QW-103578</p>
              </td>
              <td>
                $120 <MdOutlinePictureAsPdf /> pdf
              </td>
            </tr>
            <tr style={{ lineHeight: "10px" }}>
              <td>
                <p>June, 25, 2019</p>
                <p style={{ color: "gray", fontSize: "12px" }}>#QW-103578</p>
              </td>
              <td>
                $120 <MdOutlinePictureAsPdf /> pdf
              </td>
            </tr>
            <tr style={{ lineHeight: "10px" }}>
              <td>
                <p style={{ color: "black" }}>August, 05, 2025</p>
                <p style={{ color: "gray", fontSize: "12px" }}>#QW-103578</p>
              </td>
              <td>
                $500 <MdOutlinePictureAsPdf /> pdf
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div
        style={{
          marginLeft: "320px",
          border: "1px solid gray",
          width: "45%",
          height: "200px",
          marginTop: "-200px",
          borderRadius: "10px",
          boxShadow: "0px 0px 30px gray",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "10px",
            justifyContent: "space-between",
          }}
        >
          <h4>Payment Method</h4>
          <button
            style={{
              fontWeight: "500",
              color: "white",
              backgroundColor: "black",
              cursor: "pointer",
              border: "none",
              borderRadius: "10px",
              padding: "5px 10px",
              fontSize: "15px",
            }}
          >
            + Add New Card
          </button>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            margin: "10px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "45%",
              height: "50px",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "10px",
              display: "flex",
              justifyContent: "space-around",
              fontSize: "15px",
            }}
          >
            <div style={{ display: "flex", marginTop: "5px" }}>
              <span
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                }}
              ></span>
              <span
                style={{
                  marginLeft: "-5px",
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                }}
              ></span>
            </div>

            <p>****</p>
            <p>****</p>
            <p>****</p>
            <p>7814</p>
            <p>
              <RiPencilFill
                title="Edit"
                style={{ fontSize: "25px", cursor: "pointer" }}
              />
            </p>
          </div>

          <div
            style={{
              width: "45%",
              height: "50px",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "10px",
              display: "flex",
              justifyContent: "space-around",
              fontSize: "15px",
            }}
          >
            <div style={{ display: "flex", marginTop: "0px" }}>
              <RiVisaLine
                style={{ fontSize: "25px", color: "blue" }}
              ></RiVisaLine>
            </div>

            <p>****</p>
            <p>****</p>
            <p>****</p>
            <p>6768</p>
            <p>
              <RiPencilFill
                title="Edit"
                style={{ fontSize: "25px", cursor: "pointer" }}
              />
            </p>
          </div>
        </div>
      </div>
      <br/><br/>
      <br/><br/>

      <BillInformation></BillInformation>

      <Footer></Footer>
    </div>
  );
}

export default Billing;
