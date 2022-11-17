import React from "react";
import "./RegionOfInterest.css";
import interest from "../../../resource/interest.jpg";
import check from "../../../resource/icon/check.svg";
import heatMap from "../../../resource/heat-map.jpg";
import brainAliveGiff from "../../../resource/Brainalive.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const RegionOfInterest = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="interest-bg">
      <div className="d-flex justify-content-center">
        <div className="focci-sdk-container">
          <div className="text-center my-5">
            <h2 data-aos="fade-up" className="interest-heading">Region Of Interest</h2>
            <div className="bar"></div>
          </div>

          <div className="row d-flex Reverse-column tab-reverse-column">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="interet-padding">
                <img
                data-aos="fade-right"
                  className="img-fluid interest-image"
                  src={interest}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="interest-card interet-padding">
                <h5 className="interest-header">
                  Augment your understanding of specific regions in the page
                  through getting detailed user engagement feedback on marked
                  areas of interest.
                </h5>
                <div className="d-flex align-items-center">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Place your CTA features in those regions that are grabbing
                    maximum attention
                  </p>
                </div>
                <div className="d-flex">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Place your CTA features in those regions that are grabbing
                    maximum attention
                  </p>
                </div>
                <div className="d-flex">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Place your CTA features in those regions that are grabbing
                    maximum attention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="d-flex justify-content-center">
        <div className="focci-sdk-container">
          <div className="text-center mt-5">
            <h2 className="interest-heading">Heatmap</h2>
            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="interest-card interet-padding">
                <h5 className="interest-header">
                  Identify which elements attract the maximum visual attention
                  compared to elements that are ignored or overlooked.
                </h5>
                <div className="d-flex align-items-center">
                  <img  className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Infer user attention pattern in complex pages and identify
                    the most popular part of the page that grabs maximum
                    attention.
                  </p>
                </div>
                <div className="d-flex">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Observe the second by second variation in audience retention
                  </p>
                </div>
                <div className="d-flex">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Answer critical questions regarding whether users are
                    looking at the desired call-to-action buttons.
                  </p>
                </div>
                <div className="d-flex">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Identify variation in user interest across content including
                    video, pictures and text for multiple user categories.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="interet-padding">
                <img
                data-aos="fade-left"
                  className="img-fluid interest-image"
                  src={heatMap}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reverse section */}
      <div className="d-flex justify-content-center">
        <div className="focci-sdk-container">
          <div className="text-center mt-5">
            <h2 data-aos="fade-up" className="interest-heading">Fixation time and sequence</h2>
            <div className="bar"></div>
          </div>

          <div className="row Reverse-column tab-reverse-column">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="interet-padding">
                <img
                data-aos="fade-right"
                  className="img-fluid interest-image"
                  src={brainAliveGiff}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="interest-card interet-padding">
                <h5 className="interest-header">
                  Identify the sequence and duration with which the user gaze
                  point moves across the site
                </h5>
                <div className="d-flex align-items-center">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Identify elements that are able to capture and hold user’s
                    attention in the first few seconds
                  </p>
                </div>
                <div className="d-flex">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Gather feedback on content complexity
                  </p>
                </div>
                <div className="d-flex">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Identify if user is able to find information that are needed
                    in the right order
                  </p>
                </div>
                <div className="d-flex">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Identify optimal positioning of key information and call to
                    action buttons.
                  </p>
                </div>
                <div className="d-flex">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Highlight user’s difficulty in finding a particular
                    information on the site
                  </p>
                </div>
                <div className="d-flex">
                  <img className="interest-check-icon" src={check} alt="" />
                  <p className="interest-text">
                    {" "}
                    Identify important design/content stimulus that drives
                    maximum user conversion rates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionOfInterest;
