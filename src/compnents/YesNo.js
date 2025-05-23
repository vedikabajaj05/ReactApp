import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import background from '../image/background.jpg';
import sickImage from '../image/sickPerson.png';
import logo from '../image/centum.png';

const YesNo = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate(); 

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer === "yes") {
      navigate("/scan"); 
    } else if (selectedAnswer === "no") {
      window.location.href = "https://www.centrumshop.in/"; 
        }
  };

  return (
    <div style={{ position: "relative", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: "60px" }}>
      
      <nav style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        backgroundColor: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        fontFamily: "Arial, sans-serif",
      }}>
        <img src={logo} alt="Logo" style={{ height: "40px", marginLeft: "10px" }} />
      </nav>

     
      <div style={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(8px)", zIndex: -1 }}></div>

      <section style={{ backgroundColor: "white", padding: "50px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", width: "500px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          Have you been falling sick more than often recently?
        </h2>

      
        <img 
          src={sickImage} 
          alt="Sick" 
          style={{ width: "175px", height: "175px", marginBottom: "20px", objectFit: "cover" }} 
        />


        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
          <button
            onClick={() => handleAnswerSelect("yes")}
            style={{
              padding: "12px 24px",
              backgroundColor: selectedAnswer === "yes" ? "#007bff" : "#ddd",
              color: selectedAnswer === "yes" ? "white" : "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Yes
          </button>

          <button
            onClick={() => handleAnswerSelect("no")}
            style={{
              padding: "12px 24px",
              backgroundColor: selectedAnswer === "no" ? "#007bff" : "#ddd",
              color: selectedAnswer === "no" ? "white" : "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            No
          </button>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "30px",
          }}
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default YesNo;
