import React, { useEffect, useRef } from "react";

const LoginBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const rainDrops = Array(columns).fill(0);

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "red";
      ctx.font = "20px monospace";

      rainDrops.forEach((y, index) => {
        // Only display '0' or '1'
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = index * 20;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[index] = 0;
        } else {
          rainDrops[index] = y + 20;
        }
      });
    }

    const interval = setInterval(drawMatrix, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Places it behind other content
        background: "black",
      }}
    />
  );
};

export default LoginBackground;
