import React from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Applications from "../../components/Neumar/Applications/Applications";
import FAQ from "../../components/Neumar/FAQ/FAQ";
import FOCIIservices from "../../components/Neumar/FOCIIservices/FOCIIservices";
import NeumarHeader from "../../components/Neumar/NeumarHeader/NeumarHeader";
import RegionOfInterest from "../../components/Neumar/RegionOfInterest/RegionOfInterest";
import WhyFocci from "../../components/Neumar/WhyFocii/WhyFocci";

const Neumar = () => {
  useEffect(()=>{
    document.title = "Neumar | BrainAlive";
  },[])
  return (
    <>
      <Navbar />
      <NeumarHeader />
      <FOCIIservices/>
      <RegionOfInterest />
      <WhyFocci />
      <Applications />
      <FAQ/>
      <Footer/>
    </>
  );
};

export default Neumar;
