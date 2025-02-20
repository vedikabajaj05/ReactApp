import Header from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components/Header.jsx";
import React from "react";
import Button from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components//Button.jsx";
const OTP = () => (
    <div style={{ padding: "20px" }}>
      <Header title="OTP Verification" />
      <p style={{ textAlign: "center", margin: "20px 0" }}>
        Enter the 6-digit code sent to your email:
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "18px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />
        ))}
      </div>
      <Button text="Confirm" primary />
    </div>
  );
  
  export default OTP;
  