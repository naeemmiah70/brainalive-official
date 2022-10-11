import React from "react";
import { useEffect } from "react";
import BuyingDecision from "../../components/FociiShopper/BuyingDecision/BuyingDecision";
import FociiShopperHeader from "../../components/FociiShopper/FociiShopperHeader/FociiShopperHeader";
import ShopperSolution from "../../components/FociiShopper/ShopperSolution/ShopperSolution";
import YourQuestions from "../../components/FociiShopper/YourQuestions/YourQuestions";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const FociiShopper = () => {
  useEffect(() => {
    document.title = "Focii Shopper | BrainAlive";
  }, []);
  return (
    <>
      <Navbar />
      <FociiShopperHeader />
      <BuyingDecision />
      <YourQuestions />
      <ShopperSolution />
      <Footer />
    </>
  );
};

export default FociiShopper;
