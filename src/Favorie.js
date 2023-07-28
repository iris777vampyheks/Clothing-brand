import React, { useState } from "react";
import "./styles/modules/home/_favorie.scss";
import tshirt from "./assets/images/product.webp";

const Favorie = () => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="productParent">
            <div className="firstProduct">
                <h1 className=" text-light text-center head pt-5">COUP DE COEUR</h1>
            </div>
            <br />
            <h2 className="text-center font-weight-bold mt-1">Favorie</h2>
            <div className="ms-4 table-header pt-1">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Add</p>
            </div>
            <div className="ms-4 favorie-section">
                <div className="productParent">
                    <div className="favorie">
                        <img className="tshirt" src={tshirt} alt="" />
                        <p>Men T-shirt</p>
                        <p>$36</p>
                        <div className="quantity-control">
                            
                            <button onClick={decrease}>-</button>
                            <h3>{quantity}</h3>
                        
                            <button onClick={increase}>+</button>
                        </div>
                        <p>${36 * quantity}</p>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorie;
