import React, { useState } from "react";
import "./FooterComponent.css";
import africa from "../../assets/Picture5.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-scroll";
function FooterComponent() {
    const currentDate = new Date().getFullYear();
const dynamicInfo = [
  "Welcome to AkiliTechAfrica!",
  "Stay updated with our latest courses",
  "Explore our coding, design, and marketing courses",
  "Join our community of tech enthusiasts",
  "Contact us for custom solutions",
];
const getRandomIndex = () => Math.floor(Math.random() * dynamicInfo.length);
    return (
      <div className="footer">
        <img className="footer_img" src={africa} alt="africa color" />
        <h1 className="footer_heading">Akili Tech Africa</h1>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="join_btn"
          to="contacts"
        >
          Join Us
        </Link>
        <div className="social_media">
          <a className="social_icons" href="">
            <InstagramIcon />
          </a>
          <a className="social_icons" href="">
            <FacebookIcon />
          </a>
          <a className="social_icons" href="">
            <XIcon />
          </a>
          <a className="social_icons" href="">
            <WhatsAppIcon />
          </a>
        </div>
        <footer>
          <p className="footer_copywrite">
            &copy; {currentDate} AkiliTechAfrica. All rights reserved.
            {dynamicInfo[getRandomIndex()]}
          </p>
        </footer>
      </div>
    );
}

export default FooterComponent;
