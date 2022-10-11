import React, { useEffect } from "react";
import "./OurSolutions.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import usability from "../../../resource/student.jpg";
import audience from "../../../resource/teaching.jpg";
import stroke from "../../../resource/stroke-rehab.jpg";
import neuro from "../../../resource/neuro.png";

const OurSolutions = () => {
  const solutionsData = [
    {
      id: 1,
      title: "UX/ Usability and Conversion Optimisation ",
      iconURL: "https://braina.live/images/icon/ott.png",
      imgURL: usability,
      link: "/neumar",
      description:
        "Learn how customers respond physiologically to specific app design or UI changes with Gazepoint eye-tracking and biometrics technology. You can follow a user’s gaze as they experience your app, learn what catches their attention and what they ignore and then incorporate this unbiased data into decision about your product development.",
    },
    {
      id: 2,
      title: "Audience Engagement Analytics",
      iconURL: "https://braina.live/images/icon/e-learning.png",
      imgURL: audience,
      link: "/focii",
      description:
        "Engagement AI solution for Learning/Webinar/Meeting hosts to understand audience interest in real time and maximise engagement.",
    },
    {
      id: 3,
      title: "Stroke Rehabilitation",
      iconURL: "https://braina.live/images/icon/stroke-icon.png",
      imgURL: stroke,
      link: "/abha",
      description: "BCI driven neuro rehabilitative care for stroke survivors.",
    },
    {
      id: 4,
      title: "Neuro Wearable for Smarter Brain",
      iconURL: "https://braina.live/images/icon/neuro-icon.png",
      imgURL: neuro,
      link: "/ba3e",
      description:
        "A peak into your brain activity to help you discover and develop new habits that lets you blaze through your day.",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className="container">
        <div>
          <h1 data-aos="fade-up" className="solution-header text-center">
            Our Solutions
          </h1>
        </div>
        <div className="row d-flex justify-content-center mb-5 py-2 px-4">
          {solutionsData.map((data) => (
            <div className="col-md-5 d-flex justify-content-center px-2 py-3 m-3 hovered-div">
              <Link to={data.link} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    backgroundImage: `url(${data.imgURL})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="solution-div-bg"
                >
                  <div className="card-text d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img className="img-icon" src={data.iconURL} alt="" />
                      <h3 className="text-white mt-2 card-title">
                        {data.title}
                      </h3>
                      <p className="text-white hide-card-text">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
