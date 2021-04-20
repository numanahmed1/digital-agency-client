import React from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newEmail = {
      adminEmail: data.adminEmail
    };
    fetch("http://localhost:5000/add-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("success").style.display = "block";
      });
  };
  return (
    <div className="container">
      <div className="dash-content-top">
        <h1>Add Admin</h1>
      </div>
      <div className="admin-maker-box">
        <form onSubmit={handleSubmit(onSubmit)} className="row">
          <div className="col-md-6 my-3">
            <label htmlFor="adminEmail">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter a valid email"
              {...register("adminEmail", { required: true })}
            />
            {errors.adminEmail && (
              <span className="dot-color">Email is required</span>
            )}
            <div className="custom-submit-btn mt-2">
              <button className="custom-btn-3" type="submit">
                Submit
              </button>
              <p id="success">Email added successfully.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
