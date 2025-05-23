import React from "react";
import { useLocation } from "react-router-dom";
import background from '../image/background.jpg';
import logo from '../image/centum.png';


const Prediction = () => {
  const location = useLocation(); 
  const { predictionResult } = location.state || {}; 

  return (
    <div style={{ position: "relative", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: "60px" }}>
      
      <nav style={{ position: "fixed", top: "0", left: "0", width: "100%", backgroundColor: "#f8f9fa", display: "flex", alignItems: "center", padding: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", zIndex: 1000, fontFamily: "Arial, sans-serif" }}>
        <img src={logo} alt="Logo" style={{ height: "40px", marginLeft: "10px" }} />
      </nav>


      <div style={{ content: '""', position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(8px)", zIndex: -1 }}></div>

      <section style={{ backgroundColor: "white", padding: "50px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", width: "500px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          Prediction Result for the Nutrition Test
        </h2>

        <div style={{ marginTop: '20px' }}>
          <h3>Prediction Result:</h3>
          <p>{JSON.stringify(predictionResult)}</p>
        </div>
      </section>
    </div>
  );
};

export default Prediction;
