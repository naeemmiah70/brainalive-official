import React from "react";
import "./WhyFOCII.css";
import icon1 from "../../../resource/icon/icon1.png";
import icon2 from "../../../resource/icon/icon2.png";
import icon3 from "../../../resource/icon/icon3.png";
import icon4 from "../../../resource/icon/icon4.png";
import icon5 from "../../../resource/icon/icon5.png";
import icon6 from "../../../resource/icon/icon6.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhyFOCII = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const details = [
    {
      id: 1,
      icon: icon1,
      title: "Adapt On The Fly",
      description:
        "Read audience engagement in real-time to adapt the delivery strategy on the fly",
    },
    {
      id: 2,
      icon: icon2,
      title: "Reality In Virtual",
      description:
        "Get audience feedback just like how one would get on a real stage",
    },
    {
      id: 3,
      icon: icon3,
      title: "Better Use Of Time",
      description:
        "Focus on improvisation of instructional strategy while AI collects the effectiveness feedback",
    },
    {
      id: 4,
      icon: icon4,
      title: "Meaningful Interaction",
      description:
        "Provide host and audience the opportunity to communicate through non-verbal cues",
    },
    {
      id: 5,
      icon: icon5,
      title: "Privacy Preserved",
      description:
        "Audience privacy is preserved through aggregate feedback and edge technology",
    },
    {
      id: 6,
      icon: icon6,
      title: "Redefine Delivery",
      description:
        "Empower the host with feedback on pitch variation, speaking speed, filler word usage and word repetition",
    },
  ];
  return (
    <>
      <section className="focci-sdk-bg">
        <div className="focci-sdk-container">
          <div className="text-center mt-5">
            <h2 data-aos="fade-up" className="focci-ce-title">Why FOCII</h2>
            <div class="bar"></div>
          </div>
          <div className="row">
            {details.map((data) => (
              <div data-aos="fade-up" className="col-lg-4 col-md-6 d-flex why-focii-card-padding">
                <div className="d-flex align-items-center p-1">
                  <img className="sdk-icon" src={data.icon} alt="" />
                </div>
                <div className="p-3 m-2 sdk-text-div">
                  <h4 className="sdk-card-title">{data.title}</h4>
                  <small className="sdk-card-description">{data.description}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bottom-bg">
        <div className="margin-sdk-bg">
          <div className="sdk-bottom-bg d-flex justify-content-center align-items-center ">
            <div className="text-center p-3">
              <h2 className="sdk-bottom-title">
                {" "}
                Are you ready to make your technology more human?
              </h2>
              <p className="sdk-bottom-details">
                Use our SDK to empower the host to provide the best experience
                for their audience.
              </p>
              <Link to="/contact">
                <button className="get-free-demo">Get Free Demo</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyFOCII;
