import React, { useEffect } from "react";
import "./Opening.css";
import opeining1 from "../../../resource/img/opening1.png";
import opeining2 from "../../../resource/img/opening2.png";
import opeining3 from "../../../resource/img/opening3.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Openings = () => {
  const openingsData = [
    {
      id: 1,
      title: "MACHINE LEARNING ENGINEER",
      img: opeining1,
      link: "applyjob/machine_learning",
      description:
        "Learn how customers respond physiologically to specific app design or UI changes with Gazepoint eye-tracking and biometrics technology. You can follow a user’s gaze as they experience your app, learn what catches their attention and what they ignore and then incorporate this unbiased data into decision about your product development.",
    },
    {
      id: 2,
      title: "EMBEDDED FIRMWARE DEVELOPMENT",
      img: opeining2,
      link: "applyjob/embedded_firmware",
      description:
        "Engagement AI solution for Learning/Webinar/Meeting hosts to understand audience interest in real time and maximise engagement.",
    },
    {
      id: 3,
      title: "HARDWARE ENGINEERING",
      img: opeining3,
      link: "applyjob/hardware_engineering",
      description: "BCI driven neuro rehabilitative care for stroke survivors.",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="d-flex justify-content-center opeining-section row">
      <div className="meet-our-team-section">
        <div>
          <h1 data-aos="fade-up" className="oppening-text">
            OPENINGS
          </h1>
        </div>
        <div className="row d-flex justify-content-center my-5  p-3 opening-flex-div">
          {openingsData.map((data) => (
            <div className="col-lg-4 col-md-4 col-sm-4 p-3">
              <div
                style={{
                  backgroundImage: `url(${data.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="opening-div"
              >
                <div className="opening-text d-flex align-items-end">
                  <div data-aos="fade-up" className="">
                    <h4 className="opening-title">{data.title}</h4>
                    <Link to={data.link}>
                      <button className="job-des-btn">JOB DESCRIPTION</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Openings;
