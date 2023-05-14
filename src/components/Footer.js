import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footerBit">
        <p>Thanks for checking out my website :{")"}</p>
        <p>roni wu © 2023</p>
      </div>
      <div class="contactSection">
        <a href="mailto:yy8wu@uwaterloo.ca">email</a>

        <a href="https://www.linkedin.com/in/roni-wu-908900140/">linkedin</a>

        <a href="https://github.com/solopeach">github</a>
      </div>
    </div>
  );
};
export default Footer;
