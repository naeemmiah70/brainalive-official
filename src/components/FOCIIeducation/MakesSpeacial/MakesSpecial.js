import React from "react";
import "./MakesSpcecial.css";
import sign from "../../../resource/check.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MakesSpecial = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const details = [
    {
      id: 1,
      text: "We measure the hard to measure things targeted at improving student's mental wellbeing along with providing them with the content that matters the most.",
    },
    {
      id: 2,
      text: "Customized dashboards that capture your user's unique goals and priorities.",
    },
    {
      id: 3,
      text: "Completely non-intrusive technology enabling the learners to focus only on learning.",
    },
    {
      id: 4,
      text: "Quick integration with e-learning platforms delivering value in weeks, not months.",
    },
    {
      id: 5,
      text: "Application of true AI and Machine Learning as opposed to human-informed metrics and statistical analysis.",
    },
    {
      id: 6,
      text: "A high-quality platform built by a team of the brightest minds spanning across diverse industry and background.",
    },
  ];
  return (
    <section
      style={{ background: "#fff" }}
      className="focci-sdk-bg insight-top"
    >
      <div className="focci-sdk-container">
        <h2 className="makes-speacial">What Makes Us Special</h2>
        <div className="row mt-5">
          {details.map((data) => (
            <div data-aos="fade-up" key={data.id} className="col-md-6 d-flex">
              <div>
                <img className="check-size" src={sign} alt="" />
              </div>
              <div>
                <p className="speacial-text">{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakesSpecial;
