import React, { useEffect } from "react";
import KnowAudience from "../../components/FOCIIwebinar/KnowAudience/KnowAudience";
import OurOfferings from "../../components/FOCIIwebinar/OurOfferings/OurOfferings";
import WebinarHeader from "../../components/FOCIIwebinar/WebinarHeader/WebinarHeader";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const FOCIIwebinar = () => {
  useEffect(() => {
    document.title = "Focii Webinar | BrainAlive";
  }, []);
  return (
    <>
      <Navbar />
      <WebinarHeader />
      <KnowAudience />
      <OurOfferings />
      <Footer />
    </>
  );
};

export default FOCIIwebinar;
