import React from "react";
import "./ScienceHeader.css";
import Brain from "../../../resource/brain-img/empty.png";
import Line from "../../../resource/line.png";

const ScienceHeader = () => {
  return (
    <section className="scince-head">
      <div className="line-display-none">
        <div>
          <img className="line-1" src={Line} alt="" />
        </div>
        <div>
          <img className="line-2" src={Line} alt="" />
        </div>
      </div>
      <div className="bg-line">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-6">
            <div className="header-text-div">
              <h1 className="sceince-header-text">We</h1>
              <h1 className="sceince-header-text">Make The</h1>
              <h1 className="sceince-header-text">Intangible</h1>
              <h1 className="sceince-header-text">Tangible</h1>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div>
              <img className="img-fluid header-bran-img" src={Brain} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-7 d-flex justify-content-end">
              <h5 className="science-header-description text-start">
                BrainAlive uses computer vision and neuroscience to provide a
                revolutionary feedback on user engagement.
              </h5>
            </div>
            <div className="col-md-6"></div>
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
