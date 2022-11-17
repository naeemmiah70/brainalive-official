import React from "react";
import { Link } from "react-router-dom";
import education from "../../../resource/education.mp4";
import '../../FOCIIce/FOCIIceHeader/FOCIIceHeader.css'

const EducationHeader = () => {
  return (
    <section className="focii-ce-header">
      <div className="ce-text-position">
        <div className="text-center">
          <h3 className="ce-video-title">
            Fully Understand Learner Engagement And Maximise Learning Outcomes
          </h3>
          <p className="ce-video-description mt-3">
            Video and voice intelligence to help online educators improve their
            student engagement and overall wellbeing in virtual learning
          </p>
          <Link to="/contact">
            <button className="get-free-demo-btn mt-3">Get Free Demo</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <video className="ce-video" autoPlay loop muted>
          <source src={education} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default EducationHeader;
