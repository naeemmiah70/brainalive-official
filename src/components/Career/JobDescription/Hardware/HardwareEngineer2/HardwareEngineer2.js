import React from "react";
import { useState } from "react";
import '../../MachinLearning/MachineLearningEngineer1/MachineLearningEngineer1.css'

const HardwareEngineer2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="description-bg">
      <div className=" d-flex job-des-colasp">
        <div
          onClick={() => setOpen((open) => !open)}
          className="w-100 d-flex justify-content-between"
          type="button"
          data-bs-toggle="collapse"
          href="#collapseExample6"
          aria-expanded="false"
          aria-controls="collapseExample6"
        >
          <h5 class="job-title-text"> Hardware Engineer - II</h5>
          {open === true ? (
            <h3 className="text-white fw-bold plus-icon">-</h3>
          ) : (
            <h3 className="text-white fw-bold plus-icon">+</h3>
          )}
        </div>
      </div>
      <div class="collapse" id="collapseExample6">
        <div class="card card-body description-bg text-white expanded-description">
          <div>
            <h5 className="job-title-heading">Role-Hardware Engineer - II</h5>
            <p className="about-brainalive">
              Our BCI wearables are so minimalistic and affordable that we can't
              just purchase off-the-shelf hardware, we have to make it
              ourselves. As a Hardware Engineer, you design and build
              next-generation consumer hardware products.. You develop from the
              lowest levels of circuit design to large system design and see
              those systems all the way through to high volume manufacturing.
              Your primary focus will be to design, develop and deploy the
              electrical architecture and the schematics for the end product. We
              need you to be versatile, display leadership qualities and be
              enthusiastic to take on new problems as we continue to push
              technology forward
            </p>
          </div>
          {/* Responsibilities */}
          <div>
            <h5 className="job-title-heading">Responsibilities</h5>
            <ul className="about-job">
              <li>
                Design and development of digital and analog electronics for
                control of high precision electronic systems
              </li>
              <li>
                Start to finish ownership of control boards and other
                electronics – from specification to design, prototype, and
                manufacturing
              </li>
              <li>
                Product level electrical design including component selection,
                branch circuit design and insulation coordination
              </li>
              <li>
                Collaborate with FW engineering team to successfully design,
                validate and deploy testing tools
              </li>
              <li>
                Develop documentation throughout the product development life
                cycle
              </li>
              <li>
                Review electronics designed and developed by fellow engineers
              </li>
            </ul>
          </div>
          {/* Required Qualification */}
          <div>
            <h5 className="job-title-heading">Required Qualification</h5>
            <ul className="about-job">
              <li>
                B.Tech, M.Tech in EEE/ECE or the equivalent in experience with
                evidence of exceptional ability
              </li>
              <li>
                2+ years of demonstrated successful experience in hardware
                design engineering within a product design environment
              </li>
              <li>
                Experience with analog, mixed power control circuit design
                including microcontrollers and DSPs
              </li>
              <li>
                Experience in debugging and evaluating micro controller based
                circuit problems
              </li>
              <li>
                Experience in supervision of PCB layout for minimal stray
                parasitics, placement strategies for better manufacturability,
                power/signal plane definition and EMC optimization
              </li>
              <li>
                Experience with Designer tool for Schematic & PCB layout design
              </li>
              <li>Excellent communication skills</li>
              <li>Outstanding analytical and problem-solving skills</li>
            </ul>
          </div>
          {/* Preferred Qualification */}
          <div>
            <h5 className="job-title-heading">Preferred Qualification</h5>
            <ul className="about-job">
              <li>
                Hands on experience in Micro/Milli volt amplification, filters
                and noise filtering techniques
              </li>
              <li>
                Experience in dual power supply, consumption calculation and
                optimization
              </li>
              <li>
                Experience in schematics capture, library generation, routing
                rules creation, signal integrity optimisation
              </li>
              <li>
                Understanding of noise control, circuit/PCB shielding, filtering
                algorithms both digital and analog
              </li>
              <li>
                Design experience in auxiliary circuitries for supporting the
                effective functioning of various sensors and modules, such as
                accelerometers, GSM, Bluetooth, etc.
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

export default HardwareEngineer2;
