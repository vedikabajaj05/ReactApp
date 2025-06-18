import React, { useEffect, useState } from "react";
import background from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/background.jpg";
import logo from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/centum.png"; 
import { useLocation } from "react-router-dom";

const Randomproduct = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const { predictionResult } = location.state || {};

  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => {
        let diagnosis = "";

        // Correctly extract predicted_class
        if (typeof predictionResult === "string") {
          diagnosis = predictionResult;
        } else if (predictionResult && predictionResult.predicted_class) {
          diagnosis = predictionResult.predicted_class;
        }

        console.log("Diagnosis used for filtering:", diagnosis);

        // Filter products based on relatedDiagnosis (case-insensitive)
        let filtered = data.filter(product =>
          product.relatedDiagnosis &&
          product.relatedDiagnosis.toLowerCase().trim() === diagnosis.toLowerCase().trim()
        );

        // Fallback if no matches
        if (filtered.length === 0) {
          alert("No specific products found for this diagnosis. Showing random suggestions.");
          filtered = data.sort(() => 0.5 - Math.random());
        }

        setProducts(filtered.slice(0, 6));
      });
  }, [predictionResult]);

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
      <div style={{
        content: '""', position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center",
        filter: "blur(8px)", zIndex: -1
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

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {products.map((product, index) => (
            <a
              key={index}
              href={product.ProductLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black", width: "150px" }}
            >
              <img
                src={product.ImageURL}
                alt={product.ProductName}
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
              />
              <p style={{ marginTop: "10px", fontWeight: "bold", fontSize: "14px" }}>{product.ProductName}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Randomproduct;
