import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <h3 style={{ marginBottom: "15px" }}>
          Made With <span style={{ color: "var(--pink)" }}>&#9829;</span> By
          Mustafa Tantawy
        </h3>
        <div className="socialIcons">
          <a
            className="icon"
            href="https://www.facebook.com/mostafa.tantawy.921/"
            style={{ textDecoration: "none", color: "#fff" }}
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/dev_moustafa/"
            style={{ textDecoration: "none", color: "#fff" }}
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="icon"
            href="https://x.com/Dev_Mustafa1/"
            style={{ textDecoration: "none", color: "#fff" }}
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/mustafa-tantawy/"
            style={{ textDecoration: "none", color: "#fff" }}
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
