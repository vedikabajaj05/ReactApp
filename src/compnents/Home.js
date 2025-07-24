import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/centum.png';
import background from 'C:/Users/vedik/OneDrive/Desktop/ReactApp-main/ReactApp-main/src/image/background.jpg';

const Home = () => {
    const navigate = useNavigate();  // Hook to navigate to another route

    const homeStyle = {
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '60px',
    };

    const blurBackgroundStyle = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        zIndex: -1,
    };

    const sharedBoxStyle = {
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '400px', // Same width for both boxes
        textAlign: 'center',
        fontFamily: '"Arial", sans-serif',
    };

    const titleStyle = {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        margin: '12px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const labelStyle = {
        textAlign: 'left',
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '6px',
        fontSize: '14px',
        color: '#333',
    };

    const navStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    };

    const handleLogin = () => {
        // Simply navigate to /gender on login
        navigate("/gender");
    };

    return (
        <Fragment>
            <Helmet><title>Diagnosis App</title></Helmet>
            <div id="home" style={homeStyle}>
                <div style={blurBackgroundStyle}></div>
                <nav style={navStyle}>
                    <img src={logo} alt="Logo" style={{ height: "40px", marginLeft: "10px" }} />
                </nav>
                <section>
                    <div style={sharedBoxStyle}>
                        <div style={titleStyle}>Log In</div>
                        <label htmlFor="email" style={labelStyle}>Email:</label>
                        <input id="email" type="email" placeholder="Enter your email" style={inputStyle} />

                        <label htmlFor="password" style={labelStyle}>Password:</label>
                        <input id="password" type="password" placeholder="Enter your password" style={inputStyle} />

                        <button style={buttonStyle} onClick={handleLogin}>Login</button>
                        <p>Don't have an account? <Link to="/create-account">Sign Up</Link></p>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default Home;
