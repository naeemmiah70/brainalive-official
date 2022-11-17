import React from "react";
import MachineLearningEngineer1 from "./MachineLearningEngineer1/MachineLearningEngineer1";
import MachineLearningEngineer2 from "./MachineLearningEngineer2/MachineLearningEngineer2";
import "./MachinLearning.css";

const MachineLearning = () => {
  return (
    <div>
      <div className="Machine-header ">
        <div className="descriptio-header-dark d-flex align-items-center justify-content-center">
          <h1 className="job-title text-center">
            MACHINE LEARNING <br /> ENGINEER
          </h1>
        </div>
      </div>
      <div className="job-bg d-flex justify-content-center">
        <div className="job-description-container p-3">
          <div>
            <h5 className="heading-about">About</h5>
            <p className="about-brainalive">
              At BrainAlive, we develop next generation BCI technologies that
              transform how humans use bio signals to develop a crisp, conscious
              understanding of their physiology, especially relating to their
              cognitive and emotional abilities. Our mission is to become the
              innovation leader in the area of Brain Computer Interface (BCI).
              We are building our reputation as the industry powerhouse for
              innovation in BCI applications in education and healthcare space.
            </p>
          </div>
          <div>
            <MachineLearningEngineer1></MachineLearningEngineer1>
            <MachineLearningEngineer2></MachineLearningEngineer2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
