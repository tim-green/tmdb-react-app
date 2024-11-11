import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import ContentWrapper from "../contentwrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">Terms Of Use</li>
        </ul>
        <div className="infoText">
          This is a movie info app where you can browse movies,tv shows so
          please feel free to use the search bar for the movies you want to
          review
        </div>
        <div className="socialIcons">
          {/* <span>Tough Guys in Sweet Pants:</span> */}
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaXTwitter />
          </span>
          <span className="icon">
            <FaYoutube />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
