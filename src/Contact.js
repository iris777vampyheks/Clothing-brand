import React from "react";
import { AiFillFacebook } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSnapchatGhost } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import "./styles/modules/home/_contact.scss";

export const Contact = () => {
  return (
    <>
    <div className="contact-parent">
    <div className="first-contact pt-5">
<h1 className="text-center text-light cnt">CONTACT</h1>
      </div>

<div className="sec-2 d-flex justify-content-center align-items-center ">
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26594.860686998003!2d-7.656619267571538!3d33.570063743873945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2e9854fbd49%3A0xcb8dc82bd8575005!2sMa%C3%A2rif%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1690384567500!5m2!1sen!2sma"
      width="420"
      height="420"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="mt-2 me-3"
    ></iframe>
  </div>
  <div className="d-flex flex-column gap-1">
    <h3>Send us your message</h3>
    <input className="inp" type="text" placeholder="  Full Name" />
    <input className="inp" type="text" placeholder="  Phone Number" />
    <input className="inp" type="email" placeholder="  Email Address" />
    <textarea  className="msginput" placeholder="  Message" id="message " name="message" required></textarea>    
<button className="sendbtn">Send</button>
  </div>
</div>

{/* ///////// foooter */}
<div className="footer d-flex flex-row justify-content-evenly mt-5">
  <div className="flex-column text-center pt-3">
    <h6 className="font-weight-bold">GET IN TOUCH</h6>
    <p className="text-muted">Any question? Let us know in store at 7th floor 379 hudson</p>
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

<div className="d-flex align-items-center justify-content-center pt-1 ft">
<img width="48" height="48" src="https://img.icons8.com/fluency/48/visa.png" alt="visa"/>
<img width="48" height="48" src="https://img.icons8.com/emoji/48/credit-card-emoji.png" alt="credit-card-emoji"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/mastercard.png" alt="mastercard"/>
<img width="48" height="48" src="https://img.icons8.com/fluency/48/credit-card-front.png" alt="credit-card-front"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/discover.png" alt="discover"/>
</div>
<p className="text-center text-muted ft pb-1">&copy; Copyright. All rights reserved.</p>








      </div>
    </>
  );
};
