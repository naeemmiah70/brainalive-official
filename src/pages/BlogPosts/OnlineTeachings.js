import { React, useEffect } from "react";
import OnlineTeaching from "../../components/Blogs/OnlineTeaching/OnlineTeaching";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const OnlineTeachings = () => {
  useEffect(() => {
    document.title = "Online teaching just got easier! | Braina Live Blog";
  }, []);
  return (
    <>
      <Navbar />
      <OnlineTeaching />
      <Footer />
    </>
  );
};

export default OnlineTeachings;
