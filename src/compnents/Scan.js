import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import background from "../image/background.jpg";
import logo from "../image/centum.png";

const Scan = () => {
  const [image, setImage] = useState(null);
  const [selectedInputMethod, setSelectedInputMethod] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [loadingModel, setLoadingModel] = useState(true);
  const [predicting, setPredicting] = useState(false);
  const navigate = useNavigate();
  const webcamRef = React.useRef(null);

  useEffect(() => {
    // No need to load the model in React as the backend is handling the prediction
  }, []);

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
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const processImageAndPredict = async () => {
    if (!image) {
      alert("Please capture or upload an image.");
      return;
    }

    setPredicting(true);

    // Prepare the image for upload
    const formData = new FormData();
    const response = await fetch(image);
    const blob = await response.blob();
    formData.append("image", blob, "test_image.jpg");

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.predicted_class) {
        setPredictionResult(data);
        navigate("/prediction", { state: { predictionResult: data } });
      } else {
        alert("Prediction failed.");
      }
    } catch (error) {
      console.error("Error during prediction:", error);
      alert("Prediction failed. Please try again.");
    } finally {
      setPredicting(false);
    }
  };

  const styles = {
    container: {
      position: "relative",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "60px",
    },
    navbar: {
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
    },
    backgroundImage: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(8px)",
      zIndex: -1,
    },
    section: {
      backgroundColor: "white",
      padding: "50px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width: "500px",
      textAlign: "center",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "20px",
    },
    disclaimer: {
      backgroundColor: "#f8f9fa",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
      fontSize: "14px",
      textAlign: "left",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <img src={logo} alt="Logo" style={{ height: "40px", marginLeft: "10px" }} />
      </nav>

      {/* Background Image */}
      <div style={styles.backgroundImage}></div>

      <section style={styles.section}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          Choose an input method to scan image for the Nutrition Test
        </h2>

        <div style={styles.disclaimer}>
          <strong>Disclaimer:</strong>
          <p>
          This is a purely predictive analysis which can help detect any 
          possible nutrient deficiencies you might have. We encourage 
          you to not take report generated as the sole proof of any 
          medical condition and consult a doctor for further examination 
          of micronutrient deficiencies
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setSelectedInputMethod("camera")} style={styles.button}>
            Use Camera
          </button>
          <button
            onClick={() => setSelectedInputMethod("upload")}
            style={{ ...styles.button, marginLeft: "20px" }}
          >
            Upload Image
          </button>
        </div>

        {selectedInputMethod === "camera" && (
          <div style={{ marginBottom: "20px" }}>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" width="100%" />
            <button onClick={handleCameraCapture} style={styles.button}>
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
            <img
              src={image}
              alt="Selected"
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
            <button
              onClick={processImageAndPredict}
              style={styles.button}
              disabled={predicting}
            >
              {predicting ? "Processing..." : "Scan Image"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Scan;
