import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook
import background from '../image/background.jpg';
import glowIcon from '../image/glow.png';
import bonesIcon from '../image/boness.png';
import immunityIcon from '../image/immunity.png';
import energyIcon from '../image/energy.png';
import focusIcon from '../image/focus.png';
import logo from '../image/centum.png';


const Question1 = () => {
    const [selectedGoal, setSelectedGoal] = useState("");
    const navigate = useNavigate();  // Initialize the useNavigate hook

    const handleGoalSelect = (goal) => {
        setSelectedGoal(goal);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedGoal) {
            console.log("Selected Health Goal:", selectedGoal);
            // Navigate to question2.js when a goal is selected
            navigate('/question2');  // Redirects to question2.js
        }
    };

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
        gridTemplateColumns: "repeat(3, 1fr)", // 3 images per row
        gap: "20px",
        justifyItems: "center", // Ensure items are centered
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
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Add shadow here
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
        gridTemplateColumns: "repeat(2, 1fr)", 
        gap: "1px", 
        justifyItems: "center", 
    };

    return (
        <>
            {/* Navbar */}
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
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
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
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
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
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
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
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
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
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </div>
                                <div style={labelStyle}>Focus</div>
                            </div>
                        </div>

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
