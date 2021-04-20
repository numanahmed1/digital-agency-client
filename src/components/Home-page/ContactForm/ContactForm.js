import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setFormData(data);
  };
  return (
    <div className="contact-form">
      <div className="common-title">
        <p>Contact us</p>

        <h1>
          We want to here from you<span className="dot-color">.</span>
        </h1>
      </div>
      <div className="form-main">
        {formData.name ? (
          <div className="common-title">
            <p>Thank you for submitting. we will get in touch with you soon.</p>
          </div>
        ) : (
          <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
            <div className="col-md-8 offset-md-2 mt-3">
              <input
                className="form-control custom-control"
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />

              {errors.name && <span>Name is required</span>}
            </div>

            <div className="col-md-8 offset-md-2 mt-3">
              <input
                className="form-control custom-control"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />

              {errors.email && <span>Email is required</span>}
            </div>

            <div className="col-md-8 offset-md-2 mt-3">
              <textarea
              rows="5"
                className="form-control custom-control"
                placeholder="Enter your message"
                {...register("message", { required: true })}
              />

              {errors.message && <span>Message is required</span>}
            </div>
            <div className="col-md-8 offset-md-2 mt-3">
              <input className="custom-btn-3 w-100" type="submit" />
            </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
