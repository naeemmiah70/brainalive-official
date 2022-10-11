import React from "react";
import "./EmpowerInstruction.css";
import aiImg from "../../../resource/ai-logo.png";
import webcameImg from "../../../resource/deliver.png";
import timeImg from "../../../resource/adapt.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EmpowerInstruction = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const details = [
    {
      id: 1,
      icon: aiImg,
      title: "ARTIFICIALLY INTELLIGENT",
      details:
        "Our engagement AI tool collects and analyses the learner data to present you with what your learner really liked in your content/presentation",
    },
    {
      id: 2,
      icon: webcameImg,
      title: "DELIVER LIKE A PRO",
      details:
        "We provide feedback on your content production and delivery effectiveness including optimal duration, speaker speed, speech refinements, verbal and non verbal expression and much more",
    },
    {
      id: 3,
      icon: timeImg,
      title: "ADAPT ON THE FLY",
      details:
        "Get the analytics in real time while you deliver to better adapt to your learners on the go",
    },
  ];
  return (
    <section style={{ marginTop: "-10px" }} className="focci-sdk-bg">
      <div className="focci-sdk-container">
        <div data-aos="fade-up" className="text-center">
          <h1 className="focci-ce-title empower-heading-text">
            Empower Instructors With The Finest And Most Accurate Feedback On
            Learner Engagement To Help Create Content That Matters
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

export default EmpowerInstruction;
