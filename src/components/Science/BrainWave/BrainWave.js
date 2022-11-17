import React from "react";
import { useState } from "react";
import "./BrainWave.css";
import Alfa from "../../../resource/gif/alpha.webp";
import Beta from "../../../resource/gif/beta.webp";
import Delta from "../../../resource/gif/delta.webp";
import Theta from "../../../resource/gif/theta.webp";

const BrainWave = () => {
  const [wave, setWave] = useState("delta");
  console.log(wave);
  const details = [
    {
      id: 1,
      textRight: false,
      waveName: "delta",
      waveImg: Alfa,
      title: "Delta Band",
      wave: "(1-4 Hz)",
      details:
        " Delta irregularity signifies brain disorders, learning problems, inability to think, and ADHD.",
    },
    {
      id: 2,
      textRight: true,
      waveName: "theta",
      waveImg: Beta,
      title: "Theta Band",
      wave: "(4-8 Hz)",
      details: " Theta band strength signifies usage of memory and navigation.",
    },
    {
      id: 3,
      textRight: false,
      waveName: "alpha",
      waveImg: Delta,
      title: "Alpha Band",
      wave: "(8-12 Hz)",
      details:
        "Increased levels of Alpha band signifies more relaxation both physically and mentally.",
    },
    {
      id: 4,
      textRight: true,
      waveName: "beta",
      waveImg: Theta,
      title: "Beta Band",
      wave: "(12-25 Hz)",
      details:
        " Beta power becomes stronger during motor activities that requires fine body part movements.",
    },
  ];
  return (
    <section className="brain-wave-bg">
      <div className="text-center margin-bottom-less pt-5">
        <h1 className="wave-heading shimmer ">Brain Wave Oscillations</h1>
      </div>

      <div className={`${wave}`}></div>
      <div className="row d-flex justify-content-center wave-content">
        {details.map((data) => (
          <>
            <div className="wave-imgs">
              <img className="img-fluid" src={data.waveImg} alt="" />
            </div>
            <div
              key={data.id}
              onMouseOver={() => setWave(data.waveName)}
              className={`col-md-5 wave-change-div m-4 p-4  ${
                data.textRight && "text-end-div"
              }`}
            >
              <h2 className="wave-title">
                {data.title} <span id="wave-amount">{data.wave}</span>
              </h2>

              <p className="wave-details">{data.details}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default BrainWave;
