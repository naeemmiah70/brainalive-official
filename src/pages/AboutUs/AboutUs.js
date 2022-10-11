import React, { useEffect, useState } from "react";
import About from "../../components/AboutUs/About/About";
import AboutHeader from "../../components/AboutUs/AboutHeader/AboutHeader";
import MeetOurTeam from "../../components/AboutUs/MeetOurTeam/MeetOurTeam";
import Mission from "../../components/AboutUs/Mission/Mission";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";

const AboutUs = () => {
  
  useEffect(()=>{
    document.title = "About | BrainAlive";
  },[])
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <div
        style={{ backgroundColor: "#212121" }}
        className="d-flex justify-content-center"
      >
        <div className="meet-our-team-section row">
          <About />
          <Mission />
        </div>
      </div>
      <MeetOurTeam />
      <Footer />
    </div>
  );
};

export default AboutUs;
