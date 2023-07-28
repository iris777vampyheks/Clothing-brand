import React, { useState } from "react";
import { AiFillFacebook } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSnapchatGhost } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import "./styles/modules/home/_product.scss";
//myimages: 
import product1 from "./assets/images/prodd.webp";
import product2 from "./assets/images/product.webp";
import product3 from "./assets/images/product2.webp";
import product4 from "./assets/images/555.jpg"
import product5 from "./assets/images/444.webp"
import product6 from "./assets/images/cargo.webp";
import product8 from "./assets/images/str.jpg"
import product9 from "./assets/images/0000.webp"
import product10 from "./assets/images/best.webp"
import product11 from "./assets/images/11.jpg"
import product12 from "./assets/images/2023.jpg"
import product13 from "./assets/images/13.webp"
import product14 from "./assets/images/product14.jpg"
import product15 from "./assets/images/rihanna.jpg"
import product16 from "./assets/images/street.jpeg"
import product17 from "./assets/images/acce1.webp"
import product18 from "./assets/images/acce2.webp"
import product19 from "./assets/images/acce3webp.webp"

const Product = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const products = [
        { id: 1, name: 'Jacket no.1', price: 76.52, image: product1, category: 'Women' },
        { id: 2, name: 'Oversized blue', price: 345.25, image: product2, category: 'Women' },
        { id: 3, name: 'Orange Cargo', price: 541.94, image: product3, category: 'Kids' },
        { id: 4, name: 'Cargo pant', price: 658.24, image: product4, category: 'Men' },
        { id: 5, name: 'Fashion 2023', price: 724.89, image: product5, category: 'Men' },
        { id: 6, name: 'Designed well', price: 50.47, image: product6, category: 'Women' },
        { id: 7, name: 'Fashioned woman', price: 57.86, image: product8, category: 'Women' },
        { id: 8, name: 'Dressed well', price: 230.0, image: product9, category: 'Women' },
        { id: 9, name: 'Summer dress', price: 890.0, image: product10, category: 'Women' },
        { id: 10, name: 'T-shirt latest', price: 780.0, image: product11, category: 'Men' },
        { id: 11, name: 'Oversize tattooed', price: 520.24, image: product12, category: 'Kids' },
        { id: 12, name: 'T-shirt tendy', price: 586.25, image: product13, category: 'Men' },
        { id: 13, name: 'Outfit latest', price: 897.24, image: product14, category: 'Women' },
        { id: 14, name: 'Orange outfit', price: 983.38, image: product15, category: 'Women' },
        { id: 15, name: 'Model 2023', price: 50.55, image: product16, category: 'Women' },
        { id: 16, name: 'Golden bracelet', price: 8997.24, image: product17, category: 'Accessories' },
        { id: 17, name: 'Golden acceccorie', price: 9835.38, image: product18, category: 'Accessories' },
        { id: 18, name: 'Gold necklace', price: 8057.55, image: product19, category: 'Accessories' },
    ];

    const filteredProducts = products.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
        return nameMatch && categoryMatch;
    });
    

    // Split products l 3
    const rows = [];
    for (let i = 0; i < filteredProducts.length; i += 3) {
        rows.push(filteredProducts.slice(i, i + 3));
    }

    return (
        <div className="product-page">
            <div className="productParent">
                <div className="firstProduct">
                    <h1 className="text-light text-center head pt-5">PRODUCT</h1>
                </div>
            </div>

            <div>
                <div className="d-flex flex-column align-items-start  justify-content-lg-start ms-4 position-absolute ">
                        <h4 className="fw-bolder cate">Categories</h4>
                        <p className="cate" onClick={() => handleCategoryClick('All')}>All</p>
                    <p className="cate" onClick={() => handleCategoryClick('Women')}>Women</p>
                    <p className="cate" onClick={() => handleCategoryClick('Men')}>Men</p>
                    <p className="cate" onClick={() => handleCategoryClick('Kids')}>Kids</p>
                    <p className="cate" onClick={() => handleCategoryClick('Accessories')}>Accessories</p>
                        <div className="search-container">
                            <h4 className="fw-bolder cate">Filter</h4>
                            <input type="text" placeholder=" Search products..." className="inputt" value={searchQuery} onChange={handleSearchChange} />
                            <FaSearch className="search-icon" />
                        </div>
                </div> 

                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="d-flex align-items-center justify-content-center gap-2 mt-5 ms-7">
                        {row.map((product) => (
                            <div key={product.id} className="product-card">
                                <img className="img-pro" src={product.image} alt="" />
                                <p className="product-name">{product.name}</p>
                                <p className="product-price">${product.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="foot d-flex flex-row justify-content-evenly mt-5 position-fixed">
                <div className="flex-column text-center pt-3">
                    <h6 className="font-weight-bold">GET IN TOUCH</h6>
                    <p className="text-muted">Any question? Let us know in store at 7th floor 379 Hudson</p>
                    <p className="text-muted">NY 1021 or call us on 29642547</p>
                    <div className="icons-black">
                        <AiFillFacebook />
                        <AiFillInstagram />
                        <BsPinterest />
                        <FaSnapchatGhost />
                        <AiFillYoutube />
                    </div>
                </div>

                <div className="flex-column text-center pt-3">
                    <h6 className="font-weight-bold">LINKS</h6>
                    <p className="text-muted">search</p>
                    <p className="text-muted">about us</p>
                    <p className="text-muted">contact us</p>
                    <p className="text-muted">returns</p>
                </div>

                <div className="flex-column text-center pt-3">
                    <h6 className="font-weight-bold">LINKS</h6>
                    <p className="text-muted">search</p>
                    <p className="text-muted">about us</p>
                    <p className="text-muted">contact us</p>
                    <p className="text-muted">returns</p>
                </div>
            </div>
        </div>
    );
};

export default Product;