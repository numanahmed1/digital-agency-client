import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  const { name, position, img, text } = testimonial;
  return (
    <div className="col-md-6">
      <div className="testimonial-card">
        <div className="testimonial-top">
          <div className="testimonial-top-left">
            <img src={img} alt="" />
            <div className="testimonial-provider">
              <h5>{name}</h5>
              <p>{position}</p>
            </div>
          </div>
          <div className="testimonial-top-right">
            <div className="testi-icon">“</div>
          </div>
        </div>
        <div className="testimonial-bottom">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
