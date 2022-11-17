import React from "react";
import { useState } from "react";
import "./MachineLearningEngineer1.css";

const MachineLearningEngineer1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="description-bg">
      <div className="d-flex job-des-colasp">
        <div
          onClick={() => setOpen((open) => !open)}
          className="w-100 d-flex justify-content-between"
          type="button"
          data-bs-toggle="collapse"
          href="#collapseExample1"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          <h5 class="job-title-text"> Machine Learning Engineer - I</h5>
          {open === true ? (
            <h3 className="text-white fw-bold plus-icon">-</h3>
          ) : (
            <h3 className="text-white fw-bold plus-icon">+</h3>
          )}
        </div>
      </div>
      <div class="collapse" id="collapseExample1">
        <div class="card card-body description-bg text-white expanded-description">
          <div>
            <h5 className="job-title-heading">
              Role-Machine Learning Engineer-I
            </h5>
            <p className="about-brainalive">
              Join BrainAlive and become part of our Machine Learning team that
              helps discover the information hidden in vast amounts of bio
              signal and computer vision data, to deliver smart products. Your
              primary focus will be on applying deep learning techniques, doing
              statistical analysis, and building high-quality classification and
              prediction systems integrated with our products. We need you to be
              versatile, display leadership qualities and be enthusiastic to
              take on new problems as we continue to push technology forward.
            </p>
          </div>
          {/* Responsibilities */}
          <div>
            <h5 className="job-title-heading">Responsibilities</h5>
            <ul className="about-job">
              <li>
                Designing Machine/deep Learning algorithms for
                electro-physiological signals
              </li>
              <li>
                Demonstrating algorithms meeting accuracy requirements on
                general user population through statistical analyses and error
                estimation
              </li>
              <li>
                Writing technical reports summarizing development, analysis,
                training and validation of the algorithms
              </li>
            </ul>
          </div>
          {/* Required skills */}
          <div>
            <h5 className="job-title-heading">Required skills</h5>
            <ul className="about-job">
              <li>Proficient in Python / MATLAB</li>
              <li>Understanding of data structures and data modeling</li>
              <li>
                Self-motivated individual with passion towards state-of-the-art
                technologies
              </li>
              <li>Excellent communication skills</li>
              <li>Outstanding analytical and problem-solving skills</li>
            </ul>
          </div>
          {/* Good to have skills */}
          <div>
            <h5 className="job-title-heading">Good to have skills</h5>
            <ul className="about-job">
              <li>
                Academic experience/strong project experience with machine
                learning or deep learning programming using libraries such as
                PyTorch, TensorFlow, OpenCV, Caffe
              </li>
              <li>
                Good background and understanding of mathematical concepts
                relating to probabilistic models, conditional probability,
                numerical methods and linear algebra.
              </li>
            </ul>
          </div>
          {/* You will fit in if you have: */}
          <div>
            <h5 className="job-title-heading">You will fit in if you have:</h5>
            <ul className="about-job">
              <li>Appreciation for Start-up</li>
              <li>
                Hacker attitude to make your way through unfamiliar territory
                with little help
              </li>
              <li>Enthusiasm to get things done with responsibility</li>
            </ul>
          </div>
          <div>
            <button
              className="apply-btn"
              onClick={() => (window.location = "mailto:info@braina.live")}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearningEngineer1;
