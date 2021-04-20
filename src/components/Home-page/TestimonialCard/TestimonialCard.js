import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  const { reviewerName, reviewerPosition, imageURL, reviewText } = testimonial;
  return (
    <div className="col-md-6">
      <div className="testimonial-card">
        <div className="testimonial-top">
          <div className="testimonial-top-left">
            <img src={imageURL} alt="" />
            <div className="testimonial-provider">
              <h5>{reviewerName}</h5>
              <p>{reviewerPosition}</p>
            </div>
          </div>
          <div className="testimonial-top-right">
            <div className="testi-icon">“</div>
          </div>
        </div>
        <div className="testimonial-bottom">
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
