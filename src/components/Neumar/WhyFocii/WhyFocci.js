import React from "react";
import "./WhyFocii.css";
import icon1 from "../../../resource/icon/install.png";
import icon2 from "../../../resource/icon/security.png";
import icon3 from "../../../resource/icon/real-time.png";
import icon4 from "../../../resource/icon/metrics.png";
import icon5 from "../../../resource/icon/Cross-platform.png";
import customer from "../../../resource/view1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhyFocci = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const details = [
    {
      id: 1,
      icon: icon1,
      title: "Easy to Use",
      details: "Doesn't need any additional installation or download.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Privacy and Security",
      details: "User’s Webcam images do not leave their devices.",
    },
    {
      id: 3,
      icon: icon3,
      title: "Real time",
      details: "Customised recommendations based on real-time user behavior.",
    },
    {
      id: 4,
      icon: icon4,
      title: "Additional Metrics",
      details:
        "FOCII data is complementary to google analytics and other web tools.",
    },
    {
      id: 5,
      icon: icon5,
      title: "Cross-platform",
      details:
        "Works across desktop and mobile platforms with all popular screen resolutions.",
    },
  ];
  return (
    <section className="interest-bg d-flex justify-content-center">
      <div className="focci-sdk-container">
        <div className="text-center pt-5">
          <h2 data-aos="fade-up" className="interest-heading">WHY FOCII</h2>
          <div className="bar"></div>
        </div>
        <div className="row">
          {details.map((data) => (
            <div data-aos="fade-up" className="col-md-4 d-flex align-items-center">
              <div className="">
                <img className="why-icon" src={data.icon} alt="" />
              </div>
              <div className="why-focii-div mt-5">
                <h4 className="why-title">{data.title}</h4>
                <p className="why-details">{data.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="my-5">
          <div data-aos="fade-up" className="bottom-banner mt-5 d-flex  align-items-center">
            <div  className="row p-3">
              <div style={{paddingLeft:"10%"}}  className="col-md-8">
                <h1 className="banner-text">View Your Customer Engagement</h1>
                <div class="btn_blue hovertext-container">
                  <p class="hovertext-p1">Try it for free</p>
                  <p class="hovertext-p2" style={{ color: "#cb3169" }}>
                    Coming Soon
                  </p>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <img style={{marginRight:"10%"}} className="customer-img" src={customer} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFocci;
