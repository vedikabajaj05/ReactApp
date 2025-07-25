import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import background from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/background.jpg";
import logo from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/centum.png"; 

const Prediction = () => {
  const location = useLocation(); 
  const navigate = useNavigate();
  const { predictionResult } = location.state || {}; 

  return (
    <div style={{ position: "relative", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: "60px" }}>
      
      <nav style={{ position: "fixed", top: "0", left: "0", width: "100%", backgroundColor: "#f8f9fa", display: "flex", alignItems: "center", padding: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", zIndex: 1000, fontFamily: "Arial, sans-serif" }}>
        <img src={logo} alt="Logo" style={{ height: "40px", marginLeft: "10px" }} />
      </nav>


      <div style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  filter: "blur(8px)"
}}></div>


      <section style={{ backgroundColor: "white", padding: "50px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", width: "500px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          Prediction Result for the Nutrition Test
        </h2>

        <div style={{ marginTop: '20px' }}>
          <h3>Prediction Result:</h3>
          <p>{JSON.stringify(predictionResult)}</p>
          <button
  onClick={() => navigate("/randomproducts", { state: { predictionResult } })}
  style={{
    marginTop: "30px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  View Recommended Products
</button>

        </div>
      </section>
    </div>
  );
};

export default Prediction;
