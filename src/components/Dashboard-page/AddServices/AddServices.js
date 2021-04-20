import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";
import { Spinner } from "react-bootstrap";
import axios from "axios";

const AddServices = () => {
  const [iconUrl, setIconUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleIconUpload = (event) => {
    const iconData = new FormData();
    iconData.set("key", "768b893f9ca0508d850dc134cfaf865b");
    iconData.set("image", event.target.files[0]);

    if (iconUrl === "") {
      document.getElementById("loading").style.display = "inline";
    }

    axios
      .post("https://api.imgbb.com/1/upload", iconData)
      .then(function (response) {
        setIconUrl(response.data.data.display_url);
        document.getElementById("loading").style.display = "none";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const serviceInfo = {
      serviceName: data.serviceName,
      serviceText: data.serviceText,
      servicePrice: data.servicePrice,
      iconURL: iconUrl,
    };

    fetch("https://secure-meadow-94796.herokuapp.com/add-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("success").style.display = "block";
      });
  };

  return (
    <div className="container">
      <div className="dash-content-top">
        <h1>Add service</h1>
      </div>
      <div className="service-box">
        <form onSubmit={handleSubmit(onSubmit)} className="row">
          <div className="col-md-6 my-3">
            <label htmlFor="serviceName">Service Name</label>
            <input
              className="form-control"
              placeholder="Enter a service name"
              {...register("serviceName", { required: true })}
            />
            {errors.serviceName && (
              <span className="dot-color">Service name is required</span>
            )}
          </div>

          <div className="col-md-6 my-3">
            <label htmlFor="servicePrice">Price</label>
            <input
              className="form-control"
              placeholder="Enter a service price"
              {...register("servicePrice", { required: true })}
            />
            {errors.servicePrice && (
              <span className="dot-color">Price is required</span>
            )}
          </div>

          <div className="col-md-6 my-3">
            <label htmlFor="serviceText">Service Description</label>
            <textarea
              rows="3"
              className="form-control"
              placeholder="Enter a short description"
              {...register("serviceText", { required: true })}
            />
            {errors.serviceText && (
              <span className="dot-color">Service description is required</span>
            )}
          </div>

          <div className="col-md-6 my-3">
            <label htmlFor="serviceIcon">Upload a Icon</label>
            <div className="serviceIcon">
              <input
                onChange={handleIconUpload}
                className="custom-form-control"
                required
                type="file"
              />
              <span id="loading">
                <Spinner animation="grow" />
              </span>
            </div>
          </div>
          <div className="col-md-12 my-3">
            <div className="custom-submit-btn">
              <button className="custom-btn-3">Add Service</button>
              <p id="success">Service Added Successfully</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
