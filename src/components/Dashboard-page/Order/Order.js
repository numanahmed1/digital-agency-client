import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userInfoContext } from "../../../App";
import ProcessPayment from "../PaymentForm/ProcessPayment";
import { useForm } from "react-hook-form";
import "./Order.css";

const Order = () => {
  const { serviceId } = useParams();
  const [selectedService, setSelectedService] = useState([]);
  const [orderInfo, setOrderInfo] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(userInfoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const url = `https://secure-meadow-94796.herokuapp.com/selected-service?id=${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSelectedService(data[0]);
      });
  }, [serviceId]);

  const onSubmit = (data) => {
    setOrderInfo({
      shipment_username: data.shipment_username,
      shipment_email: data.shipment_email,
      order_service_name: selectedService.serviceName,
      order_service_price: selectedService.servicePrice,
      order_service_iconUrl: selectedService.iconURL,
      order_service_text: selectedService.serviceText,
    });
  };

  const handleOrderPlaced = (id, card) => {
    const orderDetails = {
      ...loggedInUser,
      orderInfo: orderInfo,
      paymentInfo: {
        paymentId: id,
        cardType: card,
      },
      status: "pending",
      orderTime: new Date(),
    };

    fetch("https://secure-meadow-94796.herokuapp.com/add-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("your order placed successfully.");
      });
  };

  return (
    <div className="container">
      <div className="dash-content-top">
        <h1>Order</h1>
      </div>
      <div className="order-main">
        <div className="row">
          <div className="col-md-7">
            <div
              style={{
                display: orderInfo.shipment_username ? "none" : "block",
              }}
              className="order-details"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Enter your name"
                  className="form-control mt-3"
                  defaultValue={loggedInUser.username}
                  type="text"
                  {...register("shipment_username", { required: true })}
                />
                {errors.shipment_username && (
                  <span className="dot-color">Name is required</span>
                )}

                <input
                  placeholder="Enter your email"
                  className="form-control mt-3"
                  defaultValue={loggedInUser.email}
                  type="text"
                  {...register("shipment_email", { required: true })}
                />
                {errors.shipment_email && (
                  <span className="dot-color">Email is required</span>
                )}

                <p className="service-name-holder">
                  {selectedService.serviceName}
                </p>

                <button disabled={!selectedService.serviceName} type="submit" className="custom-btn-3">
                  Next
                </button>
              </form>
            </div>
            <div
              style={{
                display: orderInfo.shipment_username ? "block" : "none",
              }}
              className="order-payments"
            >
              <ProcessPayment
                servicePrice={selectedService.servicePrice}
                handleOrderPlaced={handleOrderPlaced}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
