import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/centum.png";
import background from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/background.jpg";
import genderImage from "C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/gender.png";

const Gender = () => {
    const [selectedGender, setSelectedGender] = useState("");
    const navigate = useNavigate();

    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedGender) {
            console.log("Gender Selected:", selectedGender);
            localStorage.setItem("selectedGender", selectedGender);
            navigate("/question1");
        } else {
            alert("Please select a gender before proceeding.");
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
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '400px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
    };

    const titleStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#333",
        fontFamily: "Arial, sans-serif",
    };

    const imageBoxStyle = {
        display: "inline-block",
        width: "160px",
        height: "160px",
        border: "2px solid #ccc",
        borderRadius: "50%",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
    };

    const labelStyle = {
        textAlign: "left",
        display: "block",
        marginTop: "20px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333",
        fontFamily: "Arial, sans-serif",
    };

    const buttonGroupStyle = {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "15px",
        gap: "10px",
    };

    const buttonStyle = (gender) => ({
        flex: 1,
        padding: "12px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        backgroundColor: selectedGender === gender ? "#007bff" : "#f0f0f0",
        color: selectedGender === gender ? "white" : "#333",
        cursor: "pointer",
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
    });

    return (
        <>
            <div style={containerStyle}>
                <div style={{
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
                    zIndex: -1
                }}></div>

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

                <section style={sharedBoxStyle}>
                    <h2 style={titleStyle}>Select Your Gender</h2>
                    <div style={imageBoxStyle}>
                        <img
                            src={genderImage}
                            alt="Gender"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label style={labelStyle}>Select Gender:</label>
                        <div style={buttonGroupStyle}>
                            <button type="button" style={buttonStyle("female")} onClick={() => handleGenderClick("female")}>Female</button>
                            <button type="button" style={buttonStyle("male")} onClick={() => handleGenderClick("male")}>Male</button>
                            <button type="button" style={buttonStyle("dont_wish_to_disclose")} onClick={() => handleGenderClick("dont_wish_to_disclose")}>Others</button>
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

export default Gender;
