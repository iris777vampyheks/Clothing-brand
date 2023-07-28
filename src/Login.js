import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/modules/home/_login.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
        } else {
            alert("Invalid email or password");
        }
    };


    return (
        <div className="loginPage">
            <div className="d-flex flex-column gap-1">
                <h1 className="title text-light ms-2 mt-3">Login :</h1>
                <input
                    className="input ms-2"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="  Email"
                />
                <input
                    className="input ms-2"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="  Password"
                />
                <p className="ms-2 text-light">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
                <button className="text-light ms-2 btn" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
