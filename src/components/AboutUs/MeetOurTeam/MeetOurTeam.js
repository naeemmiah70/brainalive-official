import React, { useEffect } from "react";
import AdvisoryBoard from "../AdvisoryBoard/AdvisoryBoard";
import FoundingTeam from "../FoundingTeam/FoundingTeam";
import OurTeam from "../OurTeam/OurTeam";
import "./MeetOurTeam.css";
import AOS from "aos";
import "aos/dist/aos.css";

const MeetOurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="meet-team-section">
      <h1 data-aos="fade-up" className="meet-team-title">Meet The Team</h1>
      <div className="d-flex justify-content-center">
        <div className="meet-our-team-section">
          <AdvisoryBoard />
          <FoundingTeam />
          <OurTeam />
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
