import React from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BrainWave from "../../components/Science/BrainWave/BrainWave";
import OurComputerVision from "../../components/Science/OurComputerVision/OurComputerVision";
import ScienceBrainSwiper from "../../components/Science/ScienceBrainSwiper/ScienceBrainSwiper";
import ScienceHeader from "../../components/Science/ScienceHeader/ScienceHeader";

const Science = () => {
  useEffect(() => {
    document.title = "Science | BrainAlive";
  }, []);
  return (
    <>
      <Navbar />
      <ScienceHeader />
      <ScienceBrainSwiper />
      <BrainWave />
      <OurComputerVision />
      <Footer></Footer>
    </>
  );
};

export default Science;
