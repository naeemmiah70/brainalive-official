import React, { useEffect } from "react";
import "./OurSolutions.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import usability from "../../../resource/student.jpg";
import audience from "../../../resource/teaching.jpg";
import stroke from "../../../resource/stroke-rehab.jpg";
import neuro from "../../../resource/neuro.png";
import ott from '../../../resource/icon/ott.png';
import elearning from '../../../resource/icon/e-learning.png' ;
import strokeIcon from '../../../resource/icon/stroke-icon.png' ;
import neuroIcon from '../../../resource/icon/neuro-icon.png' ;

const OurSolutions = () => {
  const solutionsData = [
    {
      id: 1,
      title: "UX/ Usability and Conversion Optimisation ",
      iconURL: ott,
      imgURL: usability,
      link: "/neumar",
      description:
        "Learn how customers respond physiologically to specific app design or UI changes with Gazepoint eye-tracking and biometrics technology. You can follow a user’s gaze as they experience your app, learn what catches their attention and what they ignore and then incorporate this unbiased data into decision about your product development.",
    },
    {
      id: 2,
      title: "Audience Engagement Analytics",
      iconURL: elearning,
      imgURL: audience,
      link: "/focii",
      description:
        "Engagement AI solution for Learning/Webinar/Meeting hosts to understand audience interest in real time and maximise engagement.",
    },
    {
      id: 3,
      title: "Stroke Rehabilitation",
      iconURL: strokeIcon,
      imgURL: stroke,
      link: "/abha",
      description: "BCI driven neuro rehabilitative care for stroke survivors.",
    },
    {
      id: 4,
      title: "Neuro Wearable for Smarter Brain",
      iconURL: neuroIcon,
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
    <section className="d-flex justify-content-center">
      <div className="solution-card-container">
        <div>
          <h1 data-aos="fade-up" className="solution-header text-center">
            Our Solutions
          </h1>
        </div>
        <div className="row d-flex justify-content-center mb-5 py-2 px-4">
          {solutionsData.map((data) => (
            <div class="col-xs-12  col-lg-5 col-md-6">
              <div class="project-block item box-1">
                <Link to={data.link} aria-label="neumar">
                  <div class="image-box">
                    <figure class="image">
                      <img src={data.imgURL} alt="student" />
                    </figure>

                    <div class="caption-box1">
                      <div class="icon-box">
                        <img
                          src={data.iconURL}
                          width="50"
                          height="50"
                          alt="icon"
                        />
                      </div>
                      <h3>{data.title}</h3>

                      <div class="text">
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
