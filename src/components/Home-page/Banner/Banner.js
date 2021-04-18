import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import "./Banner.css";

const Banner = () => {
  return (
    <main className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="banner-left-content">
              <h1>
                Digital agency doing creative work
                <span className="dot-color">.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
                harum.
              </p>
              <button className="banner-btn-1">Book a Service</button>
              <button className="banner-btn-2">Learn More</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-right-content">
              <div className="video-icon">
                <FontAwesomeIcon icon={faPlayCircle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
