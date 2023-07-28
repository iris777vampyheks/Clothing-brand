import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/modules/home/_login.scss";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Registered successfully!");
    };
    

    return (
        <div className="loginPage">
            <div className="d-flex flex-column gap-1">
                <h1 className="title ms-2 mt-3 text-light">Register :</h1>
                <input
                    className="input ms-2"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="  Email"
                    required
                />
                <input
                    className="input ms-2"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="  Password"
                    required
                />
                <p className="ms-2 text-light">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
                <button className="ms-2 btn text-light" onClick={handleRegister}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;
