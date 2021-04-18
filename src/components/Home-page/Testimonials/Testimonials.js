import React from "react";
import UserImg from "../../../images/testimonial2.jpg";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.css";

const testimonialData = [
  {
    name: "Mike Hardson",
    position: "Director",
    img: UserImg,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed numquam incidunt deleniti culpa optio.",
  },
  {
    name: "Mike Hardson",
    position: "Director",
    img: UserImg,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elitfd. Assumenda sed numquam incidunt deleniti culpa optio.",
  },
  {
    name: "Mike Hardson",
    position: "Director",
    img: UserImg,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed numquam incidunt deleniti culpa optio.",
  },
];
const Testimonials = () => {
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
            {testimonialData.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
