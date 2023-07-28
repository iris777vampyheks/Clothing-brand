
import "./styles/modules/home/_favorie.scss";
import tshirt from "./assets/images/product.webp";

const Favorie = () => {
    return (
        <div className="productParent">
        <div className="firstProduct"> <h1 className=" text-light text-center head pt-5">COUP DE COEUR</h1></div>
<br />

            
                    <div className=" ms-4 table-header">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Add</p>
                    </div>
                    <div className=" ms-4 favorie-section">
                <div className="productParent">
                    <div className="favorie">
                        <img className="tshirt" src={tshirt} alt="" />
                        <p>Men T-shirt</p>
                        <p>$36</p>
                        <div className="quantity-control">
                            <button>-</button>
                            <h3>1</h3>
                            <button>+</button>
                        </div>
                        <p>$36</p>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorie;
