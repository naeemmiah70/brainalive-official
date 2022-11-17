import React, { useEffect } from "react";
import Gaurab from "../../../resource/team/gaurav-dubey.jpg";
import Abbas from "../../../resource/team/Abbas.jpg";
import Sujit from "../../../resource/team/Sujit.jpg";
import Adhavan from "../../../resource/team/Adhavan.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import '../AdvisoryBoard/AdvisoryBoard.css'
import './FoundingTeam.css'

const FoundingTeam = () => {
  const advisoryDetails = [
    {
      id: 1,
      imageUrl: Gaurab,
      linkedInUrl: "https://www.linkedin.com/in/gauravdubeyith/",
      name: "Gaurav Dubey",
      designation: "Founder | Business Strategy",
    },
    {
      id: 2,
      imageUrl: Abbas,
      linkedInUrl: "https://www.linkedin.com/in/mohammad-abbas-mahdi-a6493286/",
      name: "Mohammad Abbas Mehdi",
      designation: "Co-founder | Embedded Tech",
    },
    {
      id: 3,
      imageUrl: Sujit,
      linkedInUrl: "https://www.linkedin.com/in/sujit-roy01/",
      name: "Dr. Sujit Roy",
      designation: "Founding Advisor | Technology and Operations",
    },
    {
      id: 4,
      imageUrl: Adhavan,
      linkedInUrl: "https://www.linkedin.com/in/adhavanrk/",
      name: "Adhavan RK",
      designation: "Lead | Operations and Product",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <h1 data-aos="fade-up" className="advisory-team">
        Founding Team
      </h1>
      <div className="row founding-team-center">
        {advisoryDetails.map((details) => (
          <div
            className={`col-lg-4 col-md-6 d-flex justify-content-center advisory-div founding-team-underline ${
              details.id === 3 && "sujit"
            }`}
          >
            <a
              style={{ textDecoration: "none" }}
              href={details.linkedInUrl}
              target="_blank"
            >
              <div className="d-flex align-items-center ">
                <div>
                  <img className="leader-img" src={details.imageUrl} alt="" />
                </div>
                <div>
                  <h5 className="advisory-name">{details.name}</h5>
                  <p className="advisory-designation">{details.designation}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoundingTeam;
