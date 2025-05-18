import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import logo from "C:/Users/vedik/OneDrive/Desktop/centrumq/centrumq/src/image/centum.png";
import background from "C:/Users/vedik/OneDrive/Desktop/centrumq/centrumq/src/image/background.jpg";

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        dob: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Full name is required.";
        if (!formData.dob) newErrors.dob = "Date of birth is required.";
        if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            navigate('/gender'); // Navigate to the Gender.js page
        }
    };

    const containerStyle = {
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "60px"
    };

    const sharedBoxStyle = {
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '400px', 
        height: '575px', 
        textAlign: 'center',
        fontFamily: '"Arial", sans-serif',
    };

    const sharedInputStyle = {
        width: "100%",
        padding: "12px",
        margin: "12px 0",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "16px"
    };

    return (
        <>
            <Helmet><title>Create Account</title></Helmet>
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
                    zIndex: 1000
                }}>
                    <img src={logo} alt="Logo" style={{ height: "40px", marginLeft: "10px" }} />
                </nav>
                <section style={sharedBoxStyle}>
                    <h2 style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>Create Account</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="fullName" style={{ textAlign: "left", display: "block", fontWeight: "bold", marginBottom: "4px" }}>Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            style={sharedInputStyle}
                        />
                        {errors.fullName && <span style={{ color: "red", fontSize: "12px" }}>{errors.fullName}</span>}

                        <label htmlFor="dob" style={{ textAlign: "left", display: "block", fontWeight: "bold", marginBottom: "4px" }}>Date of Birth</label>
                        <input
                            id="dob"
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            style={sharedInputStyle}
                        />
                        {errors.dob && <span style={{ color: "red", fontSize: "12px" }}>{errors.dob}</span>}

                        <label htmlFor="email" style={{ textAlign: "left", display: "block", fontWeight: "bold", marginBottom: "4px" }}>Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            style={sharedInputStyle}
                        />
                        {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>}

                        <label htmlFor="password" style={{ textAlign: "left", display: "block", fontWeight: "bold", marginBottom: "4px" }}>Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Create Password"
                            value={formData.password}
                            onChange={handleChange}
                            style={sharedInputStyle}
                        />
                        {errors.password && <span style={{ color: "red", fontSize: "12px" }}>{errors.password}</span>}

                        <button type="submit" style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "16px"
                        }}>Submit</button>
                    </form>
                    <p>Already have an account? <Link to="/">Log In</Link></p>
                </section>
            </div>
        </>
    );
};

export default CreateAccount;
