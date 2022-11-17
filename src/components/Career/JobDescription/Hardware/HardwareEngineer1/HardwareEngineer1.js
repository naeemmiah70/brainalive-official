import React from "react";
import { useState } from "react";
import '../../MachinLearning/MachineLearningEngineer1/MachineLearningEngineer1.css'

const HardwareEngineer1 = () => {
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
          <h5 class="job-title-text"> Hardware Engineer - I</h5>
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
            <h5 className="job-title-heading">Role-Hardware Engineer - I</h5>
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
                Designing power supplies for supporting the required functioning
                of the system
              </li>
              <li>
                Design auxiliary circuitries for supporting the effective
                functioning of various sensors and modules, such as
                accelerometers, GSM, Bluetooth, etc
              </li>
              <li>
                Review/Maintain electronics designed and developed by fellow
                engineers
              </li>
            </ul>
          </div>
          {/* Necessary skills */}
          <div>
            <h5 className="job-title-heading">Necessary skills</h5>
            <ul className="about-job">
              <li>Basic understanding of how an embedded system works</li>
              <li>Familiarity with the concepts of basic electronics</li>
              <li>Excellent communication skills</li>
              <li>Outstanding analytical and problem-solving skills</li>
            </ul>
          </div>
          {/* Good to have skills */}
          <div>
            <h5 className="job-title-heading">Good to have skills</h5>
            <ul className="about-job">
              <li>
                Familiarity with the fundamentals of schematic design and PCB
                layout techniques
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

export default HardwareEngineer1;
