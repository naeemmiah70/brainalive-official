import React from "react";
import { Link } from "react-router-dom";
import Video from "../../../resource/focii_ce.m4v";
import "./FOCIIceHeader.css";

const FOCIIceHeader = () => {
  return (
    <section className="focii-ce-header">
      <div className="ce-text-position d-flex justify-content-center">
        <div className="text-center">
          <h3 className="ce-video-title">
            User engagement reimagined for Learning/Webinar/Meeting{" "}
          </h3>
          <p className="ce-video-description">
            Audience engagement analytics to help hosts provide what the
            audience needs{" "}
          </p>
          <Link to="/contact">
            <button className="get-free-demo-btn">Get Free Demo</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <video className="ce-video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default FOCIIceHeader;
