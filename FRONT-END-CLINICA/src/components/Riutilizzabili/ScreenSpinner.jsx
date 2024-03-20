import React from "react";
import { Spinner } from "react-bootstrap";

function ScreenSpinner() {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 15000,
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner
        animation="border"
        role="status"
        style={{
          color: "lightblue",
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: 15000,
          width: 400,
          height: 400,
          margin: "-200px 0 0 -200px",
          borderWidth: "10px",
        }}
      />
    </div>
  );
}

export default ScreenSpinner;
