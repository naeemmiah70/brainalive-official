import React from "react";
import "./ScienceHeader.css";
import Brain from "../../../resource/brain-img/empty.png";

const ScienceHeader = () => {
  return (
    <section className="scince-head">
      <div className="bg-line">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="header-text-div">
              <h1 className="sceince-header-text">We</h1>
              <h1 className="sceince-header-text">Make The</h1>
              <h1 className="sceince-header-text">Intangible</h1>
              <h1 className="sceince-header-text">Tangible</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img className="img-fluid header-bran-img" src={Brain} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <h5 className="science-header-description">
                BrainAlive uses computer vision and neuroscience to provide a
                revolutionary feedback on user engagement.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <p className="header-bottom-text">
          Our EEG + fNIRS headset, captures physiological signals of your brain
          to understand the cerebral circuit activations for corresponding user
          activities.
        </p>
      </div>
    </section>
  );
};

export default ScienceHeader;
