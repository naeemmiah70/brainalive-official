import React from "react";
import { useState } from "react";
import '../MachineLearningEngineer1/MachineLearningEngineer1.css'

const MachineLearningEngineer2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="description-bg">
      <div className=" d-flex job-des-colasp">
        <div
          onClick={() => setOpen((open) => !open)}
          className="w-100 d-flex justify-content-between"
          type="button"
          data-bs-toggle="collapse"
          href="#collapseExample2"
          aria-expanded="false"
          aria-controls="collapseExample2"
        >
          <h5 class="job-title-text"> Machine Learning Engineer - II</h5>
          {open === true ? (
            <h3 className="text-white fw-bold plus-icon">-</h3>
          ) : (
            <h3 className="text-white fw-bold plus-icon">+</h3>
          )}
        </div>
      </div>
      <div class="collapse" id="collapseExample2">
        <div class="card card-body description-bg text-white expanded-description">
          <div>
            <h5 className="job-title-heading">
              Role-Machine Learning Engineer-II
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
                Conducting data processing and analysis, using DSP techniques
                and methods, to extract information of the EEG signal data for
                detection of various attributes of the mental state of a
                subject. Designing Machine Learning algorithms for
                electro-physiological signals in numerical analysis languages :
                Matlab, Python, C/C++etc.
              </li>
              <li>
                Demonstrating algorithms meeting accuracy requirements on
                general user population through statistical analyses and error
                estimation.
              </li>
              <li>
                Writing technical reports summarizing development, analysis,
                training and validation of the algorithms.
              </li>
            </ul>
          </div>
          {/* Required skills */}
          <div>
            <h5 className="job-title-heading">Required skills</h5>
            <ul className="about-job">
              <li>
                B.Tech./M.Tech/Ph.D in Computer Science or Electronics (Machine
                Learning, AI, Statistics, or equivalent)
              </li>
              <li>
                More than 2 years of industrial/academic experience in building
                ontology mapping and extraction models
              </li>
              <li>
                Strong technical skills, deep understanding, work experience and
                or exposure to DSP implementations, filtering, transforms, data
                visualization, machine learning, timing and signal recovery.
              </li>
              <li>
                Willingness to divert from the conventional methods to explore
                alternative approaches.
              </li>
              <li>
                Knowledge of optimization, multi-threaded development and
                cross-platform development.
              </li>
              <li>
                Experience in statistical analysis and programming projects on
                data analysis algorithms / signal processing.
              </li>
              <li>
                Experience using Python , C++ , R, MATLAB, Java or similar
                scripting language
              </li>
            </ul>
          </div>
          {/* Preferred Qualification */}
          <div>
            <h5 className="job-title-heading">Good to have skills</h5>
            <ul className="about-job">
              <li>Experience with real-time signal processing.</li>
              <li>
                Experience in advanced signal analysis of physiologic signals
                required with specific knowledge in EEG preferred.
              </li>
              <li>
                Extensive practical experience in several of the following
                areas: ML, Natural Language Processing, Ontology mapping,
                Clustering techniques, applied ML or AI
                features/products/systems
              </li>
              <li>
                Ability to handle multiple competing priorities in a fast-paced
                environment
              </li>
              <li>
                Significant peer reviewed scientific contributions in premier
                journals and conferences
              </li>
              <li>Proven track record of production achievements</li>
              <li>
                Strong personal interest in learning, researching, and creating
                new technologies with high customer impact
              </li>
              <li>
                Experience with defining research and development practices in
                an applied environment
              </li>
              <li>
                Superior verbal and written communication and presentation
                skills, ability to convey rigorous mathematical concepts and
                considerations to non-experts.
              </li>
              <li>
                Strong fundamentals in problem solving, algorithm design and
                complexity analysis
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

export default MachineLearningEngineer2;
