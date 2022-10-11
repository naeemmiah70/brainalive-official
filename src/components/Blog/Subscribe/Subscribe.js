import React from "react";
import "./Subscribe.css";
import { useForm } from "react-hook-form";

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h5 className="subscribe-now-heading">Subsribe Now</h5>
      <div className="subscribe-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="form-label">
              Name <span className="star-icon">*</span>
            </p>
            <input
              className="subscribe-input"
              type="text"
              {...register("name")}
            />
          </div>
          <div>
            <p className="form-label mt-3">
              Email <span className="star-icon">*</span>
            </p>
            <input
              className="subscribe-input"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="subscribe-submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
