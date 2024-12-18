import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import ContentWrapper from "../contentwrapper/ContentWrapper";
import tmdbLogo from "../../assets/images/tmdb-logo-copy-black.svg";

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
          Powered by
        </div>
        <div className="poweredBy">
        <div className="tmdb">
         <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank"><img src={tmdbLogo} alt="powered by TMDB" title="Powered by TMDB"  /></a> 
        </div>
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
