import React from "react";
import "../Insight/Insight.css";
import insight5 from "../../../resource/product/ultimate1.png";
import insight6 from "../../../resource/product/ultimate2.png";
import insight7 from "../../../resource/product/ultimate3.png";
import girl from "../../../resource/girl.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../FOCCI/FociiEvents/FociiEvents.css";

const TeachingAssistent = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="focci-sdk-bg insight-top">
      <div className="focci-sdk-container">
        <div className="text-center">
          <h2 data-aos="fade-up" className="insight-heading">
            Your Ultimate Teaching Assistant
          </h2>
          <div className="bar"></div>
        </div>
        {/* section */}
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center p-4">
            <h3 data-aos="fade-up" className="insight-heading">
              Make Data Driven Conclusions On Instruction Design Experiments.
            </h3>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end p-4">
            <img
              data-aos="fade-up"
              className="img-fluid insight-img"
              src={insight5}
              alt=""
            />
          </div>
        </div>
        {/* section */}
        <div className="row Reverse-column mt-5">
          <div className="col-md-6 d-flex align-items-center justify-content-start p-4">
            <img
              data-aos="fade-up"
              className="img-fluid "
              src={insight6}
              alt=""
            />
          </div>
          <div className="col-md-6  d-flex align-items-center">
            <h3 data-aos="fade-up" className="insight-heading ">
              Attend To Individual Student Disengagement In Real-Time.
            </h3>
          </div>
        </div>
        {/* section */}
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center p-4">
            <h3 data-aos="fade-up" className="insight-heading insight-img">
              Improve Lesson Delivery Through Feedback On Speech Pace And Pitch
              Range.
            </h3>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end p-4">
            <img
              data-aos="fade-up"
              className="img-fluid insight-img"
              src={insight7}
              alt=""
            />
          </div>
        </div>
        {/* section */}
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center justify-content-end p-4">
            <img data-aos="fade-up" className="img-fluid" src={girl} alt="" />
          </div>
          <div className="col-md-6 d-flex align-items-center p-4">
            <div data-aos="fade-up">
              <h3 className="advantage-heading">The BrainAlive Advantage</h3>
              <p style={{ opacity: "0.9" }} className="advantage-deatils">
                We spent half a decade designing and developing the finest
                neurotech and machine learning algorithms that works with every
                learner and teacher to truly improve the way the world learns.
              </p>
              <Link to="/ba3e">
                <button className="learn-more-btn">Know more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingAssistent;
