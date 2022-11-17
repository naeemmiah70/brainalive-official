import {React, useEffect} from "react";
import OnlineLearnings from "../../components/Blogs/OnlineLearning/OnlineLearnings";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const OnlineLearning = () => {
  useEffect(() => {
    document.title = "Can online learning be made a fitting alternative to traditional classroom? | Braina Live Blog";
  }, []);
  return (
    <>
      <Navbar />
      <OnlineLearnings />
      <Footer />
    </>
  );
};

export default OnlineLearning;
