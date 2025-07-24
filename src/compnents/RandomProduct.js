import React, { useEffect, useState } from "react";
import background from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/background.jpg";
import logo from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/centum.png"; 
import { useLocation } from "react-router-dom";

const Randomproduct = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const { predictionResult } = location.state || {};

  // ✅ Get gender from localStorage
  const selectedGender = localStorage.getItem("selectedGender") || "";

  useEffect(() => {
    fetch("/data/products1.json")
      .then(res => res.json())
      .then(data => {
        let diagnosis = "";

        if (typeof predictionResult === "string") {
          diagnosis = predictionResult;
        } else if (predictionResult && predictionResult.predicted_class) {
          diagnosis = predictionResult.predicted_class;
        }

        console.log("Diagnosis used for filtering:", diagnosis);
        console.log("Gender from localStorage:", selectedGender);

        // Step 1: Filter by diagnosis
        let filtered = data.filter(product =>
          product.relatedDiagnosis &&
          product.relatedDiagnosis.toLowerCase().trim() === diagnosis.toLowerCase().trim()
        );

        // Step 2: Apply gender filter if gender is male or female
        if (selectedGender === "female" || selectedGender === "male") {
          filtered = filtered.filter(product =>
            !product.gender || product.gender.toLowerCase() === selectedGender
          );
        }

        // Step 3: If nothing found, show 2 random
        if (filtered.length === 0) {
          alert("No specific products found for this diagnosis. Showing random suggestions.");
          filtered = data.sort(() => 0.5 - Math.random()).slice(0, 2);
        } else {
          filtered = filtered.slice(0, 2);
        }

        setProducts(filtered);
      });
  }, [predictionResult, selectedGender]);

  return (
    <div style={{ position: "relative", height: "100vh", paddingTop: "60px", fontFamily: "Arial, sans-serif" }}>
      {/* Navigation Bar */}
      <nav style={{
        position: "fixed", top: "0", left: "0", width: "100%", backgroundColor: "#f8f9fa",
        display: "flex", alignItems: "center", padding: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", zIndex: 1000
      }}>
        <img src={logo} alt="Logo" style={{ height: "40px", marginLeft: "10px" }} />
      </nav>

      {/* Background */}
      {/* Scrolling background that stretches with content */}
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


      {/* Content */}
      <section style={{
        backgroundColor: "white", padding: "30px", borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", margin: "0 auto",
        maxWidth: "900px", textAlign: "center"
      }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          Recommended Products
        </h2>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
  {products.map((product, index) => (
    <a
      key={index}
      href={product.ProductLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "black",
        width: "80%",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: "16px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
      }}
    >
      <img
  src={product.ImageURL}
  alt={product.ProductName}
  style={{
    width: "100%",
    height: "300px",
    objectFit: "contain",
    padding: "8px",
    border: "6px solid",
    borderImage: "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet) 1",
    borderRadius: "12px",
    backgroundColor: "#fff"
  }}
/>

      <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "16px", textAlign: "center" }}>
        {product.ProductName}
      </p>
    </a>
  ))}
</div>

      </section>
    </div>
  );
};

export default Randomproduct;
