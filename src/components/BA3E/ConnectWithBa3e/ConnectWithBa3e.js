import React from "react";
import "./ConnectWithBa3e.css";
import connect from "../../../resource/ba3e/appScreen.png";
import icon1 from "../../../resource/ba3e/features/ic1.png";
import icon2 from "../../../resource/ba3e/features/fo2.png";
import icon3 from "../../../resource/ba3e/features/fo3.png";
import icon4 from "../../../resource/ba3e/features/fo4.png";
import icon5 from "../../../resource/ba3e/features/ic5.png";
import icon6 from "../../../resource/ba3e/features/ic6.png";
import icon7 from "../../../resource/ba3e/features/ic7.png";
import icon8 from "../../../resource/ba3e/features/ic8.png";

const ConnectWithBa3e = () => {
  const details = [
    {
      id: 1,
      icon: icon1,
      name: "Light Weight & Sleaker Design",
    },
    {
      id: 2,
      icon: icon2,
      name: "Real Time Artifact Removal",
    },
    {
      id: 3,
      icon: icon3,
      name: "Non Invasive & Wireless",
    },
    {
      id: 4,
      icon: icon4,
      name: "Bluetooth 5.0",
    },
    {
      id: 5,
      icon: icon5,
      name: "Sweat & Water Resistant",
    },
    {
      id: 6,
      icon: icon6,
      name: "Head Comfort",
    },
    {
      id: 7,
      icon: icon7,
      name: "USB Type C Fast Charging",
    },
    {
      id: 8,
      icon: icon8,
      name: "CE Certified",
    },
  ];
  return (
    <section>
      <div className="row connect-bg p-4">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h1 className="connect-text">Connect with BA<span className="threee">3</span>E</h1>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={connect} alt="" />
        </div>
      </div>
      <div className="features-bg">
        <div className="row connect-with-space">
          {details.map((data) => (
            <div className="col-md-3 text-center text-white p-5 connect-methods-card ">
              <img src={data.icon} alt="" />
              <p className="mt-3  feature-title">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectWithBa3e;
