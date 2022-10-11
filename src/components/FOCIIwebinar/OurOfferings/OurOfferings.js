import React from "react";
import "./OurOfferings.css";
import apiPng from "../../../resource/icon/api.png";
import gMeet from "../../../resource/icon/g-meet.png";
import msteam from "../../../resource/icon/ms-team.png";
import webex from "../../../resource/icon/webex.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows, faApple } from "@fortawesome/free-brands-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurOfferings = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="focci-sdk-bg">
        <div className="focci-sdk-container">
          <div className="text-center">
            <h1 className="focci-ce-title mt-5">Our Offerings</h1>
            <div className="bar"></div>
          </div>
          <div className="row d-flex justify-content-center">
            <div data-aos="fade-up" className="col-md-4 text-white p-4 audience-card">
              <div className="">
                <h5 className="text-center application-type-text">FOCII API</h5>
              </div>
              <div className="d-flex align-items-center">
                <img className="apiPng-icon" src={apiPng} alt="" />
                <p className="offerings-text">Engagement analytics API</p>
              </div>
              <div className="d-flex align-items-center">
                <img className="apiPng-icon" src={apiPng} alt="" />
                <p className="offerings-text">Speech analytics API</p>
              </div>
              <div className="d-flex align-items-center">
                <img className="apiPng-icon" src={apiPng} alt="" />
                <p className="offerings-text">Content engagement API</p>
              </div>
              <div className="d-flex align-items-center">
                <img className="apiPng-icon" src={apiPng} alt="" />
                <p className="offerings-text">Emotion API</p>
              </div>
              <div className="d-flex align-items-center">
                <img className="apiPng-icon" src={apiPng} alt="" />
                <p className="offerings-text">Custom API</p>
              </div>
            </div>
            <div data-aos="fade-up" className="col-md-4 text-white p-4 audience-card">
              <div className="">
                <h5 className="text-center application-type-text">FOCII APPLICATION</h5>
              </div>
              <div>
                <p className="offerings-text">Desktop Application</p>
                <div>
                  <FontAwesomeIcon
                    className="application-icon"
                    icon={faWindows}
                  />
                  <FontAwesomeIcon
                    className="application-icon"
                    icon={faApple}
                  />
                </div>
              </div>
              <div>
                <p className="offerings-text">Web Plugins</p>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    className="application-icon"
                    icon={faVideo}
                  />
                  <img className="application-icon" src={gMeet} alt="" />
                  <img className="application-icon" src={msteam} alt="" />
                  <img className="webex-icon" src={webex} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="p-4 my-5 text-center">
            <h2 className="text-center ready-to-cut-text">
              Ready to cut down your cost and time in analysing your session
              performance? Try Our Engagement AI solution!
            </h2>
          </div>
        </div>
      </section>
      <section className="bottom-bg">
        <div className="">
          <div className="row sdk-bottom-bg d-flex justify-content-center align-items-center ">
            <div className="col-md-6 text-center p-3 dotted-border">
              <h2 className="sdk-bottom-title"> Are you a host/speaker?</h2>
              <p className="sdk-bottom-details">
                Try our platform for free to analyse what your audience really
                loved
              </p>
              <Link to="/contact">
                <button className="get-free-demo">Get a Demo</button>
              </Link>
            </div>
            <div className="col-md-6 text-center p-3">
              <h2 className="sdk-bottom-title">
                {" "}
                Are you a webinar software provider?
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

export default OurOfferings;
