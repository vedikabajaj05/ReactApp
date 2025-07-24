import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import background from "../image/background.jpg";
import logo from "../image/centum.png";

const Scan = () => {
  const [image, setImage] = useState(null);
  const [selectedInputMethod, setSelectedInputMethod] = useState(null);
  const [predicting, setPredicting] = useState(false);
  const navigate = useNavigate();
  const webcamRef = useRef(null);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleCameraCapture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    }
  };

  const processImageAndPredict = async () => {
    if (!image) {
      alert("Please capture or upload an image.");
      return;
    }

    setPredicting(true);

    try {
      // Convert base64 image to blob for FormData
      const response = await fetch(image);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append("file", blob, "uploaded_image.jpg");

      if (!image.startsWith("data:image/")) {
        alert("Invalid image format.");
        return;
      }

      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

      if (data.predicted_class) {
        // Navigate and pass prediction data to /prediction route
        navigate("/prediction", { state: { predictionResult: data } });
      } else {
        alert("Prediction failed: No predicted_class in response.");
      }
    } catch (error) {
      console.error("Error during prediction:", error);
      alert("Prediction failed. Please try again.");
    } finally {
      setPredicting(false);
    }
  };

  //styles

  return (
    <div style={{ position: "relative", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: "60px" }}>
      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", backgroundColor: "#f8f9fa", display: "flex", alignItems: "center", padding: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", zIndex: 1000, fontFamily: "Arial, sans-serif" }}>
        <img src={logo} alt="Logo" style={{ height: "40px", marginLeft: "10px" }} />
      </nav>

      {/* Background */}
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

      <section style={{ backgroundColor: "white", padding: "50px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", width: "500px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          Choose an input method to scan image for the Nutrition Test
        </h2>

        <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", marginBottom: "20px", fontSize: "14px", textAlign: "left", color: "#333" }}>
          <strong>Disclaimer:</strong>
          <p>
            This is a purely predictive analysis which can help detect any
            possible nutrient deficiencies you might have. We encourage
            you to not take report generated as the sole proof of any
            medical condition and consult a doctor for further examination
            of micronutrient deficiencies.
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setSelectedInputMethod("camera")} style={{ padding: "12px 24px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px", marginRight: "20px" }}>
            Use Camera
          </button>
          <button onClick={() => setSelectedInputMethod("upload")} style={{ padding: "12px 24px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px" }}>
            Upload Image
          </button>
        </div>

        {selectedInputMethod === "camera" && (
          <div style={{ marginBottom: "20px" }}>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" width="100%" />
            <button onClick={handleCameraCapture} style={{ padding: "12px 24px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px", marginTop: "10px" }}>
              Capture Image
            </button>
          </div>
        )}

        {selectedInputMethod === "upload" && (
          <div style={{ marginBottom: "20px" }}>
            <input type="file" accept="image/*" onChange={handleFileUpload} />
          </div>
        )}

        {image && (
          <div style={{ marginBottom: "20px" }}>
            <img src={image} alt="Selected" style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }} />
            <button onClick={processImageAndPredict} disabled={predicting} style={{ padding: "12px 24px", backgroundColor: predicting ? "#6c757d" : "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: predicting ? "not-allowed" : "pointer", fontSize: "16px", marginTop: "20px" }}>
              {predicting ? "Processing..." : "Scan Image"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Scan;
