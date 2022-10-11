import React from "react";
import "./AbhaServices.css";
import Relearn from "../../../resource/abha/abha-mission.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AbhaServices = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="abha-bg">
      <div>
        <div className="row d-flex justify-content-center">
          <div data-aos="fade-up" className="col-md-6 p-4 text-center">
            <h2 className="abha-header-heading">
              Relearn Your Forgotten Mobility
            </h2>
            <p className="abha-header-description">
              Effective recovery is the first step in our mission. What we’re
              building together with doctors is shaping the mobility recovery of
              tomorrow. A system built on accessibility, affordability,
              transparency and collaboration. Where rehabilitation robotics is
              no more restricted to just rehab centers but also accessible from
              the comfort of your home. Recovery information flows freely
              between users and experts, where people get the right feedback to
              recover quickly.
            </p>
          </div>
        </div>
        <div className="mission-div">
          <div className="row d-flex justify-content-center">
            <img className="col-md-8 mission-img" src={Relearn} alt="" />
          </div>
        </div>
      </div>
      {/* Services */}
      <section className="d-flex justify-content-center">
        <div className="abha-service-div">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div data-aos="fade-up">
                <h3 className="abha-service-heading">
                  Quicker And Effective Rehabilitation
                </h3>
                <p className="abha-header-description">
                  Right mental simulation of motor movement results in enhanced
                  motor nerve activation thus resulting in quicker and effective
                  learning compared to repeated movement passive therapy
                  techniques.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  className="img-fluid service-img"
                  src="https://braina.live/abha/images/rehabilitation.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center mt-5">
        <div className="abha-service-div">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  className="img-fluid service-img"
                  src="https://braina.live/abha/images/saving.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div data-aos="fade-up">
                <h3 className="abha-service-heading">Reduced Setup Time</h3>
                <p className="abha-header-description">
                  Our proprietary machine learning algorithm uses transfer
                  learning thus eliminating the need to train the device for
                  each new patient. This results in saving up to 30 mins per
                  therapy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center mt-5">
        <div className="abha-service-div">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div data-aos="fade-up">
                <h3 className="abha-service-heading">
                  100% Noninvasive And Wireless
                </h3>
                <p className="abha-header-description">
                  An easy to wear noninvasive EEG headset records the mental
                  simulation of user's brain. The system comprises of a visual
                  display, an EEG headset and an exoskeleton all connected
                  wirelessly thus making it easy to use.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  className="img-fluid service-img"
                  src="https://braina.live/abha/images/exoskeleton.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center mt-5">
        <div className="abha-service-div">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  className="img-fluid service-img"
                  src="https://braina.live/abha/images/Remote-therapy.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div data-aos="fade-up">
                <h3 className="abha-service-heading">Remotely Accessible</h3>
                <p className="abha-header-description">
                  The entire system is highly portable thus facilitating home
                  based therapy. User performance is uploaded to the cloud for
                  therapist consultation and review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center mt-5">
        <div className="abha-service-div">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div data-aos="fade-up">
                <h3 className="abha-service-heading">
                  Enjoy Your Rehabilitation
                </h3>
                <p className="abha-header-description">
                  The entire experience is gamified in a way that the user gets
                  a real time 3D feedback of mental simulation accuracy, thus
                  motivating the user for better engagement.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  className="img-fluid service-img"
                  src="https://braina.live/abha/images/gamified.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center mt-5">
        <div className="abha-service-div">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  className="img-fluid service-img"
                  src="https://braina.live/abha/images/disabled.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div data-aos="fade-up">
                <h3 className="abha-service-heading">
                  Permanently Disabled? Not Really!
                </h3>
                <p className="abha-header-description">
                  Rehabilitation is possible for even chronic state disability
                  with zero residual movement left in the limbs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center know-more-abha">
        <h3 className="want-to-know-more">Want to know more about ABHA?</h3>
        <button className="abha-header-btn mb-5">Exlpore</button>
      </section>
    </section>
  );
};

export default AbhaServices;
