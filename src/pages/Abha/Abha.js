import React, { useEffect } from "react";
import AbhaHeader from "../../components/Abha/AbhaHeader/AbhaHeader";
import AbhaServices from "../../components/Abha/AbhaServices/AbhaServices";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Abha = () => {
  useEffect(()=>{
    document.title = "ABHA | BrainAlive";
  },[])
  return (
    <>
      <Navbar />
      <AbhaHeader />
      <AbhaServices />
      <Footer />
    </>
  );
};

export default Abha;
