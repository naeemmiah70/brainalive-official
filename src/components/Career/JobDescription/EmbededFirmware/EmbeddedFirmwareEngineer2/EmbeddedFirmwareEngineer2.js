import React from "react";
import { useState } from "react";
import '../../MachinLearning/MachineLearningEngineer1/MachineLearningEngineer1.css';

const EmbeddedFirmwareEngineer2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="description-bg">
      <div className=" d-flex job-des-colasp">
        <div
          onClick={() => setOpen((open) => !open)}
          className="w-100 d-flex justify-content-between"
          type="button"
          data-bs-toggle="collapse"
          href="#collapseExample3"
          aria-expanded="false"
          aria-controls="collapseExample3"
        >
          <h5 class="job-title-text"> Embedded Firmware Engineer - II</h5>
          {open === true ? (
            <h3 className="text-white fw-bold plus-icon">-</h3>
          ) : (
            <h3 className="text-white fw-bold plus-icon">+</h3>
          )}
        </div>
      </div>
      <div class="collapse" id="collapseExample3">
        <div class="card card-body description-bg text-white expanded-description">
          <div>
            <h5 className="job-title-heading">
              Role-Embedded Firmware Engineer - II
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
              continue to push technology forward.
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
                Perform debugging and provide technical support to the service
                team
              </li>
              <li>
                Participate in requirements analysis and collaborate with
                internal teams to produce firmware design and architecture
              </li>
              <li>Revise, update, refactor and debug code</li>
              <li>
                Drive peer reviews and peer testing across different modules
                developed
              </li>
              <li>
                Develop documentation throughout the product development life
                cycle
              </li>
              <li>
                Serve as an expert on applications and provide technical support
              </li>
            </ul>
          </div>
          {/* Required skills */}
          <div>
            <h5 className="job-title-heading">Required skills</h5>
            <ul className="about-job">
              <li>
                Bachelor Degree in Electronics / Electrical Engineering or
                Computer Science or related field
              </li>
              <li>2+ years of experience in Microcontroller programming</li>
              <li>
                Deep understanding of microcontroller's architecture and its
                working
              </li>
              <li>
                Experience in prototype bring-up and debugging, functional
                verification and manufacturing support
              </li>
              <li>
                Highly experienced in developing and debugging in embedded
                C/C++, RTOS
              </li>
              <li>
                Product development experience with 32 - Bit STM ARM
                Microcontroller Architectures
              </li>
              <li>
                Familiarity with source control management software (SVN, Git,
                Bitbucket)
              </li>
              <li>Excellent troubleshooting and communication skills</li>
            </ul>
          </div>
          {/* Preferred Qualification */}
          <div>
            <h5 className="job-title-heading">Preferred Qualification</h5>
            <ul className="about-job">
              <li>
                Experience in developing codes for the effective functioning of
                communication protocols such as UART, SPI, I2C, etc.
              </li>
              <li>
                Experience at handling huge codebases and designing of
                multi-layered architectures
              </li>
              <li>
                Experience with hardware debugging tools and interface like
                JTAG, SWD
              </li>
              <li>Experience with BLE and USB protocols</li>
              <li>
                Experience in optimisation of Microcontroller codes for specific
                goals like power efficiency
              </li>
              <li>
                Understanding of filtering algorithms both digital and analog
                for noise removal/minimization
              </li>
              <li>
                Prior Brain Computer Interface Device development experience
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

export default EmbeddedFirmwareEngineer2;
