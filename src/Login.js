import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleLogin = () => {
        const { email, password } = this.state;
        if (email === "user@example.com" && password === "password") {
            alert("Login successful!");
        } else {
            alert("Invalid email or password");
        }
    };

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    };

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div className="loginPage">
            <div className="d-flex flex-column gap-1">
                <h1 className="title text-light ms-2 mt-3">Login :</h1>
                <input
                    className="input ms-2"
                    type="email"
                    value={email}
                    onChange={this.handleChangeEmail}
                    placeholder="  Email"
                />
                <input
                    className="input ms-2"
                    type="password"
                    value={password}
                    onChange={this.handleChangePassword}
                    placeholder="  Password"
                />
                <p className="ms-2 text-light">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
                <button className=" text-light ms-2 btn" onClick={this.handleLogin}>
                    Login
                </button>
            </div>
            </div>
        );
    }
}

export default Login;
