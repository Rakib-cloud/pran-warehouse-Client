import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="rounded-top mt-5 d-flex flex-column justify-content-around text center bg-dark text-light w-100" style={{height:'150px'}}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mx-5">
          <div className="d-flex align-items-center mt-3">
            <img src="https://i.ibb.co/xDZFjpY/logo.png" height="36px" alt="logo" />
            <span className="ms-2 fs-6">PRAN Dealer Inventory</span>
          </div>
          <div className="">
            <BsFacebook className="mx-2 " style={{width:'24px', height:'24px'}} />
            <BsYoutube className="mx-2 " style={{width:'24px', height:'24px'}} />
            <BsInstagram className="mx-2 " style={{width:'24px', height:'24px'}} />
          </div>
        </div>
        <hr style={{width:'95%', margin:'0 auto'}} />
        <div className="text-center mb-3">
          &copy; {new Date().getFullYear()}. <span style={{ color: "tomato" }}>PRAN Dealer Inventory</span>. All rights reserved.
        </div>
    </div>
  );
};

export default Footer;
