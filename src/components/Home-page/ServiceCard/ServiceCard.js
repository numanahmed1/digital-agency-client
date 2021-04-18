import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const {name, icon, price} = service;
    return (
        <div className="col-md-3">
           <div className="service-card">
               <img src={icon} alt=""/>
               <p className="service-name">{name}</p>
               <p className="service-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
               <p className="service-price">$<strong>{price}</strong></p>
           </div>
        </div>
    );
};

export default ServiceCard;