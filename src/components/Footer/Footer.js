import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";
import appstore from '../../images/app-store.png';
import playstore from '../../images/play-store.png'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <Link className="logo footer-logo" to="/">
              Digital <span>Agency</span>
            </Link>
            <p className="footer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis laudantium iure eum, magnam debitis distinctio odio
              maxime optio animi, vel, quos aut. Voluptate, ex! Impedit.
            </p>
            <div className="social-icons">
              <div className="facebook icon">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
              <div className="twitter icon">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </div>
              <div className="instragram icon">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <div className="youtube icon">
                <FontAwesomeIcon icon={faYoutubeSquare} />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 d-flex justify-content-lg-center">
             <div className="footer-links">
             <h3>Services</h3>
              <ul>
                  <li>App Development</li>
                  <li>Web Development</li>
                  <li>SEO & Content Writing</li>
                  <li>UI/UX Designing</li>
                  <li>Graphics Designing</li>
              </ul>
             </div>
          </div>
          <div className="col-md-6 col-lg-2 d-flex justify-content-lg-center">
              <div className="footer-links">
              <h3>Quick Link</h3>
              <ul>
                  <li>Home</li>
                  <li>Testimonials</li>
                  <li>Pricing</li>
                  <li>Team</li>
                  <li>About</li>
              </ul>
              </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex justify-content-lg-center">
              <div className="footer-links">
              <h3>Download Link</h3>
              <div className="download-btn">
                  <img src={appstore} alt=""/>
                  <img src={playstore} alt=""/>
              </div>

              </div>
              
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
