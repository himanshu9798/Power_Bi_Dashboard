import React from "react";
import { IoIosSettings } from "react-icons/io";

function Setting() {
  return (
    <div>
      <div
        style={{
          marginLeft: "1250px",
          position: "fixed",
          zIndex: "1",
          marginTop: "550px",
          display: "flex",
          height: "50px",
          width: "50px",
          padding: "10px",
          backgroundColor: "gray",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center", 
          alignItems: "center",
          fontSize: "40px",
          color: "white",
          transition: "background-color 0.3s" ,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
         
        }}
      >
        <IoIosSettings></IoIosSettings>
      
      </div>
    </div>
  );
}

export default Setting;
