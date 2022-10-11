import React from "react";
import FOCIIceHeader from "../../components/FOCIIce/FOCIIceHeader/FOCIIceHeader";
import Navbar from "../../components/Navbar/Navbar";
import FOCCISDK from "../../components/FOCIIce/FOCIISDK/FOCIISDK";
import Footer from "../../components/Footer/Footer";
import WhyFOCII from "../../components/FOCIIce/WhyFOCII/WhyFOCII";
import { useEffect } from "react";

const FOCII_ce = () => {
  useEffect(() => {
    document.title = "Focii CE | BrainAlive";
  }, []);
  return (
    <>
      <Navbar />
      <FOCIIceHeader />
       <FOCCISDK />
       <WhyFOCII/>
      <Footer /> 
    </>
  );
};

export default FOCII_ce;
