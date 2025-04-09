import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MatrixBackground from "./MatrixBackground";

const UserLogin = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleLogin = () => {
    if (name === "") {
      Swal.fire("Please enter your User ID", "", "warning");

      return;
    }
    if (password === "admin") {
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      })
        .then(() => {
          Swal.fire({
            title: `Hello ${name}`,
            text: "Welcome to Himanshu Power BI Dashboard",
            icon: "success",
            draggable: true,
          });
        })
        .then(() => {
          navigate("/app"); // Redirect to dashboard on successful login
        });
    } else {
      Swal.fire("Invalid User ID or Password", "Please try again", "error");
    }
  };

  return (
    <>
      <div style={styles.matrixBackgroundWrapper}>
        <MatrixBackground />
      </div>
      <div style={styles.body}>
        <div style={styles.loginBox}>
          <h2 style={styles.heading}>Power BI Login</h2>
          <input
            type="text"
            placeholder="Enter User ID"
            value={name}
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
            onBlur={(e) => (e.target.style.borderColor = "#555")}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
            onBlur={(e) => (e.target.style.borderColor = "#555")}
          />
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
          {message && <p style={styles.message}>{message}</p>}
        </div>
      </div>
    </>
  );
};

const styles = {
  body: {
    color: "#f1f1f1",
    fontFamily: "Arial, sans-serif",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    position: "relative", // Ensure the login box sits above the background
  },
  loginBox: {
    backgroundColor: "#333",
    padding: "40px",
    width: "500px", // Initial width of the login box
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    animation: "fadeIn 1s ease-out", // Apply fadeIn animation here
    position: "relative",
    zIndex: 2, // Ensure it's above the background
    transition: "width 0.3s ease", // Smooth transition for width increase
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#f1f1f1",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "2px solid #555",
    borderRadius: "5px",
    backgroundColor: "#444",
    color: "#f1f1f1",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.3s ease",
    marginTop: "20px",
  },
  message: {
    marginTop: "20px",
    color: "#FF6347",
  },
  matrixBackgroundWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0, // Ensure it's behind everything else
  },
};

// Keyframe animation for fading in the login box
const keyframes = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(0.5); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

// Inject the keyframes into the page
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default UserLogin;
