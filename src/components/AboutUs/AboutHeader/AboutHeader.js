import React from "react";
import "./AboutHeader.css";
import AboutVideo from "../../../resource/video/about-vid.mp4";

const AboutHeader = () => {
  return (
    <section>
      <div className="text-position">
        <div className="text-center">
          <h1 className="text-white video-title">BrainAlive</h1>
          <p className="text-white video-description">Revolutionizing Human Engagement</p>
        </div>
      </div>
      <div className="row">
        <video className="height-video w-100 margin-top-video" autoPlay loop muted>
          <source src={AboutVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default AboutHeader;
