import React from "react";
import { NavLink } from "react-router-dom";
import { GrFavorite } from 'react-icons/gr';
import { FaShoppingCart } from 'react-icons/fa';

export const Navigation = () => {
    return (
        <nav className="navbar">
            <h1 className="header ms-2">
                Fash <span style={{ color: "red" }}>.</span>
            </h1>
            <div className="navdiv">
                <div className="nav-links">
                    <NavLink className="nav-link" activeClassName="active" exact to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/product">
                        Product
                    </NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/about">
                        About
                    </NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/contact">
                        Contact
                    </NavLink>
                </div>

                <div className="auth-buttons">
                    <NavLink className="auth-button login" activeClassName="active" to="/login">
                        Login
                    </NavLink>
                    <NavLink className="auth-button register" activeClassName="active" to="/register">
                        Register
                    </NavLink>
                </div>
            </div>

            <div className="icon-links me-2">
                <NavLink className="icon-link" activeClassName="active" to="/favorie">
                    <GrFavorite />
                </NavLink>
                <NavLink className="icon-link" activeClassName="active" to="/cart">
                    <FaShoppingCart />
                </NavLink>
            </div>
        </nav>
    );
};
