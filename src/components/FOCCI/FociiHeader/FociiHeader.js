import React from "react";
import { Link } from "react-router-dom";
import "./FociiHeader.css";

const FociiHeader = () => {
  return (
    <div className="focii-bg">
      <div className="container">
        <div className="">
          <h1 className="fw-bold text-center header-heading">
            Do Not Lose Your Audience <br /> Ever Again
          </h1>
          <div className="d-flex justify-content-center">
            <h5 className="text-center header-description">
              Engagement AI solution for Learning/Webinar/Meeting hosts to
              understand audience interest in real time and maximise engagement.
            </h5>
          </div>
          <div className="text-center">
            <Link to="/focii_ce"><button className="know-more-btn text-center">Know more</button></Link>
          </div>
        </div>
      </div>
      <div>
        <div className="focii-header-bg d-flex align-items-end justify-content-center">
          <div style={{ marginBottom: "-40px" }} className="text-center">
            <img
              className="header-img"
              src="https://braina.live/images/focii.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FociiHeader;
