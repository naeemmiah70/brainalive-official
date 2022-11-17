import React from "react";
import data from "../../../resource/icon/store-data.png";
import understand from "../../../resource/icon/understand.png";
import measure from "../../../resource/icon/measure-action.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../FOCIIce/FOCIIceHeader/FOCIIceHeader.css";
import "../../FOCIIce/WhyFOCII/WhyFOCII.css";

const BrainAlivePlateform = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const details = [
    {
      id: 1,
      icon: data,
      title: "STORE DATA",
      header: "Computer vision and brain signal data warehouse",
      details:
        "We provide you with an outcome-based, fully managed data infrastructure and integration services",
    },
    {
      id: 2,
      icon: understand,
      title: "UNDERSTAND DATA",
      header: "Data Analytics and Dashboards",
      details:
        "Experience our award-winning data dashboards that are personalized for you.",
    },
    {
      id: 3,
      icon: measure,
      title: "TAKE & MEASURE ACTION",
      header: "Data Analytics Adoption Program",
      details:
        "Work with a dedicated data analytics coach and leverage best practices to achieve your goals",
    },
  ];
  return (
    <>
      <section className="focci-sdk-bg">
        <div className="focci-sdk-container">
          <div className="text-center">
            <h1 style={{ paddingTop: "3rem" }} className="focci-ce-title">
              The BrainAlive Platform
            </h1>
            <p
              style={{ opacity: "0.9" }}
              className="text-white text-center my-4"
            >
              From data collection and storage to platform adoption and
              measurable improvement
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            {details.map((data) => (
              <div
                data-aos="fade-up"
                style={{ background: "#fff" }}
                className="col-md-4 p-4 mt-4 audience-card"
              >
                <div className="d-flex align-items-center">
                  <div>
                    <img className="audience-icon" src={data.icon} alt="" />
                  </div>
                  <div>
                    <strong className="audience-title">{data.title}</strong>
                  </div>
                </div>
                <div className="mt-4">
                  <strong
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginTop: "20px",
                    }}
                  >
                    {data.header}
                  </strong>
                  <p
                    style={{ color: "black", opacity: 0.7 }}
                    className="audience-details"
                  >
                    {data.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div data-aos="fade-up" className="p-4 my-5">
            <h2 className="text-white fw-bold text-center ready-to-cut-text">
              Ready To Cut Down Your Cost And Time In Analysing Your Session
              Performance? Try Our <br /> Engagement AI Solution!
            </h2>
          </div>
        </div>
      </section>
      <section className="bottom-bg">
        <div className="">
          <div className="row sdk-bottom-bg d-flex justify-content-center align-items-center ">
            <div className="col-md-6 text-center p-3 dotted-border">
              <h2 className="sdk-bottom-title">
                {" "}
                Are you a teacher/instructor?
              </h2>
              <p className="sdk-bottom-details">
                Try our platform for free to analyse what your learners really
                loved
              </p>
              <Link to="/contact">
                <button className="get-free-demo">Get a Demo</button>
              </Link>
            </div>
            <div className="col-md-6 text-center p-3">
              <h2 className="sdk-bottom-title">
                Are you a LMS/virtual classroom <br /> software provider?
              </h2>

              <Link to="/focii_ce">
                <button className="get-free-demo">Try our SDK</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrainAlivePlateform;
