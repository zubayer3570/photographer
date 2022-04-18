import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <small>venus studio Ⓒ {year}</small>
    </div>
  );
};

export default Footer;
