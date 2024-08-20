// src/App.js
import React from 'react';
import './login.css';
import googlelogo from './pngwing.com.png';

function Login({ onLogin }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate a successful login process
        onLogin();
    };

    return (
        <div className="login">
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <span>M</span>  REACHINBOX</div>
            </header>

            {/* login-card */}
            <div className="login-card">
                <div className="div1">
                    <h2>Create a new account</h2>
                    <button className="google-signup" onClick={handleSubmit}>
                        <img src={googlelogo} alt="Google logo" />
                        Sign Up with Google
                    </button>
                </div>

                <div className="div2">
                    <button className="create-account">Create an Account</button>
                    <p>Already have an account? <a href="/">Sign In</a></p>
                </div>
            </div>


            <footer className="footer">
                &copy; 2023 Reachinbox. All rights reserved.
            </footer>
        </div>
    );
}

export default Login;