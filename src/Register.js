import React, { Component } from "react";
import "./styles/modules/home/_login.scss";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleRegister = () => {
        alert("Registered successfully!");
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
                <h1 className="title ms-2 mt-3 text-light">Register :</h1>
                <input
                    className="input ms-2"
                    type="email"
                    value={email}
                    onChange={this.handleChangeEmail}
                    placeholder="  Email"
                    required
                />
                <input
                    className="input ms-2"
                    type="password"
                    value={password}
                    onChange={this.handleChangePassword}
                    placeholder="  Password"
                    required
                />
                <p className="ms-2 text-light">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
                <button className="ms-2 btn text-light" onClick={this.handleRegister}>
                    Register
                </button>
            </div>
            </div>
        );
    }
}

export default Register;
