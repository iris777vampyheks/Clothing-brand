import React from "react";
import { AiFillFacebook } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSnapchatGhost } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import levi from "../../../src/assets/images/0004.webp"
import levi2 from "../../../src/assets/images/prodd.webp"
import levi3 from "../../../src/assets/images/prod.jpg"
import { OurProducts } from "../../OurProducts";
export const Home = () => {
  return (
    <>
    <div className="home">
    <div className="first-sec d-flex align-items-center flex-column">
    <h1 className="header1 text-light border-bottom border-5 mt-4">LEATHER BAGS</h1>
    <h5 className="text-light">new collection</h5>
    <button className="btn-shop">Shop Now</button>
</div>
{/* second section */}
<div className="section-2">
<div className="levis3 mt-3">
<div><img className="imglevi" src={levi} alt="" />
<button className="diva">COMING SOON</button></div>

<div><img className="imglevi" src={levi2} alt="" />
<button className="diva">COMING SOON</button></div>

<div className="d-flex"><img className="imglevi" src={levi3} alt="" />
<button className="diva">COMING SOON</button></div>
</div>
</div>
{/* third section */}
<h1 className="text-center mt-5"> <b><a className="text-decoration-none text-dark"  href="/product">CLICK HERE TO OUR PRODUCTS</a></b></h1>

<OurProducts />


{/* forth section */}

<div className="woman d-flex align-items-center justify-content-center flex-column">
  <h3 className="text-center text-light pt-2">The beauty</h3>
  <h1 className="text-center text-light">LOOKBOOK</h1>
</div>


{/* fifth section */}
<div className=" d-flex flex-row justify-content-evenly mt-3">
  <div className="flex-column text-center">
    <h6 className="font-weight-bold">GET IN TOUCH</h6>
    <p className="text-muted">Any question? Let us know in store at 7th floor 379 hudson</p>
    <p className="text-muted">NY 1021 or call us on 29642547</p>
<div className="icons">
<AiFillFacebook/>
<AiFillInstagram/>
<BsPinterest />
<FaSnapchatGhost/>
<AiFillYoutube/>
</div>
</div>

  <div className="flex-column text-center">
    <h6 className="font-weight-bold">LINKS</h6>
    <p className="text-muted">search</p>
    <p className="text-muted">about us</p>
    <p className="text-muted">contact us</p>
    <p className="text-muted">returns</p>
  </div>

  <div className="flex-column text-center">
    <h6 className="font-weight-bold">LINKS</h6>
    <p className="text-muted">search</p>
    <p className="text-muted">about us</p>
    <p className="text-muted">contact us</p>
    <p className="text-muted">returns</p>
  </div>
</div>

{/* FOOTER */}

<div className="d-flex align-items-center justify-content-center mt-2 ">
<img width="48" height="48" src="https://img.icons8.com/fluency/48/visa.png" alt="visa"/>
<img width="48" height="48" src="https://img.icons8.com/emoji/48/credit-card-emoji.png" alt="credit-card-emoji"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/mastercard.png" alt="mastercard"/>
<img width="48" height="48" src="https://img.icons8.com/fluency/48/credit-card-front.png" alt="credit-card-front"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/discover.png" alt="discover"/>
</div>
<p className="text-center text-muted">&copy; Copyright. All rights reserved.</p>














</div>
    </>
  );
};
