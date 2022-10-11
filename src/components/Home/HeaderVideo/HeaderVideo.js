import React from "react";
import animationVideo from "../../../resource/video/Brainalive.mp4";
import "./HeaderVideo.css";

const HeaderVideo = () => {
  return (
    <section className="row">
      <video autoPlay loop muted className="w-100 video-height">
        <source src={animationVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default HeaderVideo;
