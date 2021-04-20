import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userInfoContext } from "../../../App";
import ProcessPayment from "../PaymentForm/ProcessPayment";
import { useForm } from "react-hook-form";

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
    const url = `http://localhost:5000/selected-service?id=${serviceId}`;
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
      status: "Pending",
      orderTime: new Date(),
    };

    fetch("http://localhost:5000/add-order", {
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

                <p>{selectedService.serviceName}</p>

                <button type="submit" className="custom-btn-3">
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
              <ProcessPayment servicePrice={selectedService.servicePrice} handleOrderPlaced={handleOrderPlaced} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
