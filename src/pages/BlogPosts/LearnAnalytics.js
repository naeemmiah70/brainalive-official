import { React, useEffect } from "react";
import LearnAnalytic from "../../components/Blogs/LearnAnalytics/LearnAnalytic";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const LearnAnalytics = () => {
  useEffect(() => {
    document.title = "Learning Analytics | Braina Live Blog";
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <LearnAnalytic />
      <Footer />
    </>
  );
};

export default LearnAnalytics;
