import React, { useEffect } from "react";
import CareerHeader from "../../components/Career/CareerHeader/CareerHeader";
import Facilities from "../../components/Career/Facilities/Facilities";
import Openings from "../../components/Career/Openings/Openings";
import Reviews from "../../components/Career/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Career = () => {
  useEffect(() => {
    document.title = "Career | BrainAlive";
  }, []);
  return (
    <div>
      <Navbar />
      <CareerHeader />
      <Openings />
      <Facilities />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Career;
