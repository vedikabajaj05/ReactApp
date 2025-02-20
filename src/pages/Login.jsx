import Header from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components/Header.jsx";
import Input from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components/Input.jsx";
import React from "react";
import Button from "C:/Users/vedik/OneDrive/Desktop/react_app/diagnosis/src/components//Button.jsx";

const Login = () => (
  <div style={{ padding: "20px" }}>
    <Header title="Log In" />
    <img
      src="/assets/logo.png"
      alt="Logo"
      style={{ width: "100px", display: "block", margin: "20px auto" }}
    />
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    <Button text="Log In" primary />
    <p style={{ textAlign: "center", marginTop: "10px" }}>Or log in with:</p>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button style={{ margin: "0 10px" }}>Google</button>
      <button style={{ margin: "0 10px" }}>Facebook</button>
    </div>
  </div>
);

export default Login;
