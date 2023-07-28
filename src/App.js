import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/Navigation";
import Product from "./Product";
import { Contact } from "./Contact";
import { OurProducts } from "./OurProducts";
import Favorie from "./Favorie";
import Register from "./Register";
import Login from "./Login";
import Cart from "./Cart";
export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourProducts" element={<OurProducts />} />
        <Route path="/favorie" element={<Favorie />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  );
};
