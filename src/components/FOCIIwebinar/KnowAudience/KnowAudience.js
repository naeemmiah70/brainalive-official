import React from "react";
import "./KnowAudience.css";
import aiImg from "../../../resource/ai.png";
import webcameImg from "../../../resource/webcam.png";
import timeImg from "../../../resource/save-time.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const KnowAudience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const details = [
    {
      id: 1,
      icon: aiImg,
      title: "Size is not a problem",
      details:
        "How much ever the audience size is, our AI collects the feedback for you while you focus on providing the best content.",
    },
    {
      id: 2,
      icon: webcameImg,
      title: "Protect your audience webcam privacy",
      details: "Audience webcam data does not leave their system.",
    },
    {
      id: 3,
      icon: timeImg,
      title: "SAVE TIME AND CUT COSTS",
      details:
        "Save your time and cost from sourcing and analysing multiple data. Our AI provides a full and final engagement report on your audience interest and engagement.",
    },
  ];
  return (
    <section className="focci-sdk-bg">
      <div className="focci-sdk-container">
        <div className="text-center">
          <h1 data-aos="fade-up" style={{ paddingTop: "7rem" }} className="focci-ce-title">
            Know Your Audience - <br /> Engaged, Tired, Bored, Confused?
          </h1>
          <div className="bar"></div>
        </div>
        <div className="row d-flex justify-content-center">
          {details.map((data) => (
            <div data-aos="fade-up" className="col-md-4 text-white p-4 audience-card">
              <div className="d-flex align-items-center">
                <div>
                  <img className="audience-icon" src={data.icon} alt="" />
                </div>
                <div>
                  <strong className="audience-title">{data.title}</strong>
                </div>
              </div>
              <div>
                <p className="audience-details">{data.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowAudience;
