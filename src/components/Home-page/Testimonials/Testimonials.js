import React, { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.css";


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://secure-meadow-94796.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  return (
    <section className="testimonial">
      <div className="common-title">
        <p>Testimonials</p>
        <h1>
          Our Lovely Clients Review<span className="dot-color">.</span>
        </h1>
      </div>
      <div className="testimonail-main">
        <div className="container">
          <div className="row">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial._id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
