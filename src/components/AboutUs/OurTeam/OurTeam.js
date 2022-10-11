import React, { useEffect } from "react";
import Gaurab from "../../../resource/team/Gauravgarg.jpg";
import Mayank from "../../../resource/team/Mayank.jpg";
import Rishav from "../../../resource/team/rishav.png";
import Sarthak from "../../../resource/team/Sarthak.JPEG";
import Shorya from "../../../resource/team/shourya.jpg";
import Sonal from "../../../resource/team/Sonal.png";
import Hritik from "../../../resource/team/hritik.jpeg";
import Yadevendra from "../../../resource/team/yadavendra.jpg";
import Mujjasam from "../../../resource/team/noore-mujjasam.jpeg";
import Reshul from "../../../resource/team/reshul.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./OurTeam.css";
import AOS from "aos";
import "aos/dist/aos.css";

const OurTeam = () => {
  const advisoryDetails = [
    {
      id: 1,
      imageUrl: Gaurab,
      linkedInUrl: "https://www.linkedin.com/in/gauravgarg4/",
      name: "Dr. Gaurab Garg",
      designation: "Machine Learning",
    },
    {
      id: 2,
      imageUrl: Mayank,
      linkedInUrl: "https://www.linkedin.com/in/mayank-saxena-5b30aa64/",
      name: "Mayank Saxena",
      designation: "Quality Assurance",
    },
    {
      id: 3,
      imageUrl: Rishav,
      linkedInUrl: "https://www.linkedin.com/in/rishavverma/",
      name: "Rishav Verma",
      designation: "Product Management",
    },
    {
      id: 4,
      imageUrl: Sarthak,
      linkedInUrl: "https://www.linkedin.com/in/sarthak-malik-582666126/",
      name: "Sarhtak Malik",
      designation: "Embedded Firmware",
    },
    {
      id: 5,
      imageUrl: Shorya,
      linkedInUrl: "https://www.linkedin.com/in/shourya-pratap-bhadauriya/",
      name: "Shourya Pratap Bhadauriya",
      designation: "Software Development",
    },
    {
      id: 6,
      imageUrl: Sonal,
      linkedInUrl: "https://www.linkedin.com/in/sonal-dixit-600bb816/",
      name: "Sonal Dixit",
      designation: "Machine Learning",
    },
    {
      id: 7,
      imageUrl: Hritik,
      linkedInUrl: "https://www.linkedin.com/in/hritik-malhotra-2b128721a/",
      name: "Hritik Malhotra",
      designation: "Report Executive",
    },
    {
      id: 8,
      imageUrl: Yadevendra,
      linkedInUrl: "https://www.linkedin.com/in/dr-yadavendra-yadav-b854561ba/",
      name: "Yadavendra Yadav",
      designation: "Machine Learning",
    },
    {
      id: 9,
      imageUrl: Mujjasam,
      linkedInUrl: "https://www.linkedin.com/in/noor-s-elearning-18b8871a1/",
      name: "Noore Mujjasam",
      designation: "Hardware Engineer",
    },
    {
      id: 10,
      imageUrl: Reshul,
      linkedInUrl: "https://www.linkedin.com/in/reshul-wate-62b4b7176/",
      name: "Reshul Wate",
      designation: "Software Development",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <h1 data-aos="fade-up" className="advisory-team">
        Our Team
      </h1>
      <div className="row d-flex">
        {advisoryDetails.map((details) => (
          <div className="col-md-4 d-flex justify-content-center advisory-div ">
            <div className="d-flex align-items-center our-team-div">
              <div>
                <div>
                  <img
                    className="leader-img team-member-image"
                    src={details.imageUrl}
                    alt=""
                  />
                </div>
                <div>
                  <a href={details.linkedInUrl} target="_blank">
                    <FontAwesomeIcon
                      className="linkedIn-icon"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
              </div>

              <div>
                <h5 className="advisory-name">{details.name}</h5>
                <p className="team-designation">{details.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
