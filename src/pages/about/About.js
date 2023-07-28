import React from "react";
import { AiFillFacebook } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSnapchatGhost } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import hanger from "../../../src/assets/images/about.jpg"
export const About = () => {
  return (
    <>
    <div className="parentAbout">
    <div className="about">
    <h1 className="text-center text-light abt ">ABOUT</h1>
      </div>

      <div className=" mt-3 ourStory d-flex flex-row align-items-center justify-content-center gap-3"> 
<div>
<img className="hanger" src={hanger} alt="" />
</div>

<div className="story mb-3">
  <h2>Our story</h2>
  <div className="text-container">
    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad <br /> eligendi aliquid eaque harum qui, doloremque maiores sed voluptatem earum <br /> id labore dolor ipsum odio deleniti veritatis! Ratione dicta dolores remque quae <br /> minima fugit corrupti iure fugiat voluptas beatae ad, repellat dolore neque facilis, <br /> repellendus tenetur commodi iste! Similique saepe eos repudiandae quaerat amld <br />consequatur in fuga enim voluptas quia at animi nihil, sapiente atque a expeita offici<br /> accusamus eius ejhsh zj zubdguz ziunfun uzjhai ndhnlao logtol ipsum dolor sit amet<br />tur adipisicing elit. Consequuntur bunoi oui dema</p>
    <hr className="vertical-line" />
    <p className="text-muted pt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, quae? delapoi <br /> javasj hoiu kolokiu beiory soirtyhd jdujz Lorem ipsum dolor sit amet consectetur adi</p>
  </div>
  <p className="text-muted">- steve job's</p>
</div>
      </div>


<div className="gray mt-3">
      <div className="fifth-sec d-flex flex-row justify-content-evenly pt-3">
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

<div className="d-flex align-items-center justify-content-center mt-1">
<img width="48" height="48" src="https://img.icons8.com/fluency/48/visa.png" alt="visa"/>
<img width="48" height="48" src="https://img.icons8.com/emoji/48/credit-card-emoji.png" alt="credit-card-emoji"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/mastercard.png" alt="mastercard"/>
<img width="48" height="48" src="https://img.icons8.com/fluency/48/credit-card-front.png" alt="credit-card-front"/>
<img width="48" height="48" src="https://img.icons8.com/color/48/discover.png" alt="discover"/>
</div>
<p className="text-center text-muted">&copy; Copyright. All rights reserved.</p>

</div>



</div>
    </>
  );
};
