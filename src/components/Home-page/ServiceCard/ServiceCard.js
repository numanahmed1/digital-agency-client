import React from "react";
import { useHistory } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, iconURL, serviceText, servicePrice } = service;
  const history = useHistory();
  const handlePurchase = (serviceId) => {
    const url = `dashboard/orders/${serviceId}`;
    history.push(url);
  };
  return (
    <div className="col-md-3">
      <div onClick={() => handlePurchase(_id)} className="service-card">
        <img src={iconURL} alt="" />
        <p className="service-name">{serviceName}</p>
        <p className="service-desc">{serviceText}</p>
        <p className="service-price">
          $<strong>{servicePrice}</strong>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
