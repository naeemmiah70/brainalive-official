import React from "react";
import { useState } from "react";
import '../../MachinLearning/MachineLearningEngineer1/MachineLearningEngineer1.css'

const EmbeddedFirmwareEngineer1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="description-bg">
      <div className=" d-flex job-des-colasp">
        <div
          onClick={() => setOpen((open) => !open)}
          className="w-100 d-flex justify-content-between"
          type="button"
          data-bs-toggle="collapse"
          href="#collapseExample1"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          <h5 class="job-title-text"> Embedded Firmware Engineer - I</h5>
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
              Role-Embedded Firmware Engineer - I
            </h5>
            <p className="about-brainalive">
              As an Embedded firmware Engineer at BrainAlive, you will have the
              opportunity to pioneer, develop and build out our footprint in
              consumer hardware. You will build and launch smart BCI wearables
              and other related products in line with BrainAlive's ambitious and
              visionary objectives. Your primary focus will be to enhance
              efficiency, stability and scalability of hardware system
              resources. We need you to be versatile, display leadership
              qualities and be enthusiastic to take on new problems as we
              continue to push technology forward
            </p>
          </div>
          {/* Responsibilities */}
          <div>
            <h5 className="job-title-heading">Responsibilities</h5>
            <ul className="about-job">
              <li>
                Develop codes for utilizing various hardware and capabilities
                built into a microcontroller, such as ADCs, timers, RTCs,
                power-saving and sleep modes, etc
              </li>
              <li>
                Develop codes for the effective functioning of communication
                protocols such as UART, SPI, I2C, etc
              </li>
              <li>
                Develop effective libraries for interfacing of various sensors
                and modules such as accelerometers, GSM, Bluetooth, etc
              </li>
              <li>
                Review/Debug/Maintain libraries and firmware developed by fellow
                engineers
              </li>
            </ul>
          </div>
          {/* Required skills */}
          <div>
            <h5 className="job-title-heading">Required skills</h5>
            <ul className="about-job">
              <li>Basic understanding of how an embedded system works.</li>
              <li>
                Familiarity with C/C++, the principles of writing effective
                codes
              </li>
              <li>Excellent communication skills</li>
            </ul>
          </div>
          {/* Good to have skills */}
          <div>
            <h5 className="job-title-heading">Good to have skills</h5>
            <ul className="about-job">
              <li>
                Understanding of microcontroller's architecture and its working
              </li>
              <li>
                Project Experience at handling huge codebases and designing of
                multi-layered architectures
              </li>
              <li>
                Project experience with hardware debugging tools and interface
                like JTAG, SWD
              </li>
              <li>Academic/Project experience with BLE and USB protocols</li>
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

export default EmbeddedFirmwareEngineer1;
