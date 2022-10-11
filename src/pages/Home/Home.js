import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import HeaderVideo from "../../components/Home/HeaderVideo/HeaderVideo";
import OurSolutions from "../../components/Home/OurSolutions/OurSolutions";
import UserEngagement from "../../components/Home/UserEngagement/UserEngagement";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  useEffect(()=>{
    document.title = "BrainAlive";
  },[])
  return (
    <>
      <Navbar />
      <HeaderVideo />
      <UserEngagement />
      <OurSolutions/>
      <Footer />
    </>
  );
};

export default Home;
