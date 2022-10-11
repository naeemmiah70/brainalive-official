import React from "react";
import './AboutBa3e.css'
import girl from "../../../resource/girl.png";

const AboutBa3e = () => {
  return (
    <section className="row aboutBa3e-bg">
      <div className="col-md-6">
        <img className="img-fluid" src={girl} alt="" />
      </div>
      <div className="col-md-6 d-flex align-items-center p-5">
        <div>
          <div>
            <h1 className="about-ba3e">About BA3E</h1>
            <h3 className="ultimate-couch">Your Ultimate Coach For A Smarter You</h3>
          </div>
          <div>
            <h4 className="ba3e-title">Average Focus Time</h4>
            <p className="ba3e-details">Get real time insights on your average focus for the day</p>
          </div>
          <div>
            <h4 className="ba3e-title">Maximise Attention</h4>
            <p className="ba3e-details">
              Make informed decisions to identify which tasks engage you the
              most and tune into the flow state
            </p>
          </div>
          <div>
            <h4 className="ba3e-title">Smart Zone Out</h4>
            <p className="ba3e-details">
              Block out notifications and alerts through autonomous and smart
              diagnosis of your state of focus
            </p>
          </div>
          <div>
            <h4 className="ba3e-title">Avoid Mental Weariness</h4>
            <p className="ba3e-details">
              Find out that recharge hack that lets you rejuvenate best at the
              shortest possible time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBa3e;
