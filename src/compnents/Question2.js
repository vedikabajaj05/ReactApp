import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate to handle navigation
import background from "C:/Users/vedik/OneDrive/Desktop/centrumq/centrumq/src/image/background.jpg";
import wrinkledSkinIcon from "C:/Users/vedik/OneDrive/Desktop/centrumq/centrumq/src/image/wrinkled.png";
import skinRashIcon from "C:/Users/vedik/OneDrive/Desktop/centrumq/centrumq/src/image/rashes.png";
import paleSkinIcon from "C:/Users/vedik/OneDrive/Desktop/centrumq/centrumq/src/image/pale.png";
import darkKnucklesIcon from "C:/Users/vedik/OneDrive/Desktop/centrumq/centrumq/src/image/dark.png";
import thinningHairIcon from "C:/Users/vedik/OneDrive/Desktop/centrumq/centrumq/src/image/hairthin.png";
import logo from "C:/Users/vedik/OneDrive/Desktop/centrumq/centrumq/src/image/centum.png";

const Question2 = () => {
    const [selectedIssue, setSelectedIssue] = useState("");
    const navigate = useNavigate(); // Initialize navigate hook

    const handleIssueSelect = (issue) => {
        setSelectedIssue(issue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedIssue) {
            console.log("Selected Hair/Skin Issue:", selectedIssue);
            // Navigate to YesNo.js with the selected issue as state
            navigate("/yesno", { state: { issue: selectedIssue } });
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
                    <h2 style={titleStyle}>Are you facing any of these issues with your hair and skin?</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={iconContainerStyle}>
                            <div style={wrapperStyle}>
                                <div
                                    style={selectedIssue === "wrinkledSkin" ? selectedIconStyle : iconStyle}
                                    onClick={() => handleIssueSelect("wrinkledSkin")}
                                >
                                    <img
                                        src={wrinkledSkinIcon}
                                        alt="Wrinkled Skin"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </div>
                                <div style={labelStyle}>Wrinkled Skin</div>
                            </div>

                            <div style={wrapperStyle}>
                                <div
                                    style={selectedIssue === "skinRash" ? selectedIconStyle : iconStyle}
                                    onClick={() => handleIssueSelect("skinRash")}
                                >
                                    <img
                                        src={skinRashIcon}
                                        alt="Skin Rash"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </div>
                                <div style={labelStyle}>Skin Rash</div>
                            </div>

                            <div style={wrapperStyle}>
                                <div
                                    style={selectedIssue === "paleSkin" ? selectedIconStyle : iconStyle}
                                    onClick={() => handleIssueSelect("paleSkin")}
                                >
                                    <img
                                        src={paleSkinIcon}
                                        alt="Pale Skin"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </div>
                                <div style={labelStyle}>Pale Skin</div>
                            </div>
                        </div>

                        <div style={secondRowStyle}>
                            <div style={wrapperStyle}>
                                <div
                                    style={selectedIssue === "darkKnuckles" ? selectedIconStyle : iconStyle}
                                    onClick={() => handleIssueSelect("darkKnuckles")}
                                >
                                    <img
                                        src={darkKnucklesIcon}
                                        alt="Dark Knuckles"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </div>
                                <div style={labelStyle}>Dark Knuckles</div>
                            </div>

                            <div style={wrapperStyle}>
                                <div
                                    style={selectedIssue === "thinningHair" ? selectedIconStyle : iconStyle}
                                    onClick={() => handleIssueSelect("thinningHair")}
                                >
                                    <img
                                        src={thinningHairIcon}
                                        alt="Thinning Hair"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </div>
                                <div style={labelStyle}>Thinning Hair</div>
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

export default Question2;
