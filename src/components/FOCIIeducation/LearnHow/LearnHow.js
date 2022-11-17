import React from "react";
import "./LearnHow.css";
import "../../../components/FOCIIce/FOCIISDK/FOCCISDK.css";
import "../../../components/FOCIIwebinar/KnowAudience/KnowAudience.css";
import teacher from "../../../resource/card-teacher.png";
import student from "../../../resource/card-student.png";
import content from "../../../resource/product/content-feedback.png";
import heat from "../../../resource/product/heat-map.png";
import early from "../../../resource/product/warning.png";
import intervention from "../../../resource/product/intervention.png";
import focus from "../../../resource/product/focus.png";
import stress from "../../../resource/product/stress.png";
import digital from "../../../resource/product/fitness.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LearnHow = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="focci-sdk-bg insight-top">
      <div className="focci-sdk-container">
        <h2 className="learn-how-heading text-center">
          Learn How Educators/Learners Leverage BrainAlive
        </h2>
        <div className="row d-flex justify-content-center">
          <div data-aos="fade-up" className="col-lg-3 col-md-5 learn-div">
            <div>
              <img className="img-fluid" src={teacher} alt="" />
              <h5 className="learn-header">
                How teachers/instructors use BrainAlive
              </h5>
              <p className="learn-details">
                Get more meaningful and deep insights on student performance and
                content likability
              </p>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="icon-width text-center">
                <img className="card-icon-size" src={content} alt="" />
                <p className="icon-text">Content Impact</p>
              </div>
              <div className="icon-width text-center">
                <img className="card-icon-size" src={heat} alt="" />
                <p className="icon-text">Heat Map</p>
              </div>
              <div className="icon-width text-center">
                <img className="card-icon-size" src={early} alt="" />
                <p className="icon-text">early warning</p>
              </div>
              <div className="icon-width text-center">
                <img className="card-icon-size" src={intervention} alt="" />
                <p className="icon-text">Intervention</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-lg-3 col-md-5 p-3 learn-div">
            <div>
              <img className="img-fluid" src={student} alt="" />
              <h5 className="learn-header">
                How teachers/instructors use BrainAlive
              </h5>
              <p className="learn-details">
                Get more meaningful and deep insights on student performance and
                content likability
              </p>
            </div>
            <div className="row ">
              <div className="d-flex justify-content-center">
                <div className="icon-width text-center">
                  <img className="card-icon-size" src={focus} alt="" />
                  <p className="icon-text">Focus Enhancement</p>
                </div>
                <div className="icon-width text-center">
                  <img className="card-icon-size" src={stress} alt="" />
                  <p className="icon-text">Stress Management</p>
                </div>
              </div>
              <div
                className="icon-width text-center mx-5 "
                style={{ height: "200px" }}
              >
                <img className="card-icon-size" src={digital} alt="" />
                <p className="icon-text">Digital Fitness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnHow;
