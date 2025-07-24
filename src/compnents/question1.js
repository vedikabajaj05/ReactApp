import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook
import background from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/background.jpg";
import glowIcon from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/women.png";
import bonesIcon from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/bones.png";
import immunityIcon from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/immunity1.png";
import energyIcon from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/energy1.png";
import focusIcon from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/focus1.png";
import logo from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/centum.png";
import otherIcon from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/image.png";
const Question1 = () => {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [otherGoal, setOtherGoal] = useState("");
  const navigate = useNavigate();

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    if (goal !== "other") {
      setOtherGoal("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedGoal && (selectedGoal !== "other" || otherGoal.trim() !== "")) {
      const finalGoal = selectedGoal === "other" ? otherGoal.trim() : selectedGoal;
      console.log("Selected Health Goal:", finalGoal);
      // Pass finalGoal as needed (e.g., state, context)
      navigate("/question2");
    } else {
      alert("Please select a goal or enter a custom goal.");
    }
  };

  // Styles unchanged except added for input below:
  const containerStyle = {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "60px",
    fontFamily: "sans-serif",
  };

  const sharedBoxStyle = {
    backgroundColor: "white",
    padding: "50px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "500px",
    textAlign: "center",
    fontFamily: "sans-serif",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  };

  const iconContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 per row
    gap: "20px",
    justifyItems: "center",
    marginBottom: "20px",
  };

  const iconStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "2px solid #ccc",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const selectedIconStyle = {
    ...iconStyle,
    backgroundColor: "grey",
    transform: "scale(1.1)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  };

  const labelStyle = {
    fontSize: "14px",
    marginTop: "10px",
    textAlign: "center",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  };

  const wrapperStyle = {
    textAlign: "center",
  };

  const secondRowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Changed to 3 to accommodate Other icon in same row
    gap: "20px",
    justifyItems: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginTop: "15px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
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
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "40px", marginLeft: "10px" }} />
      </nav>

      <div style={containerStyle}>
        <div
          style={{
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
          }}
        ></div>
        <section style={sharedBoxStyle}>
          <h2 style={titleStyle}>Select Appropriate Health Goal</h2>
          <form onSubmit={handleSubmit}>
            <div style={iconContainerStyle}>
              <div style={wrapperStyle}>
                <div
                  style={selectedGoal === "glow" ? selectedIconStyle : iconStyle}
                  onClick={() => handleGoalSelect("glow")}
                >
                  <img
                    src={glowIcon}
                    alt="Glow"
                    style={{
                      width: "105%",
                      height: "105%",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div style={labelStyle}>Glow</div>
              </div>

              <div style={wrapperStyle}>
                <div
                  style={selectedGoal === "bones" ? selectedIconStyle : iconStyle}
                  onClick={() => handleGoalSelect("bones")}
                >
                  <img
                    src={bonesIcon}
                    alt="Strong Bones"
                    style={{
                      width: "105%",
                      height: "105%",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div style={labelStyle}>Strong Bones</div>
              </div>

              <div style={wrapperStyle}>
                <div
                  style={selectedGoal === "immunity" ? selectedIconStyle : iconStyle}
                  onClick={() => handleGoalSelect("immunity")}
                >
                  <img
                    src={immunityIcon}
                    alt="Immunity"
                    style={{
                      width: "125%",
                      height: "124%",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div style={labelStyle}>Immunity</div>
              </div>
            </div>

            <div style={secondRowStyle}>
              <div style={wrapperStyle}>
                <div
                  style={selectedGoal === "energy" ? selectedIconStyle : iconStyle}
                  onClick={() => handleGoalSelect("energy")}
                >
                  <img
                    src={energyIcon}
                    alt="Energy Level"
                    style={{
                      width: "135%",
                      height: "135%",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div style={labelStyle}>Energy Level</div>
              </div>

              <div style={wrapperStyle}>
                <div
                  style={selectedGoal === "focus" ? selectedIconStyle : iconStyle}
                  onClick={() => handleGoalSelect("focus")}
                >
                  <img
                    src={focusIcon}
                    alt="Focus"
                    style={{
                      width: "135%",
                      height: "135%",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div style={labelStyle}>Focus</div>
              </div>

              {/* Other icon */}
              <div style={wrapperStyle}>
                <div
                  style={selectedGoal === "other" ? selectedIconStyle : iconStyle}
                  onClick={() => handleGoalSelect("other")}
                >
                  <img
                    src={otherIcon}
                    alt="Other"
                    style={{
                      width: "105%",
                      height: "105%",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div style={labelStyle}>Other</div>
              </div>
            </div>

            {/* Show input if "Other" is selected */}
            {selectedGoal === "other" && (
              <input
                type="text"
                placeholder="Please specify your health goal"
                value={otherGoal}
                onChange={(e) => setOtherGoal(e.target.value)}
                style={inputStyle}
                required
              />
            )}

            <button
              type="submit"
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
                fontFamily: "Arial, sans-serif",
              }}
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Question1;