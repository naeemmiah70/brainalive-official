import React from "react";
import { useEffect } from "react";
import AbhaRevolution from "../../components/AbhaScience/AbhaRevolution/AbhaRevolution";
import AbhaScienceHeader from "../../components/AbhaScience/AbhaScienceHeader/AbhaScienceHeader";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const AbhaScience = () => {
  useEffect(() => {
    document.title = "ABHA | BrainAlive";
  }, []);
  return (
    <div>
      <Navbar />
      <AbhaScienceHeader />
      <AbhaRevolution />
      <Footer/>
    </div>
  );
};

export default AbhaScience;
