import React from "react";
import "./AwakenedOne.css";
import exploded from '../../../resource/ba3e/exploded.png'

const AwakenedOne = () => {
  const details = [
    {
      id: 1,
      title: "EEG",
      details: "Dry Electrode",
    },
    {
      id: 2,
      title: "24 Bits",
      details: "Resolution",
    },
    {
      id: 3,
      title: "110 dB",
      details: "Common Mode Rejection Radio",
    },
    {
      id: 4,
      title: "<5uv",
      details: "System Noise(RFI)",
    },
    {
      id: 5,
      title: "500",
      details: "Samples Per Second",
    },
  ];
  return (
    <section className="awakened-one-section">
      <div className="text-center">
        <h1 className="awekened-header">Be The Awakened One</h1>
        <img
          className="img-fluid awekend-one-img"
          src={exploded}
          alt=""
        />
      </div>
      <div className="row d-flex justify-content-around">
        {details.map((details) => (
          <div
            key={details.id}
            className="text-center awekened-div-feature"
          >
            <h4 className="awekend-features-title">{details.title}</h4>
            <small className="awekend-features">{details.details}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwakenedOne;
