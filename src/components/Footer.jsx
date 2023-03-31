import React from "react";
import "../styles/footer.css";
// import { FaInstagram } from "react-icons/fa";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import unsplash from "../images/unsplash.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <h2>Let's Work Together</h2>
        <a href="#">Download Resume</a>
      </div>
      <div className="icons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={unsplash} alt="" />
      </div>
    </div>
  );
}

export default Footer;
