import React from "react";
import "./Subscribe.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setSubscribed(true);
  };
  return (
    <div>
      <h5 className="subscribe-now-heading">Subscribe Now</h5>
      <div className="subscribe-form">
        {subscribed ? (
          <div>
            <p className="get-in-touch-text">
              Thanks for contacting us! We will be in touch with you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className="form-label">
                Name <span className="star-icon">*</span>
              </p>
              <input
                className="subscribe-input"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="subscribe-required">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <p className="form-label mt-3">
                Email <span className="star-icon">*</span>
              </p>
              <input
                className="subscribe-input"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="subscribe-required">
                  This field is required
                </span>
              )}
            </div>
            <div className="text-center">
              <button type="submit" className="subscribe-submit-btn">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
