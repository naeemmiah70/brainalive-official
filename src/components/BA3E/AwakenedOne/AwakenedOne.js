import React from "react";
import "./AwakenedOne.css";

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
      details: "System noise(RFI)",
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
          className="img-fluid"
          src="https://braina.live/images/ba3e/exploded.png"
          alt=""
        />
      </div>
      <div className="row d-flex justify-content-around">
        {details.map((details) => (
          <div key={details.id} className="text-center awekened-div-feature">
            <h4 className="text-white">{details.title}</h4>
            <small className="awekend-features">{details.details}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwakenedOne;
