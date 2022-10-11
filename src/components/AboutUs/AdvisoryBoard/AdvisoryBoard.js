import React, { useEffect } from "react";
import Anwesha from "../../../resource/team/Anwesha.jpg";
import Anirban from "../../../resource/team/Anirban.jpg";
import Artus from "../../../resource/team/artus.jpg";
import Saugat from "../../../resource/team/Saugat.JPG";
import "./AdvisoryBoard.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AdvisoryBoard = () => {
  const advisoryDetails = [
    {
      id: 1,
      imageUrl: Anwesha,
      linkedInUrl:
        "https://scholar.google.co.in/citations?user=HuGUohQAAAAJ&hl=en",
      name: "Dr. Anwesha Khasnobish",
      designation: "BCI Technology",
    },
    {
      id: 2,
      imageUrl: Anirban,
      linkedInUrl:
        "https://www.essex.ac.uk/people/chowd32703/anirban-chowdhury",
      name: "Dr. Anirban Chowdhury",
      designation: "Nural Engineering",
    },
    {
      id: 3,
      imageUrl: Artus,
      linkedInUrl: "https://www.linkedin.com/in/artus-krohn-grimberghe/",
      name: "Artus Krohn-Grimberghe",
      designation: "AI Enterprise Solutions",
    },
    {
      id: 4,
      imageUrl: Saugat,
      linkedInUrl: "https://saugatbh.github.io/saugat/",
      name: "Dr. Saughat Bhattacharyya",
      designation: "Brain Computer Interfacing",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <h1 data-aos="fade-up" className="advisory-team">Avdisory Board</h1>
      <div className="row">
        {advisoryDetails.map((details) => (
          <div className="col-md-6 d-flex justify-content-center advisory-div">
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

export default AdvisoryBoard;
