import React from "react";
import { useEffect } from "react";
import BrainAlivePlateform from "../../components/FOCIIeducation/BrainAlivePlateform/BrainAlivePlateform";
import EducationHeader from "../../components/FOCIIeducation/EducationHeader/EducationHeader";
import EmpowerInstruction from "../../components/FOCIIeducation/EmpowerInstruction/EmpowerInstruction";
import Insight from "../../components/FOCIIeducation/Insight/Insight";
import LearnHow from "../../components/FOCIIeducation/LearnHow/LearnHow";
import MakesSpecial from "../../components/FOCIIeducation/MakesSpeacial/MakesSpecial";
import OurOffers from "../../components/FOCIIeducation/OurOffers/OurOffers";
import TeachingAssistent from "../../components/FOCIIeducation/TeachingAssistant/TeachingAssistent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const FOCIIeducation = () => {
  useEffect(() => {
    document.title = "Focii Education | BrainAlive";
  }, []);
  return (
    <>
      <Navbar />
      <EducationHeader />
      <EmpowerInstruction />
      <OurOffers />
      <Insight />
      <TeachingAssistent />
      <MakesSpecial />
      <LearnHow />
      <BrainAlivePlateform />
      <Footer></Footer>
    </>
  );
};

export default FOCIIeducation;
