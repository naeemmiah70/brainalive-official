import React from "react";
import "./OurComputerVision.css";
import Video from "../../../resource/brain.mp4";


const OurComputerVision = () => {
  return (
    <section className="computer-vision-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 computer-vision-padding">
            <h1 id="vision-algorithm" className="wave-heading shimmer">
              Our Computer Vision Algorithm At Work
            </h1>
            <p className="vision-details">
              BrainAlive computer vision algorithm tracks your pupil movements,
              facial features and postures to assess the engagement level in
              real time.
            </p>
            <div>
              <a
                className="Launch-demo-btn"
                href="https://www.braina.live/tracking/calibration"
              >
                Launch Demo
              </a>
              <br className="dataset-img-break" />
              <a
                className="Launch-demo-btn data-set-btn"
                href="https://forms.gle/TgmmefJPxnwJVroG6"
                target="_blank"
              >
                BrainAlive Dataset
              </a>
            </div>
          </div>
          <div className="col-md-6 mt-5 computer-vision-padding">
            <video autoPlay loop muted className="w-100 vision-algo-video">
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurComputerVision;
