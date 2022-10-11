import React, { useEffect } from "react";
import "./Facilities.css";
import why1 from "../../../resource/img/why1.png";
import why2 from "../../../resource/img/why2.png";
import why3 from "../../../resource/img/why3.png";
import check from "../../../resource/check.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Facilities = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="">
      <section className="d-flex justify-content-center">
        <div className="facilities-container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center facilities-div-padding">
              <div data-aos="fade-right" className="">
                <h1 className="facilities-title">NEXT-GEN TECHNOLOGY</h1>
                <p className="facilities-description mt-3">
                  BrainAlive is one of the few organizations to work in next
                  generation consumer grade B.C.I devices
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="col-md-6 facilities-div-padding">
              <div>
                <img className="img-fluid facilities-image" src={why1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center">
        <div className="facilities-container">
          <div className="row">
            <div data-aos="fade-right" className="col-md-6 facilities-div-padding">
              <div>
                <img className="img-fluid w-100 facilities-image" src={why2} alt="" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center facilities-div-padding">
              <div data-aos="fade-left" className="">
                <h1 className="facilities-title">
                  LEARNING DRIVEN WORK CULTURE
                </h1>
                <p className="facilities-description mt-3">
                  BrainAlive is a learning-driven organization that promotes
                  open mindedness, quest for innovation and knowledge sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center">
        <div className="facilities-container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center facilities-div-padding">
              <div data-aos="fade-right" className="">
                <h1 className="facilities-title">
                  EXCEPTIONAL WORK LIFE BALANCE
                </h1>
                <p className="facilities-description">
                  All work and no play makes Jack a dull boy , and so,
                </p>
                <ul>
                  <li className="facilities-description">
                    Flexible work-hours policy?
                    <img width="30px" src={check} alt="" />
                  </li>
                  <li className="facilities-description">
                    Group Yoga sessions on weekends?
                    <img width="30px" src={check} alt="" />
                  </li>
                  <li className="facilities-description">
                    A gaming room with PS?
                    <img width="30px" src={check} alt="" />
                  </li>
                </ul>
                <p className="facilities-description">
                  You name it and we have it.
                </p>
              </div>
            </div>
            <div className="col-md-6 facilities-div-padding">
              <div data-aos="fade-left">
                <img className="img-fluid facilities-image" src={why3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Facilities;
