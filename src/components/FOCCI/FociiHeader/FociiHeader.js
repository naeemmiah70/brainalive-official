import React from "react";
import { Link } from "react-router-dom";
import "./FociiHeader.css";
import focii from '../../../resource/focii.png'

const FociiHeader = () => {
  return (
    <div className="focii-bg row">
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
            <Link to="/focii_ce"><button className="focii-know-more-btn text-center">Know more</button></Link>
          </div>
        </div>
      </div>
      <div>
        <div className="focii-header-bg d-flex align-items-end justify-content-center">
          <div  className="text-center focci-banner-img">
            <img
              className="header-img"
              src={focii}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FociiHeader;
