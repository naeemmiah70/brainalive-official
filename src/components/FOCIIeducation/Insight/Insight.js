import React from "react";
import "./Insight.css";
import insight1 from "../../../resource/product/insight1.png";
import insight2 from "../../../resource/product/insight2.png";
import insight3 from "../../../resource/product/insight3.png";
import insight4 from "../../../resource/product/insight4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Insight = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="focci-sdk-bg insight-top">
      <div className="focci-sdk-container">
        <div className="text-center">
          <h2 data-aos="fade-up" className="insight-heading">
            Insight At Sight
          </h2>
          <div className="bar"></div>
        </div>
        {/* section */}
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center p-4">
            <h3 data-aos="fade-up" className="insight-heading">
              Address Knowledge Gap Proactively Through Tracking The Leading
              Metrics Of Disengagement.
            </h3>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end p-4">
            <img
              data-aos="fade-up"
              className="img-fluid"
              src={insight1}
              alt=""
            />
          </div>
        </div>
        {/* section */}
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center justify-content-start p-4">
            <img
              data-aos="fade-up"
              className="img-fluid"
              src={insight2}
              alt=""
            />
          </div>
          <div className="col-md-6 d-flex align-items-center p-4">
            <h3 data-aos="fade-up" className="insight-heading">
              Gather 1-On-One Insights On Every Student's Interest, Effort,
              Attention And Motivation.
            </h3>
          </div>
        </div>
        {/* section */}
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center p-4">
            <h3 data-aos="fade-up" className="insight-heading">
              Find Out The Optimal Class Duration & Slots That Maximizes
              Engagement.
            </h3>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-start p-4">
            <img
              data-aos="fade-up"
              className="img-fluid"
              src={insight3}
              alt=""
            />
          </div>
        </div>
        {/* section */}
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center justify-content-start p-4">
            <img
              data-aos="fade-up"
              className="img-fluid"
              src={insight4}
              alt=""
            />
          </div>
          <div className="col-md-6 d-flex align-items-center p-4">
            <h3 data-aos="fade-up" className="insight-heading">
              Discover Insights On Which Topic Were More Engaging Over Others.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
