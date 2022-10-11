import React, { useEffect } from "react";
import FociiEvents from "../../components/FOCCI/FociiEvents/FociiEvents";
import FociiHeader from "../../components/FOCCI/FociiHeader/FociiHeader";
import FociiKnowMore from "../../components/FOCCI/FociiKnowMore/FociiKnowMore";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const FOCII = () => {
  useEffect(() => {
    document.title = "FOCII | BrainAlive";
  }, []);
  return (
    <>
      <Navbar />
      <FociiHeader />
      <FociiKnowMore />
      <FociiEvents />
      <Footer />
    </>
  );
};

export default FOCII;
