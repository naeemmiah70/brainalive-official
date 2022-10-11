import React, { useEffect } from "react";
import MissionImg from "../../../resource/mission.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
 
      <section className=" row about-bg-color mission-margin-top">
      <div data-aos="fade-right" className="col-md-6 div-padding">
        <div>
          <img className="img-fluid about-image" src={MissionImg} alt="" />
        </div>
      </div>
      <div data-aos="fade-up" className="col-md-6 d-flex justify-content-center align-items-center div-padding">
        <div >
          <h1 className="about-title">Mission</h1>
          <p className="about-descriptions">
            Our mission at BrainAlive is to champion human potential by truly
            understanding the user state of mind and intent through the lens of
            vision and brain science. Powering this mission is our expertise in
            computer vision, neuroscience and deep learning technologies. We
            strive to serve leading companies in the area of e-learning, web
            conferencing and digital media and entertainment
          </p>
        </div>
      </div>
    </section>
 
  );
};

export default Mission;
