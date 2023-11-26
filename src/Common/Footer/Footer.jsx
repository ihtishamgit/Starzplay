import React from "react";
import { CustomCopyrightIcon } from "../../Common/MuiStyles/Styles";
import {
  FacebookICon,
  TwitterICon,
  InstagramICon,
  PinterestICon,
} from "../../Common/Icons";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="starplayz-offering-list">
        <li>Why STARZPLAY?</li>
        <li>Help Center</li>
        <li>Contact us</li>
        <li>Partner with us</li>
        <li>Comapny</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <div className="d-flex justify-content-start copyright-container">
        <span>
          Copyright
          <CustomCopyrightIcon /> 2023 STARZPLAY.All right reserved
        </span>
      </div>
      <div className="media-container d-flex align-items-center">
        <FacebookICon />
        <TwitterICon />
        <InstagramICon />
        <PinterestICon />
        <button className="footer-btn">
          <div className="d-flex justify-content-center align-items-center">
            {" "}
            <i class="fa fa-facebook px-1" aria-hidden="true"></i>
            <div className="d-flex flex-col justify-content-start align-items-start">
              <small>Download on the </small>{" "}
              <span className="media-btn-text">App Store </span>{" "}
            </div>
          </div>{" "}
        </button>
        <button className="footer-btn">
          <div className="d-flex justify-content-center align-items-center">
            {" "}
            <i class="fa fa-facebook px-1" aria-hidden="true"></i>
            <div className="d-flex flex-col justify-content-start align-items-start">
              <small>Get IT ON </small>{" "}
              <span className="media-btn-text">Google Play </span>{" "}
            </div>
          </div>{" "}
        </button>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
