import React, { useEffect } from "react";
import "./About.css";
import AboutImg from "../../../resource/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
   
  }, []);

  return (
    <section className="row about-bg-color">
      <div className="col-md-6 d-flex justify-content-center align-items-center div-padding">
        <div data-aos="fade-up" className="">
          <h1 className="about-title">About Us</h1>
          <p className="about-descriptions">
            At BrainAlive, we believe in data that facilitates new ways of
            understanding human engagement. We are the first company to combine
            neuroscience and computer vision to detect, reason and determine the
            causality of human engagement, as we inform the way humans engage in
            this distracted digital world.
          </p>
        </div>
      </div>
      <div data-aos="fade-left" className="col-md-6 div-padding">
        <div>
          <img className="img-fluid about-image" src={AboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
