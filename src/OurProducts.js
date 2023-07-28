import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { GrFavorite } from "react-icons/gr";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import "./styles/modules/home/_ourProducts.scss";
import product1 from "./assets/images/prodd.webp";
import product2 from "./assets/images/product.webp";
import product3 from "./assets/images/product2.webp";
import product4 from "./assets/images/2023.jpg"
import product5 from "./assets/images/product4.jpg";
import product6 from "./assets/images/guuccii.jpg"
import product8 from "./assets/images/00-promo-hailey-bieber.webp"
import product9 from "./assets/images/street.jpeg"
import product10 from "./assets/images/10_.jpg"
import product11 from "./assets/images/carg.jpg"
import product12 from "./assets/images/sada.jpg"
import product13 from "./assets/images/prod.jpg"
import product14 from "./assets/images/gettyimages-1675350754.jpg"
import product15 from "./assets/images/asap.jpeg"
import product16 from "./assets/images/streetstyle-blazer-pink.jpg"
import product17 from "./assets/images/gucci-us.webp"

export const OurProducts = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };
    return (
        <div className="ourProducts">
            <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
                <TabList className="tab-list">
                    <Tab className={selectedTab === 0 ? "tab active" : "tab"}>Best seller</Tab>
                    <Tab className={selectedTab === 1 ? "tab active" : "tab"}>New</Tab>
                    <Tab className={selectedTab === 2 ? "tab active" : "tab"}>Sale</Tab>
                    <Tab className={selectedTab === 3 ? "tab active" : "tab"}>Old</Tab>
                </TabList>


                <TabPanel>
                    <div className="products1 d-flex flex-row align-items-center gap-2 justify-content-center mt-2">
                        {selectedProduct ? (
                            <div className="centered-pic-container">
                                <img className="product" src={selectedProduct.image} alt={selectedProduct.name} />
                                <button className="add-to-cart-button ms-2 mb-2" onClick={() => handleAddToCart(selectedProduct)}>
                                    <a className="text-decoration-none text-dark" href="/cart">Add to Cart </a>
                                </button>
                                <NavLink className="icon-link pt-1" activeClassName="active" to="/favorie">
                                    <GrFavorite className=" favorite-icon" />
                                </NavLink>
                            </div>
                        ) : (
                            <>
                                <div onClick={() => handleProductClick({ image: product1, name: "Jacket 2023", price: "524.69£" })}>
                                    <img className="product mb-1" src={product1} alt="Jacket 2023" />
                                    <p>Jacket 2023 <br />524.69£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product2, name: "Cargo pant", price: "714.79£" })}>
                                    <img className="product mb-1" src={product2} alt="Cargo pant" />
                                    <p>Cargo pant <br />714.79£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product3, name: "Orange pant", price: "634.25£" })}>
                                    <img className="product mb-1" src={product3} alt="Orange pant" />
                                    <p>Orange pant <br />634.25£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product4, name: "Beige jacket and pant", price: "309.99£" })}>
                                    <img className="product mb-1" src={product4} alt="Beige jacket and pant" />
                                    <p>
                                        Beige jacket and pant <br /> <span className="discounted-price">309.99£</span>{" "}
                                        <span className="originalprice">478.99£</span>{" "}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </TabPanel>


                <TabPanel>
                <div className="products1 d-flex flex-row align-items-center gap-2 justify-content-center mt-2">
                        {selectedProduct ? (
                            <div className="centered-pic-container">
                                <img className="product" src={selectedProduct.image} alt={selectedProduct.name} />
                                <button className="add-to-cart-button ms-2 mb-2" onClick={() => handleAddToCart(selectedProduct)}>
                                    <a className="text-decoration-none text-dark" href="/cart">Add to Cart </a>
                                </button>
                                <NavLink className="icon-link pt-1" activeClassName="active" to="/favorie">
                                    <GrFavorite className=" favorite-icon" />
                                </NavLink>
                            </div>
                        ) : (
                            <>
                                <div onClick={() => handleProductClick({ image: product5, name: "Fashioned 2024", price: "524.69£" })}>
                                    <img className="product mb-1" src={product5} alt="Fashioned 2024" />
                                    <p>Fashioned 2024 <br />524.69£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product6, name: "Classy pants", price: "714.79£" })}>
                                    <img className="product mb-1" src={product6} alt="Classy pants" />
                                    <p>Classy pants <br />714.79£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product8, name: "Spring wearing", price: "634.25£" })}>
                                    <img className="product mb-1" src={product8} alt="Spring wearing" />
                                    <p>Spring wearing <br />634.25£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product9, name: "Trend to wear", price: "478.99£" })}>
                                    <img className="product mb-1" src={product9} alt="Trend to wear" />
                                    <p>
                                        Trend to wear <br />
                                        <span className="original-price">478.99£</span>
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </TabPanel>

                <TabPanel>
                <div className="products1 d-flex flex-row align-items-center gap-2 justify-content-center mt-2">
                        {selectedProduct ? (
                            <div className="centered-pic-container">
                                <img className="product" src={selectedProduct.image} alt={selectedProduct.name} />
                                <button className="add-to-cart-button ms-2 mb-2" onClick={() => handleAddToCart(selectedProduct)}>
                                    <a className="text-decoration-none text-dark" href="/cart">Add to Cart </a>
                                </button>
                                <NavLink className="icon-link pt-1" activeClassName="active" to="/favorie">
                                    <GrFavorite className=" favorite-icon" />
                                </NavLink>
                            </div>
                        ) : (
                            <>
                                <div onClick={() => handleProductClick({ image: product14, name: "Designed jackets", price: "524.69£" })}>
                                    <img className="product mb-1" src={product14} alt="Designed jackets" />
                                    <p>Designed jackets <br />524.69£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product15, name: "Summer outfit", price: "714.79£" })}>
                                    <img className="product mb-1" src={product15} alt="Summer outfit" />
                                    <p>Summer outfit <br />714.79£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product16, name: "Pants for summer", price: "634.25£" })}>
                                    <img className="product mb-1" src={product16} alt="Pants for summer" />
                                    <p>Pants for summer <br />634.25£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product17, name: "Fashioned 2023", price: "309.99£" })}>
                                    <img className="product mb-1" src={product17} alt="Fashioned 2023" />
                                    <p>
                                        Fashioned 2023 <br /> <span className="original-price">309.99£</span>
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </TabPanel>

                <TabPanel>
                <div className="products1 d-flex flex-row align-items-center gap-2 justify-content-center mt-2">
                        {selectedProduct ? (
                            <div className="centered-pic-container">
                                <img className="product" src={selectedProduct.image} alt={selectedProduct.name} />
                                <button className="add-to-cart-button ms-2 mb-2" onClick={() => handleAddToCart(selectedProduct)}>
                                    <a className="text-decoration-none text-dark" href="/cart">Add to Cart </a>
                                </button>
                                <NavLink className="icon-link pt-1" activeClassName="active" to="/favorie">
                                    <GrFavorite className=" favorite-icon" />
                                </NavLink>
                            </div>
                        ) : (
                            <>
                                <div onClick={() => handleProductClick({ image: product10, name: "Clothing style", price: "524.69£" })}>
                                    <img className="product mb-1" src={product10} alt="Clothing style" />
                                    <p>Clothing style <br />524.69£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product11, name: "Latest trend", price: "724.79£" })}>
                                    <img className="product mb-1" src={product11} alt="Latest trend" />
                                    <p>Latest trend <br />724.79£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product12, name: "Dressed well", price: "634.25£" })}>
                                    <img className="product mb-1" src={product12} alt="Dressed well" />
                                    <p>Dressed well <br />634.25£</p>
                                </div>
                                <div onClick={() => handleProductClick({ image: product13, name: "Fashioned dress", price: "309.99£" })}>
                                    <img className="product mb-1" src={product13} alt="Fashioned dress" />
                                    <p>
                                        Fashioned dress <br /> <span className="discounted-price">309.99£</span>{" "}
                                        <span className="originalprice">478.99£</span>{" "}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                    <Cart cartItems={cartItems} />
                </TabPanel>

            </Tabs>
            
        </div>
    );
};
