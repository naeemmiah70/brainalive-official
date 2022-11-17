import React from "react";
import "./FOCCISDK.css";
import videoImg from "../../../resource/video.png";
import voiceImg from "../../../resource/voice.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FOCIISDK = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="focci-sdk-bg">
      <div className="focci-sdk-container">
        <div className="text-center">
          <h2 data-aos="fade-up" className="focci-ce-title pt-5">Introducing FOCII SDK</h2>
          <div class="bar"></div>
          <div className="d-flex justify-content-center">
            <p className="focci-ce-description pt-1">
              A rapid developer kit to make your virtual conferencing tool smart
              to help understand the audience in realtime and maximise their
              engagement
            </p>
          </div>
        </div>
        <div className="row p-3 d-flex justify-content-between">
          <div data-aos="fade-up" className="col-md-5 text-white">
            <h3 className="video-intelligence">Video Intelligence</h3>
            <img className="img-fluid my-3" src={videoImg} alt="" />
            <small>
              Computer vision based audience interest and intent decode through
              nonverbal cues
            </small>
          </div>
          <div data-aos="fade-up" className="col-md-5 text-white">
            <h3 className="video-intelligence">Voice Intelligence</h3>
            <img className="img-fluid my-3" src={voiceImg} alt="" />
            <small>
              Computer vision based audience interest and intent decode through
              nonverbal cues
            </small>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default FOCIISDK;
