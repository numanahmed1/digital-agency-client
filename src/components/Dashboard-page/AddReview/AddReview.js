import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddReview.css';
import { Spinner } from "react-bootstrap";
import axios from "axios";

const AddReview = () => {
  const [imgUrl, setIconUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImgUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "768b893f9ca0508d850dc134cfaf865b");
    imageData.set("image", event.target.files[0]);

    if (imgUrl === "") {
      document.getElementById("loading").style.display = "inline";
    }

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setIconUrl(response.data.data.display_url);
        document.getElementById("loading").style.display = "none";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const reviewDetails = {
      reviewerName: data.reviewerName,
      reviewerPosition: data.reviewerPosition,
      reviewText: data.reviewText,
      imageURL: imgUrl,
    };
    console.log(reviewDetails);
    fetch("http://localhost:5000/add-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("success").style.display = "block";
      });
  };

  return (
    <div className="container">
      <div className="dash-content-top">
        <h1>Add Review</h1>
      </div>
      <div className="review-box">
        <form onSubmit={handleSubmit(onSubmit)} className="row">
          <div className="col-md-6 my-3">
            <label htmlFor="reviewerName">Name</label>
            <input
              className="form-control"
              placeholder="Enter your name"
              {...register("reviewerName", { required: true })}
            />
            {errors.reviewerName && (
              <span className="dot-color">Name is required</span>
            )}
          </div>

          <div className="col-md-6 my-3">
            <label htmlFor="reviewerPosition">Position</label>
            <input
              className="form-control"
              placeholder="Enter your position"
              {...register("reviewerPosition", { required: true })}
            />
            {errors.reviewerPosition && (
              <span className="dot-color">Position is required</span>
            )}
          </div>

          <div className="col-md-6 my-3">
            <label htmlFor="reviewText">Review Text</label>
            <textarea
              rows="3"
              className="form-control"
              placeholder="Enter a short review here"
              {...register("reviewText", { required: true })}
            />
            {errors.reviewText && (
              <span className="dot-color">Review text is required</span>
            )}
          </div>

          <div className="col-md-6 my-3">
            <label htmlFor="reviewerImg">Upload a image</label>
            <div className="custom-submit-btn">
              <input
                onChange={handleImgUpload}
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
              <button className="custom-btn-3">Add Review</button>
              <p id="success">Review Added Successfully</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
