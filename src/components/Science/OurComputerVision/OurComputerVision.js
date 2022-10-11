import React from "react";
import "./OurComputerVision.css";
import Video from '../../../resource/brain.mp4'

const OurComputerVision = () => {
  return (
    <section className="computer-vision-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-5 p-5">
            <h1 className="wave-heading shimmer">
              Our Computer Vision Algorithm At Work
            </h1>
            <p className="vision-details">
              BrainAlive computer vision algorithm tracks your pupil movements,
              facial features and postures to assess the engagement level in
              real time.
            </p>
            <a
              className="Launch-demo-btn"
              href="https://www.braina.live/tracking/calibration"
            >
              Launch Demo
            </a>
          </div>
          <div className="col-md-6 mt-5 p-5">
            <video autoPlay loop muted className="w-100">
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurComputerVision;
