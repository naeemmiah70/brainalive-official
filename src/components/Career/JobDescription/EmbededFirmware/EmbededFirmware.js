import React from "react";
import EmbeddedFirmwareEngineer1 from "./EmbeddedFirmwareEngineer1/EmbeddedFirmwareEngineer1";
import EmbeddedFirmwareEngineer2 from "./EmbeddedFirmwareEngineer2/EmbeddedFirmwareEngineer2";
import '../MachinLearning/MachinLearning.css'

const EmbededFirmware = () => {
  return (
    <div>
      <div className="embedded-header ">
        <div className=" descriptio-header-dark d-flex align-items-center justify-content-center">
          <h1 className="job-title text-center">
            EMBEDDED FIRMWARE <br /> ENGINEER
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
            <EmbeddedFirmwareEngineer1></EmbeddedFirmwareEngineer1>
            <EmbeddedFirmwareEngineer2></EmbeddedFirmwareEngineer2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbededFirmware;
