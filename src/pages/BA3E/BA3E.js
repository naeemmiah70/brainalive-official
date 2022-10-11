import React, { useEffect } from "react";
import AboutBa3e from "../../components/BA3E/AboutBa3e/AboutBa3e";
import AwakenedOne from "../../components/BA3E/AwakenedOne/AwakenedOne";
import Ba3eHeader from "../../components/BA3E/Ba3eHeader/Ba3eHeader";
import ConnectWithBa3e from "../../components/BA3E/ConnectWithBa3e/ConnectWithBa3e";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const BA3E = () => {
  useEffect(()=>{
    document.title = "BA3E | BrainAlive";
  },[])
  return (
    <>
      <Navbar />
      <Ba3eHeader />
      <AwakenedOne />
      <AboutBa3e />
      <ConnectWithBa3e />
      <Footer />
    </>
  );
};

export default BA3E;
