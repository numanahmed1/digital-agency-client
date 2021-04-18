import React from "react";
import UI from "../../../images/ui.png";
import APP from "../../../images/app.png";
import CONTENT from "../../../images/write.png";
import DIGITAL from "../../../images/digital-marketing.png";
import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard";

const servicesData = [
  {
    name: "UI / UX Designing",
    icon: UI,
    price: 230,
  },
  {
    name: "App Development",
    icon: APP,
    price: 530,
  },
  {
    name: "SEO & Content Writing",
    icon: CONTENT,
    price: 430,
  },
  {
    name: "Digital Marketing",
    icon: DIGITAL,
    price: 630,
  },
];
const Services = () => {
  return (
    <section className="services">
      <div className="common-title">
        <p>Services</p>

        <h1>
          WHAT WE’RE OFFERING<span className="dot-color">.</span>
        </h1>
      </div>

      <div className="container service-main">
        <div className="row">
          {servicesData.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
